import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, In, Repository } from 'typeorm';

import { Mancuerna } from '../entity/Mancuerna';
import { Tracto } from '../entity/Tracto';
import { Tanque } from '../entity/Tanque';
import { Dolly } from '../entity/Dolly';
import { Operador } from '../entity/Operador';
import { MancTanq } from '../entity/MancTanq';

type CreateOrUpdateMancuerna = Partial<Mancuerna> & {
  tanquesIds?: (number | string)[];
  tractoId?: string;
  operadorId?: string;
  tanque1Id?: number | string;
  tanque2Id?: number | string;
  mncCodigo?: string;
  mncDesc?: string;
  trPlc?: string;
  opCed?: string;
  mncNom?: string;
  npmcDesc?: string;
  dollyId?: string | number | null;
};

@Injectable()
export class MancuernaService {
  constructor(
    @InjectRepository(Mancuerna) private readonly mancuernaRepo: Repository<Mancuerna>,
    @InjectRepository(Tracto)    private readonly tractoRepo: Repository<Tracto>,
    @InjectRepository(Tanque)    private readonly tanqueRepo: Repository<Tanque>,
    @InjectRepository(Dolly)     private readonly dollyRepo: Repository<Dolly>,
    @InjectRepository(Operador)  private readonly operadorRepo: Repository<Operador>,
    @InjectRepository(MancTanq)  private readonly mancTanqRepo: Repository<MancTanq>,
  ) {}

  private todayStr(): string {
    return new Date().toISOString().slice(0, 10);
  }

  // ============================================================
  //        Obtener tanques asociados a UNA mancuerna
  // ============================================================
  private async getTanquesPorMancuerna(mncId: number): Promise<Tanque[]> {
    const links = await this.mancTanqRepo.find({
      where: { mncId },
      order: { mncTanqId: 'ASC' },
    });

    if (!links.length) return [];

    // Filtrar null y asegurar tipo number
    const tnqIds = links
      .map(l => l.tnqId)
      .filter((id): id is number => id !== null);

    if (!tnqIds.length) return [];

    const tanques = await this.tanqueRepo.find({
      where: { tnqId: In(tnqIds) },
    });

    const map = new Map(tanques.map(t => [t.tnqId, t]));

    return tnqIds
      .map(id => map.get(id))
      .filter((t): t is Tanque => Boolean(t));
  }

  // ============================================================
  //        Obtener tanques asociados a VARIAS mancuernas
  // ============================================================
  private async getTanquesPorMancuernas(mncIds: number[]): Promise<Map<number, Tanque[]>> {
    const out = new Map<number, Tanque[]>();
    if (!mncIds.length) return out;

    const links = await this.mancTanqRepo.find({
      where: { mncId: In(mncIds) },
      order: { mncTanqId: 'ASC' },
    });

    if (!links.length) return out;

    const allTnqIds = links
      .map(l => l.tnqId)
      .filter((id): id is number => id !== null);

    const tanques = await this.tanqueRepo.find({
      where: { tnqId: In(allTnqIds) },
    });

    const mapT = new Map(tanques.map(t => [t.tnqId, t]));

    for (const l of links) {
      if (l.tnqId === null) continue;

      const arr = out.get(l.mncId!) ?? [];
      const t = mapT.get(l.tnqId);
      if (t) arr.push(t);
      out.set(l.mncId!, arr);
    }

    return out;
  }

  // ============================================================
  //                          CREATE
  // ============================================================
  async create(payload: CreateOrUpdateMancuerna) {
    const today = this.todayStr();

    const trPlc = payload.trPlc ?? payload.tractoId;
    const opCed = payload.opCed ?? payload.operadorId;

    if (!trPlc) throw new BadRequestException('trPlc es requerido');
    if (payload.dollyId === undefined) throw new BadRequestException('dollyId es requerido');

    const tracto = await this.tractoRepo.findOne({ where: { trPlc } });
    if (!tracto) throw new NotFoundException(`Tracto ${trPlc} no existe`);

    const dol = await this.dollyRepo.findOne({ where: { dollyId: payload.dollyId } });
    if (!dol) throw new NotFoundException(`Dolly ${payload.dollyId} no existe`);

    if (opCed) {
      const op = await this.operadorRepo.findOne({ where: { opCed } });
      if (!op) throw new NotFoundException(`Operador ${opCed} no existe`);
    }

    const incoming =
      payload.tanquesIds ??
      [payload.tanque1Id, payload.tanque2Id].filter(Boolean);

    const tanquesIds = Array.from(
      new Set((incoming ?? []).map(v => Number(v)).filter(v => !isNaN(v)))
    );

    const dto: DeepPartial<Mancuerna> = {
      trPlc,
      opCed: opCed ?? null,
      dollyId: payload.dollyId,
      mncNom: payload.mncNom ?? payload.mncCodigo ?? `MNC-${trPlc}`,
      npmcDesc: payload.npmcDesc ?? payload.mncDesc ?? '',
      status: payload.status ?? 1,
      createdAt: today,
      updatedAt: today,
    };

    const mancu = await this.mancuernaRepo.save(this.mancuernaRepo.create(dto));

    if (tanquesIds.length) {
      const rows = tanquesIds.map(tnqId =>
        this.mancTanqRepo.create({ mncId: mancu.mncId, tnqId })
      );
      await this.mancTanqRepo.save(rows);
    }

    const tanques = await this.getTanquesPorMancuerna(mancu.mncId);
    return { ...mancu, tanques, tanque1: tanques[0] ?? null, tanque2: tanques[1] ?? null };
  }

  // ============================================================
  //                          READ ALL
  // ============================================================
  async findAll() {
    const base = await this.mancuernaRepo.find({
      relations: ['trPlc2', 'dolly', 'opCed2'],
      order: { mncId: 'ASC' },
    });

    const byId = await this.getTanquesPorMancuernas(base.map(b => b.mncId));

    return base.map(m => {
      const tanques = byId.get(m.mncId) ?? [];
      return { ...m, tanques, tanque1: tanques[0] ?? null, tanque2: tanques[1] ?? null };
    });
  }

  // ============================================================
  //                          READ ONE
  // ============================================================
  async findOne(id: number) {
    const mancu = await this.mancuernaRepo.findOne({
      where: { mncId: id },
      relations: ['trPlc2', 'dolly', 'opCed2'],
    });

    if (!mancu) throw new NotFoundException(`Mancuerna ${id} no encontrada`);

    const tanques = await this.getTanquesPorMancuerna(id);

    return { ...mancu, tanques, tanque1: tanques[0] ?? null, tanque2: tanques[1] ?? null };
  }

  // ============================================================
  //                          UPDATE
  // ============================================================
  async update(id: number, payload: CreateOrUpdateMancuerna) {
    const today = this.todayStr();

    await this.findOne(id);

    const trPlc = payload.trPlc ?? payload.tractoId;
    const opCed = payload.opCed ?? payload.operadorId;

    const incoming =
      payload.tanquesIds ??
      [payload.tanque1Id, payload.tanque2Id].filter(Boolean);

    const tanquesIds = Array.from(
      new Set((incoming ?? []).map(v => Number(v)).filter(v => !isNaN(v)))
    );

    const tanksProvided =
      'tanquesIds' in payload ||
      'tanque1Id' in payload ||
      'tanque2Id' in payload;

    const patch: DeepPartial<Mancuerna> = {
      ...(trPlc ? { trPlc } : {}),
      ...(opCed !== undefined ? { opCed } : {}),
      ...(payload.dollyId !== undefined ? { dollyId: payload.dollyId } : {}),
      ...(payload.mncNom !== undefined ? { mncNom: payload.mncNom } : {}),
      ...(payload.npmcDesc !== undefined ? { npmcDesc: payload.npmcDesc } : {}),
      ...(payload.status !== undefined ? { status: payload.status } : {}),
      updatedAt: today,
    };

    await this.mancuernaRepo.update(id, patch);

    if (tanksProvided) {
      await this.mancTanqRepo.delete({ mncId: id });

      if (tanquesIds.length) {
        const rows = tanquesIds.map(tnqId =>
          this.mancTanqRepo.create({ mncId: id, tnqId })
        );
        await this.mancTanqRepo.save(rows);
      }
    }

    const tanques = await this.getTanquesPorMancuerna(id);
    const mancu = await this.mancuernaRepo.findOne({
      where: { mncId: id },
      relations: ['trPlc2', 'dolly', 'opCed2'],
    });

    return { ...mancu!, tanques, tanque1: tanques[0] ?? null, tanque2: tanques[1] ?? null };
  }

  // ============================================================
  //                          DELETE
  // ============================================================
  async remove(id: number) {
    await this.mancTanqRepo.delete({ mncId: id });

    const mancu = await this.mancuernaRepo.findOne({ where: { mncId: id } });
    if (!mancu) throw new NotFoundException(`Mancuerna ${id} no encontrada`);

    await this.mancuernaRepo.remove(mancu);

    return { message: `Mancuerna ${id} eliminada correctamente` };
  }
}
