import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, In, Repository } from 'typeorm';

import { Viaje } from 'src/entity/Viaje';
import { Cliente } from 'src/entity/Cliente';
import { Mancuerna } from 'src/entity/Mancuerna';
import { Terminal } from 'src/entity/Terminal';
import { TerminalViaje } from 'src/entity/TerminalViaje';
import { Rutas } from 'src/entity/Rutas';
import { RtFlId } from 'src/entity/RtFlId';

type CreateOrUpdateViaje = Partial<Viaje> & {
  trmId?: number | string | null;
  rtsId?: number | string | null;
};

@Injectable()
export class ViajesService {
  constructor(
    @InjectRepository(Viaje) private readonly viajeRepo: Repository<Viaje>,
    @InjectRepository(Cliente) private readonly clienteRepo: Repository<Cliente>,
    @InjectRepository(Mancuerna) private readonly mancuernaRepo: Repository<Mancuerna>,
    @InjectRepository(Terminal) private readonly terminalRepo: Repository<Terminal>,
    @InjectRepository(TerminalViaje) private readonly termViajeRepo: Repository<TerminalViaje>,
    @InjectRepository(Rutas) private readonly rutasRepo: Repository<Rutas>,
    @InjectRepository(RtFlId) private readonly rtflRepo: Repository<RtFlId>,
  ) {}

  private todayStr(): string {
    return new Date().toISOString().slice(0, 10);
  }

  private async nextRtFlId(): Promise<number> {
    const last = await this.rtflRepo.find({
      order: { rtsVijId: 'DESC' },
      take: 1,
    });

    return last.length ? last[0].rtsVijId + 1 : 1;
  }

  // ======================================================
  // CREATE
  // ======================================================
  async create(data: CreateOrUpdateViaje) {
    const today = this.todayStr();

    const dto: DeepPartial<Viaje> = {
      ...data,
      createdAt: today,
      updatedAt: today,
    };

    const entity = this.viajeRepo.create(dto);
    const viaje = await this.viajeRepo.save(entity);

    // -------- TERMINAL --------
    if (data.trmId != null && String(data.trmId).trim() !== '') {
      const tId = Number(data.trmId);

      const terminal = await this.terminalRepo.findOne({ where: { trmId: tId } });
      if (!terminal) throw new NotFoundException(`Terminal ${tId} no existe`);

      await this.termViajeRepo.delete({ viajeId: viaje.viajeId });

      await this.termViajeRepo.save(
        this.termViajeRepo.create({
          viajeId: viaje.viajeId,
          trmId: tId,
        }),
      );
    }

    // -------- RUTA -------- (CORREGIDO)
    if (data.rtsId != null && String(data.rtsId).trim() !== '') {
      const rId = Number(data.rtsId);

      const ruta = await this.rutasRepo.findOne({ where: { etnsId2: rId } });
      if (!ruta) throw new NotFoundException(`Ruta ${rId} no existe`);

      const newId = await this.nextRtFlId(); // << AUTO ID

      await this.rtflRepo.save(
        this.rtflRepo.create({
          rtsVijId: newId,
          viajeId: viaje.viajeId,
          etnsId2: rId,
        }),
      );
    }

    return this.findOne(viaje.viajeId);
  }

  // ======================================================
  // GET ALL
  // ======================================================
  async findAll() {
    const viajes = await this.viajeRepo.find({
      relations: ['cli', 'mnc'],
      order: { viajeId: 'ASC' },
    });

    if (!viajes.length) return [];

    const ids = viajes.map(v => v.viajeId);

    const linksTerm = await this.termViajeRepo.find({ where: { viajeId: In(ids) } });
    const linksRuta = await this.rtflRepo.find({ where: { viajeId: In(ids) } });

    const termIds = Array.from(new Set(linksTerm.map(l => l.trmId).filter(id => id)));
    const rutaIds = Array.from(new Set(linksRuta.map(l => l.etnsId2).filter(id => id)));

    const terminales = termIds.length
      ? await this.terminalRepo.find({ where: { trmId: In(termIds) } })
      : [];

    const rutas = rutaIds.length
      ? await this.rutasRepo.find({ where: { etnsId2: In(rutaIds) } })
      : [];

    const mapTerm = new Map<number, Terminal>();
    const mapRuta = new Map<number, Rutas>();

    terminales.forEach(t => mapTerm.set(t.trmId, t));
    rutas.forEach(r => mapRuta.set(r.etnsId2, r));

    return viajes.map(v => {
      const tLink = linksTerm.find(l => l.viajeId === v.viajeId);
      const rLink = linksRuta.find(l => l.viajeId === v.viajeId);

      return {
        ...v,
        terminal: tLink?.trmId ? mapTerm.get(tLink.trmId) ?? null : null,
        ruta: rLink?.etnsId2 ? mapRuta.get(rLink.etnsId2) ?? null : null,
      };
    });
  }

  // ======================================================
  // GET ONE
  // ======================================================
  async findOne(id: number) {
    const viaje = await this.viajeRepo.findOne({
      where: { viajeId: id },
      relations: ['cli', 'mnc'],
    });

    if (!viaje) throw new NotFoundException(`Viaje ${id} no encontrado`);

    const linkTerm = await this.termViajeRepo.findOne({ where: { viajeId: id } });
    const linkRuta = await this.rtflRepo.findOne({ where: { viajeId: id } });

    let terminal: Terminal | null = null;
    let ruta: Rutas | null = null;

    if (linkTerm?.trmId != null) {
      terminal = await this.terminalRepo.findOne({ where: { trmId: linkTerm.trmId } }) ?? null;
    }

    if (linkRuta?.etnsId2 != null) {
      ruta = await this.rutasRepo.findOne({ where: { etnsId2: linkRuta.etnsId2 } }) ?? null;
    }

    return { ...viaje, terminal, ruta };
  }

  // ======================================================
  // UPDATE
  // ======================================================
  async update(id: number, data: CreateOrUpdateViaje) {
    const today = this.todayStr();

    const exists = await this.viajeRepo.findOne({ where: { viajeId: id } });
    if (!exists) throw new NotFoundException(`Viaje ${id} no encontrado`);

    await this.viajeRepo.update(id, { ...data, updatedAt: today });

    // -------- TERMINAL --------
    if ('trmId' in data) {
      await this.termViajeRepo.delete({ viajeId: id });

      if (data.trmId != null && String(data.trmId).trim() !== '') {
        const tid = Number(data.trmId);

        const terminal = await this.terminalRepo.findOne({ where: { trmId: tid } });
        if (!terminal) throw new NotFoundException(`Terminal ${tid} no existe`);

        await this.termViajeRepo.save(
          this.termViajeRepo.create({
            viajeId: id,
            trmId: tid,
          }),
        );
      }
    }

    // -------- RUTA -------- (CORREGIDO)
    if ('rtsId' in data) {
      await this.rtflRepo.delete({ viajeId: id });

      if (data.rtsId != null && String(data.rtsId).trim() !== '') {
        const rid = Number(data.rtsId);

        const ruta = await this.rutasRepo.findOne({ where: { etnsId2: rid } });
        if (!ruta) throw new NotFoundException(`Ruta ${rid} no existe`);

        const newId = await this.nextRtFlId();

        await this.rtflRepo.save(
          this.rtflRepo.create({
            rtsVijId: newId,
            viajeId: id,
            etnsId2: rid,
          }),
        );
      }
    }

    return this.findOne(id);
  }

  // ======================================================
  // DELETE
  // ======================================================
  async remove(id: number) {
    const viaje = await this.viajeRepo.findOne({ where: { viajeId: id } });
    if (!viaje) throw new NotFoundException(`Viaje ${id} no encontrado`);

    await this.termViajeRepo.delete({ viajeId: id });
    await this.rtflRepo.delete({ viajeId: id });
    await this.viajeRepo.remove(viaje);

    return { message: `Viaje ${id} eliminado correctamente` };
  }
}
