import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Bitacora } from '../entity/Bitacora';
import { Viaje } from '../entity/Viaje';
import { 
  CreateBitacoraDto, 
  UpdateBitacoraDto, 
  BitacoraResponseDto, 
  BitacoraItemDto, 
  BitacoraItemsDto
} from '../dto/bitacora.dto';

@Injectable()
export class BitacoraService {
  constructor(
    @InjectRepository(Bitacora) private readonly bitRepo: Repository<Bitacora>,
    @InjectRepository(Viaje) private readonly viajeRepo: Repository<Viaje>,
  ) {}

  // === MAPPER DINÁMICO ===
  private toResponseDto(entity: Bitacora): BitacoraResponseDto {
    return {
      bitId: entity.bitId,
      viajeId: entity.viajeId, // Solo retornamos el ID plano
      bitFecIni: entity.bitFecIni,
      bitFecFin: entity.bitFecFin,
      bitTmpTotal: entity.bitTmpTotal,
      bitDesc: entity.bitDesc,
      status: entity.status,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      deletedAt: entity.deletedAt,
      
      // ELIMINADO: viaje (objeto anidado)
    };
  }

  // === CREATE ===
  async create(dto: CreateBitacoraDto): Promise<BitacoraItemDto> {
    // Validamos que exista, pero no lo cargamos para devolverlo
    const viaje = await this.viajeRepo.findOne({ where: { viajeId: dto.viajeId } });
    if (!viaje) throw new NotFoundException(`El viaje con ID ${dto.viajeId} no existe`);

    const entity = this.bitRepo.create({
      ...dto,
      status: dto.status ?? 1,
    });

    const saved = await this.bitRepo.save(entity);
    return this.findOne(saved.bitId); 
  }

  // === FIND ALL ===
  async findAll(): Promise<BitacoraItemsDto> {
    const list = await this.bitRepo.find({
      // relations: ['viaje'], // ELIMINADO para evitar ciclo y mejorar performance
      order: { createdAt: 'DESC' },
    });

    return { items: { bitacoras: list.map(b => this.toResponseDto(b)) } };
  }

  // === FIND ONE ===
  async findOne(id: number): Promise<BitacoraItemDto> {
    const bitacora = await this.bitRepo.findOne({
      where: { bitId: id },
      // relations: ['viaje'], // ELIMINADO
    });

    if (!bitacora) throw new NotFoundException(`Bitácora ${id} no encontrada`);

    return { items: { bitacora: this.toResponseDto(bitacora) } };
  }

  // === FIND BY VIAJE ===
  async findByViaje(viajeId: number): Promise<BitacoraItemsDto> {
    const list = await this.bitRepo.find({
      where: { viajeId },
      // relations: ['viaje'], // ELIMINADO
      order: { createdAt: 'DESC' },
    });

    return { items: { bitacoras: list.map(b => this.toResponseDto(b)) } };
  }

  // === UPDATE ===
  async update(id: number, dto: UpdateBitacoraDto): Promise<BitacoraItemDto> {
    const entity = await this.bitRepo.preload({
      bitId: id,
      ...dto,
    });

    if (!entity) throw new NotFoundException(`Bitácora ${id} no encontrada`);

    await this.bitRepo.save(entity);
    return this.findOne(id);
  }

  // === DELETE ===
  async remove(id: number): Promise<{ deleted: true }> {
    const res = await this.bitRepo.softDelete(id);
    if (!res.affected) throw new NotFoundException(`Bitácora ${id} no encontrada`);
    return { deleted: true };
  }
}