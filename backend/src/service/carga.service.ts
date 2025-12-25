import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Carga } from '../entity/Carga';
import { Sellos } from '../entity/Sellos';
import { Folio } from '../entity/Folio';

import { 
  CreateCargaDto, 
  UpdateCargaDto, 
  CargaItemDto, 
  CargaItemsDto, 
  CargaResponseDto,
  SelloResponseDto
} from '../dto/carga.dto';

@Injectable()
export class CargaService {
  constructor(
    @InjectRepository(Carga) private readonly cargaRepo: Repository<Carga>,
    @InjectRepository(Sellos) private readonly sellosRepo: Repository<Sellos>,
    @InjectRepository(Folio) private readonly folioRepo: Repository<Folio>,
  ) {}

  // === MAPPER DINÁMICO ===
  private toResponseDto(entity: Carga): CargaResponseDto {
    // Transformamos los sellos de Entidad a DTO
    const sellosDto = (entity.sellos || []).map(s => ({
      sellosId: s.sellosId,
      sellosNum: s.sellosNum
    } as SelloResponseDto));

    return {
      cargaId: entity.cargaId,
      cargaFechEntrega: entity.cargaFechEntrega,
      cargaCargaReal: entity.cargaCargaReal,
      cargaBole: entity.cargaBole,
      cargaDensidad: entity.cargaDensidad,
      cargaTemperatura: entity.cargaTemperatura,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      
      // ELIMINADO: Mapeo de folio
      
      sellos: sellosDto
    };
  }

  // === FIND ALL ===
  async findAll(): Promise<CargaItemsDto> {
    const list = await this.cargaRepo.find({
      relations: ['sellos'], // Solo traemos sellos, NO folio
      order: { createdAt: 'DESC' }
    });
    return { items: { cargas: list.map(c => this.toResponseDto(c)) } };
  }

  // === FIND ONE ===
  async findOne(id: number): Promise<CargaItemDto> {
    const carga = await this.cargaRepo.findOne({
      where: { cargaId: id },
      relations: ['sellos'] // Solo traemos sellos
    });

    if (!carga) throw new NotFoundException(`Carga ${id} no encontrada`);

    return { items: { carga: this.toResponseDto(carga) } };
  }

  // === FIND BY FOLIO ===
  async findByFolio(folId: number): Promise<CargaItemsDto> {
    const list = await this.cargaRepo.find({
      where: { folId },
      relations: ['sellos'], // Solo traemos sellos
      order: { createdAt: 'DESC' }
    });
    return { items: { cargas: list.map(c => this.toResponseDto(c)) } };
  }

  // === CREATE ===
  async create(dto: CreateCargaDto): Promise<CargaItemDto> {
    // 1. Validar Folio (Aún necesitamos validar que exista para insertarlo)
    const folio = await this.folioRepo.findOne({ where: { folId: dto.folId } });
    if (!folio) throw new NotFoundException(`Folio ${dto.folId} no existe`);

    // 2. Crear Carga
    const carga = this.cargaRepo.create({
      folId: dto.folId,
      cargaFechEntrega: dto.cargaFechEntrega,
      cargaCargaReal: dto.cargaCargaReal,
      cargaBole: dto.cargaBole,
      cargaDensidad: dto.cargaDensidad,
      cargaTemperatura: dto.cargaTemperatura,
    });
    
    const savedCarga = await this.cargaRepo.save(carga);

    // 3. Crear Sellos (si vienen en la lista)
    if (dto.sellosLista && dto.sellosLista.length > 0) {
      const sellosEntities = dto.sellosLista.map(num => 
        this.sellosRepo.create({
          cargaId: savedCarga.cargaId,
          sellosNum: num
        })
      );
      await this.sellosRepo.save(sellosEntities);
    }

    return this.findOne(savedCarga.cargaId);
  }

  // === UPDATE ===
  async update(id: number, dto: UpdateCargaDto): Promise<CargaItemDto> {
    const carga = await this.cargaRepo.findOne({ where: { cargaId: id } });
    if (!carga) throw new NotFoundException(`Carga ${id} no encontrada`);

    // Actualizar campos simples
    const updated = await this.cargaRepo.preload({
      cargaId: id,
      ...dto
    });
    await this.cargaRepo.save(updated!);

    // Actualizar Sellos (Estrategia: Reemplazo Total)
    if (dto.sellosLista !== undefined) {
      // 1. Borrar sellos anteriores
      await this.sellosRepo.delete({ cargaId: id });

      // 2. Crear nuevos
      if (dto.sellosLista.length > 0) {
        const sellosEntities = dto.sellosLista.map(num => 
          this.sellosRepo.create({
            cargaId: id,
            sellosNum: num
          })
        );
        await this.sellosRepo.save(sellosEntities);
      }
    }

    return this.findOne(id);
  }

  // === DELETE ===
  async remove(id: number): Promise<{ deleted: true }> {
    // Borrar físicamente los sellos
    await this.sellosRepo.delete({ cargaId: id });
    
    // Soft Delete de la carga
    const res = await this.cargaRepo.softDelete(id);
    if (!res.affected) throw new NotFoundException(`Carga ${id} no encontrada`);
    
    return { deleted: true };
  }
}