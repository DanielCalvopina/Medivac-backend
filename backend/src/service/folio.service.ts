import { 
  BadRequestException, 
  Injectable, 
  NotFoundException 
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Folio } from '../entity/Folio';
import { Producto } from '../entity/Producto';
import { Viaje } from '../entity/Viaje';
import { Tanque } from '../entity/Tanque';
import { Mancuerna } from '../entity/Mancuerna';
import { MancTanq } from '../entity/MancTanq';
import { Estaciones } from '../entity/Estaciones';
import { EstacionesFolio } from '../entity/EstacionesFolio';

// DTOs
import { 
  CreateFolioDto, 
  UpdateFolioDto, 
  FolioItemDto, 
  FolioItemsDto, 
  FolioResponseDto 
} from '../dto/folio.dto';
import { ProductoResponseDto } from '../dto/producto.dto';
import { EstacionesResponseDto } from '../dto/estaciones.dto';
import { CargaResponseDto, SelloResponseDto } from '../dto/carga.dto';
import { DescargaResponseDto } from '../dto/descarga.dto';

@Injectable()
export class FolioService {
  constructor(
    @InjectRepository(Folio) private readonly folioRepo: Repository<Folio>,
    @InjectRepository(Producto) private readonly productoRepo: Repository<Producto>,
    @InjectRepository(Viaje) private readonly viajeRepo: Repository<Viaje>,
    @InjectRepository(Mancuerna) private readonly mancuernaRepo: Repository<Mancuerna>,
    @InjectRepository(Tanque) private readonly tanqueRepo: Repository<Tanque>,
    @InjectRepository(MancTanq) private readonly mancTanqRepo: Repository<MancTanq>,
    @InjectRepository(Estaciones) private readonly estacionesRepo: Repository<Estaciones>,
    @InjectRepository(EstacionesFolio) private readonly estacionesFolioRepo: Repository<EstacionesFolio>,
  ) {}

  // ==========================
  //      HELPER: MAPPER
  // ==========================
  private toResponseDto(entity: Folio): FolioResponseDto {
    
    // A. Mapear Estaciones
    const estacionesDtos = (entity.estacionesFolios || [])
      .map(ef => ef.etns)
      .filter(e => !!e)
      .map(e => ({ ...e } as EstacionesResponseDto));

    // B. Mapear Cargas
    const cargasDtos = (entity.cargas || []).map(c => {
      return {
        cargaId: c.cargaId,
        cargaFechEntrega: c.cargaFechEntrega,
        cargaCargaReal: c.cargaCargaReal,
        cargaBole: c.cargaBole,
        cargaDensidad: c.cargaDensidad,
        cargaTemperatura: c.cargaTemperatura,
        createdAt: c.createdAt,
        updatedAt: c.updatedAt,
        folio: null, 
        sellos: (c.sellos || []).map(s => ({ sellosId: s.sellosId, sellosNum: s.sellosNum } as SelloResponseDto))
      } as CargaResponseDto;
    });

    // C. Mapear Descargas
    const descargasDtos = (entity.descargas || []).map(d => {
      return {
        descargaId: d.descargaId,
        descargaFechEntrega: d.descargaFechEntrega,
        descargaBole: d.descargaBole,
        descargaDensidad: d.descargaDensidad,
        descargaTemperatura: d.descargaTemperatura,
        createdAt: d.createdAt,
        updatedAt: d.updatedAt,
        folio: null 
      } as DescargaResponseDto;
    });

    return {
      folId: entity.folId,
      folCod: entity.folCod,
      folName: entity.folName,
      folDesc: entity.folDesc,
      tnqNumse: entity.tnqNumse,
      status: entity.status,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      deletedAt: entity.deletedAt,
      
      producto: entity.prd ? ({ ...entity.prd } as ProductoResponseDto) : null,
      
      // ELIMINADO: viaje
      
      estaciones: estacionesDtos,
      cargas: cargasDtos,
      descargas: descargasDtos
    };
  }

  // ==========================
  //         CREATE
  // ==========================
  async create(dto: CreateFolioDto): Promise<FolioItemDto> {
    const viaje = await this.viajeRepo.findOne({ where: { viajeId: dto.viajeId } });
    if (!viaje) throw new NotFoundException(`Viaje ${dto.viajeId} no existe`);

    const tanque = await this.tanqueRepo.findOne({ where: { tnqNumSer: dto.tnqNumse } });
    if (!tanque) throw new NotFoundException(`Tanque con serie ${dto.tnqNumse} no existe`);

    const prod = await this.productoRepo.findOne({ where: { prdId: dto.prdId } });
    if (!prod) throw new NotFoundException(`Producto ${dto.prdId} no existe`);

    const entity = this.folioRepo.create({
      viajeId: dto.viajeId,
      prdId: dto.prdId,
      folCod: dto.folCod,
      folName: dto.folName,
      folDesc: dto.folDesc,
      tnqNumse: dto.tnqNumse,
      status: dto.status ?? true,
    });
    
    const saved = await this.folioRepo.save(entity);

    if (dto.estacionesIds && dto.estacionesIds.length > 0) {
      const links = dto.estacionesIds.map(etnsId => 
        this.estacionesFolioRepo.create({ folId: saved.folId, etnsId })
      );
      await this.estacionesFolioRepo.save(links);
    }

    return this.findOne(saved.folId);
  }

  // ==========================
  //        FIND ALL
  // ==========================
  async findAll(): Promise<FolioItemsDto> {
    const list = await this.folioRepo.find({
      relations: [
        'prd',
        // 'viaje', // Ya no necesitamos traer viaje
        'estacionesFolios', 'estacionesFolios.etns',
        'cargas', 'cargas.sellos',
        'descargas'
      ],
      order: { createdAt: 'DESC' }
    });

    return { items: { folios: list.map(f => this.toResponseDto(f)) } };
  }

  // ==========================
  //     FIND BY VIAJE
  // ==========================
  async findByViaje(viajeId: number): Promise<FolioItemsDto> {
    const list = await this.folioRepo.find({
      where: { viajeId },
      relations: [
        'prd',
        'estacionesFolios', 'estacionesFolios.etns',
        'cargas', 'cargas.sellos',
        'descargas'
      ],
      order: { folId: 'ASC' },
    });
    return { items: { folios: list.map(f => this.toResponseDto(f)) } };
  }

  // ==========================
  //        FIND ONE
  // ==========================
  async findOne(id: number): Promise<FolioItemDto> {
    const folio = await this.folioRepo.findOne({
      where: { folId: id },
      relations: [
        'prd',
        'estacionesFolios', 'estacionesFolios.etns',
        'cargas', 'cargas.sellos',
        'descargas'
      ],
    });

    if (!folio) throw new NotFoundException(`Folio ${id} no encontrado`);

    return { items: { folio: this.toResponseDto(folio) } };
  }

  // ==========================
  //         UPDATE
  // ==========================
  async update(id: number, dto: UpdateFolioDto): Promise<FolioItemDto> {
    const folio = await this.folioRepo.findOne({ 
      where: { folId: id },
      relations: ['viaje'] // Aquí sí necesitamos viaje para validaciones internas (si cambias tanque)
    });
    
    if (!folio) throw new NotFoundException(`Folio ${id} no encontrado`);

    if (dto.tnqNumse && dto.tnqNumse !== folio.tnqNumse) {
      const tanque = await this.tanqueRepo.findOne({ where: { tnqNumSer: dto.tnqNumse } });
      if (!tanque) throw new NotFoundException(`Tanque ${dto.tnqNumse} no existe`);
    }

    const updatedEntity = await this.folioRepo.preload({
      folId: id,
      ...dto
    });
    
    await this.folioRepo.save(updatedEntity!);

    if (dto.estacionesIds !== undefined) {
      await this.estacionesFolioRepo.delete({ folId: id });
      
      if (dto.estacionesIds.length > 0) {
        const links = dto.estacionesIds.map(etnsId => 
          this.estacionesFolioRepo.create({ folId: id, etnsId })
        );
        await this.estacionesFolioRepo.save(links);
      }
    }

    return this.findOne(id);
  }

  // ==========================
  //         REMOVE
  // ==========================
  async remove(id: number): Promise<{ deleted: true }> {
    await this.estacionesFolioRepo.delete({ folId: id });
    const res = await this.folioRepo.softDelete(id);
    if (!res.affected) throw new NotFoundException(`Folio ${id} no encontrado`);
    return { deleted: true };
  }
}