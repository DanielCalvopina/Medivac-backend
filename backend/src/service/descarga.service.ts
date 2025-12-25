import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Descarga } from '../entity/Descarga';
import { Folio } from '../entity/Folio';

import { 
  CreateDescargaDto, 
  UpdateDescargaDto, 
  DescargaItemDto, 
  DescargaItemsDto, 
  DescargaResponseDto 
} from '../dto/descarga.dto';
import { FolioResponseDto } from '../dto/folio.dto';

@Injectable()
export class DescargaService {
  constructor(
    @InjectRepository(Descarga) private readonly descargaRepo: Repository<Descarga>,
    @InjectRepository(Folio) private readonly folioRepo: Repository<Folio>,
  ) {}

  // === MAPPER ===
  private toResponseDto(entity: Descarga): DescargaResponseDto {
    return {
      descargaId: entity.descargaId,
      descargaFechEntrega: entity.descargaFechEntrega,
      descargaBole: entity.descargaBole,
      descargaDensidad: entity.descargaDensidad,
      descargaTemperatura: entity.descargaTemperatura,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      // Mapeo seguro de Folio
      folio: entity.fol ? ({ ...entity.fol } as any as FolioResponseDto) : null,
    };
  }

  // === FIND ALL ===
  async findAll(): Promise<DescargaItemsDto> {
    const list = await this.descargaRepo.find({
      relations: ['fol'],
      order: { createdAt: 'DESC' }
    });
    return { items: { descargas: list.map(d => this.toResponseDto(d)) } };
  }

  // === FIND ONE ===
  async findOne(id: number): Promise<DescargaItemDto> {
    const descarga = await this.descargaRepo.findOne({
      where: { descargaId: id },
      relations: ['fol']
    });

    if (!descarga) throw new NotFoundException(`Descarga ${id} no encontrada`);

    return { items: { descarga: this.toResponseDto(descarga) } };
  }

  // === FIND BY FOLIO ===
  async findByFolio(folId: number): Promise<DescargaItemsDto> {
    const list = await this.descargaRepo.find({
      where: { folId },
      relations: ['fol'],
      order: { createdAt: 'DESC' }
    });
    return { items: { descargas: list.map(d => this.toResponseDto(d)) } };
  }

  // === CREATE ===
  async create(dto: CreateDescargaDto): Promise<DescargaItemDto> {
    // 1. Validar Folio
    const folio = await this.folioRepo.findOne({ where: { folId: dto.folId } });
    if (!folio) throw new NotFoundException(`Folio ${dto.folId} no existe`);

    // 2. Crear Descarga
    const entity = this.descargaRepo.create({
      folId: dto.folId,
      descargaFechEntrega: dto.descargaFechEntrega,
      descargaBole: dto.descargaBole,
      descargaDensidad: dto.descargaDensidad,
      descargaTemperatura: dto.descargaTemperatura,
    });

    const saved = await this.descargaRepo.save(entity);
    return this.findOne(saved.descargaId);
  }

  // === UPDATE ===
  async update(id: number, dto: UpdateDescargaDto): Promise<DescargaItemDto> {
    const descarga = await this.descargaRepo.preload({
      descargaId: id,
      ...dto
    });

    if (!descarga) throw new NotFoundException(`Descarga ${id} no encontrada`);

    await this.descargaRepo.save(descarga);
    return this.findOne(id);
  }

  // === DELETE ===
  async remove(id: number): Promise<{ deleted: true }> {
    const res = await this.descargaRepo.softDelete(id);
    if (!res.affected) throw new NotFoundException(`Descarga ${id} no encontrada`);
    
    return { deleted: true };
  }
}