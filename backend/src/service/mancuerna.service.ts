import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import { Mancuerna } from '../entity/Mancuerna';
import { Tracto } from '../entity/Tracto';
import { Tanque } from '../entity/Tanque';
import { Dolly } from '../entity/Dolly';
import { Operador } from '../entity/Operador';
import { MancTanq } from '../entity/MancTanq';
import { MancOp } from '../entity/MancOp'; // Importante

import {
  CreateMancuernaDto,
  MancuernaItemsDto,
  MancuernaItemDto,
  MancuernaResponseDto,
  MancOpResponseDto,
} from '../dto/mancuerna.dto';
import { OperadorResponseDto } from '../dto/operador.dto';
import { TanqueResponseDto } from '../dto/tanque.dto';
import { TractoResponseDto } from '../dto/tracto.dto';
import { DollyResponseDto } from '../dto/dolly.dto';

@Injectable()
export class MancuernaService {
  constructor(
    @InjectRepository(Mancuerna) private readonly mancuernaRepo: Repository<Mancuerna>,
    @InjectRepository(Tracto) private readonly tractoRepo: Repository<Tracto>,
    @InjectRepository(Dolly) private readonly dollyRepo: Repository<Dolly>,
    @InjectRepository(Tanque) private readonly tanqueRepo: Repository<Tanque>,
    @InjectRepository(Operador) private readonly opRepo: Repository<Operador>,
    @InjectRepository(MancTanq) private readonly mancTanqRepo: Repository<MancTanq>,
    @InjectRepository(MancOp) private readonly mancOpRepo: Repository<MancOp>,
  ) {}

  // ==========================
  //      HELPER: MAPPER
  // ==========================
  private toResponseDto(m: Mancuerna): MancuernaResponseDto {
    // 1. Mapear Tanques desde la relación intermedia
    const tanquesDtos = (m.mancTanqs || [])
      .map((mt) => mt.tnq)
      .filter((t) => !!t)
      .map((t) => ({ ...t } as TanqueResponseDto));

    // 2. Mapear Historial de Operadores desde MancOp
    // Ordenamos por fecha para que el más reciente salga primero o ultimo según prefieras
    const historialRaw = m.mancOps || [];
    
    const historial: MancOpResponseDto[] = historialRaw.map(mo => ({
      mancOpId: mo.mancOpId,
      fechaAsignacion: mo.createdAt,
      fechaTermino: mo.deletedAt,
      operador: { ...mo.operador } as OperadorResponseDto
    }));

    // 3. Determinar Operador ACTUAL
    // Es aquel registro en MancOp que NO tiene fecha de borrado (deletedAt === null)
    // y cuyo status es true (si usas esa bandera)
    const activeLog = historialRaw.find(mo => !mo.deletedAt); 
    const operadorActual = activeLog && activeLog.operador 
      ? ({ ...activeLog.operador } as OperadorResponseDto) 
      : null;

    return {
      mncId: m.mncId,
      mncNom: m.mncNom,
      npmcDesc: m.npmcDesc,
      status: m.status,
      createdAt: m.createdAt,
      updatedAt: m.updatedAt,
      // Relaciones directas
      tracto: m.tracto ? ({ ...m.tracto } as TractoResponseDto) : null,
      dolly: m.dolly ? ({ ...m.dolly } as DollyResponseDto) : null,
      // Datos calculados
      operadorActual: operadorActual,
      tanques: tanquesDtos,
      historialOperadores: historial
    } as any; // Cast any si faltan propiedades menores en el DTO
  }

  // ==========================
  //    LOGICA DE ESTADOS
  // ==========================

  private async ocuparComponentes(trPlc: string, dollyId: string, tanquesIds: number[], opCed: string) {
    await this.tractoRepo.update(trPlc, { status: 2 });
    await this.dollyRepo.update(dollyId, { status: 2 });
    if (tanquesIds.length) {
      await this.tanqueRepo.update({ tnqId: In(tanquesIds) }, { status: 2 });
    }
    // El operador pasa a false (Ocupado)
    await this.opRepo.update(opCed, { status: false }); 
  }

  private async liberarComponentes(trPlc: string, dollyId: string, tanquesIds: number[]) {
    await this.tractoRepo.update(trPlc, { status: 1 });
    await this.dollyRepo.update(dollyId, { status: 1 });
    if (tanquesIds.length) {
      await this.tanqueRepo.update({ tnqId: In(tanquesIds) }, { status: 1 });
    }
    // Nota: El operador se libera (true) buscando cual estaba activo en 'desarmar'
  }

  private async validarDisponibilidad(trPlc: string, dollyId: string, tanquesIds: number[], opCed: string) {
    const tr = await this.tractoRepo.findOneBy({ trPlc });
    if (!tr || tr.status !== 1) throw new ConflictException(`Tracto ${trPlc} no disponible`);

    const dl = await this.dollyRepo.findOneBy({ dollyId });
    if (!dl || dl.status !== 1) throw new ConflictException(`Dolly ${dollyId} no disponible`);

    const op = await this.opRepo.findOneBy({ opCed });
    if (!op) throw new NotFoundException(`Operador ${opCed} no existe`);
    if (op.status === false) throw new ConflictException(`Operador ${opCed} ya está ocupado`);

    if (tanquesIds.length > 0) {
      const tqs = await this.tanqueRepo.find({ where: { tnqId: In(tanquesIds) } });
      if (tqs.length !== tanquesIds.length) throw new NotFoundException('Faltan tanques');
      for (const t of tqs) {
        if (t.status !== 1) throw new ConflictException(`Tanque ${t.tnqPlacas} ocupado`);
      }
    }
  }

  // Busca si existe una mancuerna con la misma combinación física
  private async buscarMancuernaExistente(trPlc: string, dollyId: string, tanquesIds: number[]): Promise<Mancuerna | null> {
    const candidatos = await this.mancuernaRepo.find({
      where: { trPlc, dollyId },
      relations: ['mancTanqs'],
    });

    const inputSet = new Set(tanquesIds.map(String));

    for (const cand of candidatos) {
      const currentIds = cand.mancTanqs.map(mt => String(mt.tnqId));
      if (currentIds.length !== inputSet.size) continue;
      const match = currentIds.every(id => inputSet.has(id));
      if (match) return cand;
    }
    return null;
  }

  // ==========================
  //         CREATE
  // ==========================
  async create(dto: CreateMancuernaDto): Promise<MancuernaItemDto> {
    const tanquesIds = [...new Set(dto.tanquesIds || [])];

    // 1. Verificar existencia de combinación
    const existente = await this.buscarMancuernaExistente(dto.trPlc, dto.dollyId, tanquesIds);
    let mancuernaFinalId: number;

    if (existente) {
      // --- REACTIVAR ---
      if (existente.status === 1 || existente.status === 2) {
        throw new ConflictException('Mancuerna ya existe y está activa.');
      }
      
      // Validamos disponibilidad de todo antes de reactivar
      await this.validarDisponibilidad(dto.trPlc, dto.dollyId, tanquesIds, dto.opCed);

      existente.status = 1; 
      // NO asignamos opCed aquí a la mancuerna, porque ya no tiene esa columna
      await this.mancuernaRepo.save(existente);
      mancuernaFinalId = existente.mncId;

    } else {
      // --- NUEVA ---
      await this.validarDisponibilidad(dto.trPlc, dto.dollyId, tanquesIds, dto.opCed);

      const entity = this.mancuernaRepo.create({
        trPlc: dto.trPlc,
        dollyId: dto.dollyId,
        // opCed: dto.opCed,  <-- ELIMINADO: No existe en Mancuerna
        mncNom: dto.mncNom ?? `MNC-${dto.trPlc}`,
        npmcDesc: dto.npmcDesc,
        status: 1,
      });
      const saved = await this.mancuernaRepo.save(entity);
      
      // Guardar Tanques
      if (tanquesIds.length > 0) {
         const links = tanquesIds.map(tnqId => this.mancTanqRepo.create({ mncId: saved.mncId, tnqId }));
         await this.mancTanqRepo.save(links);
      }
      mancuernaFinalId = saved.mncId;
    }

    // --- LOGICA COMÚN: Registrar Operador y Ocupar ---

    // 1. Crear el registro en MancOp (Tabla Histórica/Activa)
    const nuevoLog = this.mancOpRepo.create({
      mncId: mancuernaFinalId,
      opCed: dto.opCed,
      status: true
    });
    await this.mancOpRepo.save(nuevoLog);

    // 2. Cambiar estados a OCUPADO (incluyendo al operador)
    await this.ocuparComponentes(dto.trPlc, dto.dollyId, tanquesIds, dto.opCed);

    return this.findOne(mancuernaFinalId);
  }

  // ==========================
  //    DESARMAR (STATUS 3)
  // ==========================
  async desarmar(mncId: number): Promise<{ message: string }> {
    // Necesitamos cargar mancOps para saber quién era el operador activo
    const mancuerna = await this.mancuernaRepo.findOne({
      where: { mncId },
      relations: ['mancTanqs', 'mancOps'] 
    });

    if (!mancuerna) throw new NotFoundException('Mancuerna no encontrada');
    if (mancuerna.status === 3) throw new ConflictException('Ya está desarmada');

    const tnqIds = mancuerna.mancTanqs.map(mt => mt.tnqId).filter(id => id !== null) as number[];

    // 1. Buscar Operador Activo en MancOp (el que no tiene deletedAt)
    const logActivo = mancuerna.mancOps?.find(mo => !mo.deletedAt);

    // 2. Cambiar Status Mancuerna a 3
    mancuerna.status = 3;
    await this.mancuernaRepo.save(mancuerna);

    // 3. Liberar Componentes Físicos
    if (mancuerna.trPlc && mancuerna.dollyId) {
      await this.liberarComponentes(mancuerna.trPlc, mancuerna.dollyId, tnqIds);
    }

    // 4. Liberar Operador y Cerrar MancOp
    if (logActivo) {
      // Liberar al operador (Status -> true)
      await this.opRepo.update(logActivo.opCed, { status: true });

      // Soft delete al registro de MancOp para marcarlo como "terminado"
      await this.mancOpRepo.softDelete(logActivo.mancOpId);
    }

    return { message: `Mancuerna ${mncId} desarmada correctamente.` };
  }

  // ==========================
  //        FIND ONE
  // ==========================
  async findOne(mncId: number): Promise<MancuernaItemDto> {
    const item = await this.mancuernaRepo.findOne({
      where: { mncId },
      relations: [
        'tracto', 'dolly', 
        'mancTanqs', 'mancTanqs.tnq',
        // IMPORTANTE: traer mancOps y su relación operador
      ], 
    });

    if (!item) throw new NotFoundException(`Mancuerna ${mncId} no encontrada`);

    // Truco: Para el historial completo (incluyendo soft-deleted), hacemos query aparte
    // porque findOne a veces filtra los deleted de las relaciones hijos.
    const historialCompleto = await this.mancOpRepo.find({
      where: { mncId },
      withDeleted: true, // Traer históricos
      relations: ['operador'],
      order: { createdAt: 'DESC' }
    });
    
    // Asignamos manual para que el mapper lo use
    item.mancOps = historialCompleto;

    return { items: { mancuerna: this.toResponseDto(item) } };
  }

  // ==========================
  //        FIND ALL
  // ==========================
  async findAll(): Promise<MancuernaItemsDto> {
    const list = await this.mancuernaRepo.find({
      relations: [
        'tracto', 'dolly', 
        'mancTanqs', 'mancTanqs.tnq', 
        'mancOps', 'mancOps.operador'
      ],
      order: { createdAt: 'DESC' },
    });
    
    // Nota: findAll traerá en mancOps solo los activos (sin deletedAt) por defecto.
    // Si quieres historial completo en el listado masivo, sería muy pesado,
    // así que dejamos el comportamiento por defecto (solo mostrará el operador actual).
    
    return { items: { mancuernas: list.map(m => this.toResponseDto(m)) } };
  }
}