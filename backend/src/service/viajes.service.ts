import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Entidades
import { Viaje } from '../entity/Viaje';
import { Cliente } from '../entity/Cliente';
import { Mancuerna } from '../entity/Mancuerna';
import { Rutas } from '../entity/Rutas';
import { Terminal } from '../entity/Terminal';
import { RtFlId } from '../entity/RtFlId';
import { TerminalViaje } from '../entity/TerminalViaje';

// DTOs
import { 
  CreateViajeDto, 
  UpdateViajeDto, 
  ViajeItemDto, 
  ViajeItemsDto, 
  ViajeResponseDto 
} from '../dto/viaje.dto';
import { ClienteResponseDto } from '../dto/cliente.dto';
import { MancuernaResponseDto } from '../dto/mancuerna.dto';
import { RutasResponseDto } from '../dto/rutas.dto';
import { TerminalResponseDto } from '../dto/terminal.dto';
import { FolioResponseDto } from '../dto/folio.dto';
import { BitacoraResponseDto } from '../dto/bitacora.dto';
import { CargaResponseDto, SelloResponseDto } from '../dto/carga.dto';
import { DescargaResponseDto } from '../dto/descarga.dto';
import { EstacionesResponseDto } from '../dto/estaciones.dto';
import { ProductoResponseDto } from '../dto/producto.dto';

@Injectable()
export class ViajesService {
  constructor(
    @InjectRepository(Viaje) private readonly viajeRepo: Repository<Viaje>,
    @InjectRepository(Cliente) private readonly clienteRepo: Repository<Cliente>,
    @InjectRepository(Mancuerna) private readonly mancuernaRepo: Repository<Mancuerna>,
    @InjectRepository(Rutas) private readonly rutasRepo: Repository<Rutas>,
    @InjectRepository(Terminal) private readonly terminalRepo: Repository<Terminal>,
    @InjectRepository(RtFlId) private readonly rtFlRepo: Repository<RtFlId>,
    @InjectRepository(TerminalViaje) private readonly tvRepo: Repository<TerminalViaje>,
  ) {}

  // ==========================
  //      HELPER: MAPPER
  // ==========================
  private toResponseDto(v: Viaje): ViajeResponseDto {
    // 1. Rutas
    const rutasDtos = (v.rtFlS || []).map(link => ({ ...link.ruta } as RutasResponseDto));
    
    // 2. Terminales
    const termDtos = (v.terminalViajes || []).map(link => ({ ...link.trm } as TerminalResponseDto));

    // 3. Bitácoras
    const bitacorasDtos = (v.bitacoras || []).map(b => ({
       ...b, 
       viajeId: v.viajeId // Aseguramos el ID plano
    } as BitacoraResponseDto));

    // 4. FOLIOS (Mapeo Profundo Manual para asegurar estructura)
    const foliosDtos = (v.folios || []).map(f => {
      // a. Estaciones del Folio
      const estaciones = (f.estacionesFolios || []).map(ef => ({ ...ef.etns } as EstacionesResponseDto));
      
      // b. Cargas y sus Sellos
      const cargas = (f.cargas || []).map(c => ({
        ...c,
        folio: null, // Evitar ciclo
        sellos: (c.sellos || []).map(s => ({ sellosId: s.sellosId, sellosNum: s.sellosNum } as SelloResponseDto))
      } as CargaResponseDto));

      // c. Descargas
      const descargas = (f.descargas || []).map(d => ({
        ...d,
        folio: null // Evitar ciclo
      } as DescargaResponseDto));

      return {
        folId: f.folId,
        folCod: f.folCod,
        folName: f.folName,
        folDesc: f.folDesc,
        tnqNumse: f.tnqNumse,
        status: f.status,
        createdAt: f.createdAt,
        updatedAt: f.updatedAt,
        deletedAt: f.deletedAt,
        producto: f.prd ? ({ ...f.prd } as ProductoResponseDto) : null,
        estaciones: estaciones,
        cargas: cargas,
        descargas: descargas
      } as FolioResponseDto;
    });

    return {
      viajeId: v.viajeId,
      viajeCod: v.viajeCod,
      status: v.status,
      viajeInicio: v.viajeInicio,
      viajeFin: v.viajeFin,
      viajeDuracion: v.viajeDuracion,
      createdAt: v.createdAt,
      updatedAt: v.updatedAt,
      
      cliente: v.cli ? ({ ...v.cli } as ClienteResponseDto) : null,
      mancuerna: v.mnc ? ({ ...v.mnc } as any as MancuernaResponseDto) : null, 
      
      rutas: rutasDtos,
      terminales: termDtos,
      folios: foliosDtos,
      bitacoras: bitacorasDtos
    };
  }

  // ==========================
  //        HELPER: RELATIONS
  // ==========================
  // Definimos las relaciones necesarias para traer TODO el árbol
  private getRelations(): string[] {
    return [
      'cli', 
      'mnc',
      'rtFlS', 'rtFlS.ruta',
      'terminalViajes', 'terminalViajes.trm',
      'bitacoras',
      // ÁRBOL DE FOLIOS COMPLETO:
      'folios',
      'folios.prd',                        // Producto
      'folios.estacionesFolios', 'folios.estacionesFolios.etns', // Estaciones
      'folios.cargas', 'folios.cargas.sellos', // Cargas y Sellos
      'folios.descargas'                   // Descargas
    ];
  }

  // ==========================
  //        FIND ONE
  // ==========================
  async findOne(id: number): Promise<ViajeItemDto> {
    const viaje = await this.viajeRepo.findOne({
      where: { viajeId: id },
      relations: this.getRelations() // Usamos el helper de relaciones profundas
    });

    if (!viaje) throw new NotFoundException(`Viaje ${id} no encontrado`);
    return { items: { viaje: this.toResponseDto(viaje) } };
  }

  // ==========================
  //        FIND ALL
  // ==========================
  async findAll(): Promise<ViajeItemsDto> {
    const viajes = await this.viajeRepo.find({
      relations: this.getRelations(), // También traemos todo en el listado
      order: { createdAt: 'DESC' }
    });

    return { items: { viajes: viajes.map(v => this.toResponseDto(v)) } };
  }

  // ==========================
  //         CREATE
  // ==========================
  async create(dto: CreateViajeDto): Promise<ViajeItemDto> {
    const cli = await this.clienteRepo.findOne({ where: { cliId: dto.cliId } });
    if (!cli) throw new NotFoundException('Cliente no encontrado');
    const mnc = await this.mancuernaRepo.findOne({ where: { mncId: dto.mncId } });
    if (!mnc) throw new NotFoundException('Mancuerna no encontrada');

    const viaje = this.viajeRepo.create({
      mncId: dto.mncId,
      cliId: dto.cliId,
      viajeCod: dto.viajeCod,
      status: 1, 
    });
    const saved = await this.viajeRepo.save(viaje);

    if (dto.rutasIds?.length) {
      const links = dto.rutasIds.map(rid => this.rtFlRepo.create({ viajeId: saved.viajeId, etnsId2: rid }));
      await this.rtFlRepo.save(links);
    }

    if (dto.terminalesIds?.length) {
      const links = dto.terminalesIds.map(tid => this.tvRepo.create({ viajeId: saved.viajeId, trmId: tid }));
      await this.tvRepo.save(links);
    }

    return this.findOne(saved.viajeId);
  }

  // ==========================
  //     INICIAR VIAJE
  // ==========================
  async iniciarViaje(id: number): Promise<ViajeItemDto> {
    const viaje = await this.viajeRepo.findOne({ where: { viajeId: id } });
    if (!viaje) throw new NotFoundException('Viaje no encontrado');
    if (viaje.status !== 1) throw new BadRequestException('El viaje no está en estado pendiente');

    viaje.status = 2; 
    viaje.viajeInicio = new Date(); 
    await this.viajeRepo.save(viaje);

    return this.findOne(id);
  }

  // ==========================
  //     FINALIZAR VIAJE
  // ==========================
  async finalizarViaje(id: number): Promise<ViajeItemDto> {
    const viaje = await this.viajeRepo.findOne({ where: { viajeId: id } });
    if (!viaje) throw new NotFoundException('Viaje no encontrado');
    if (viaje.status !== 2) throw new BadRequestException('El viaje no está en curso');
    if (!viaje.viajeInicio) throw new BadRequestException('El viaje no tiene fecha de inicio registrada');

    const now = new Date();
    viaje.status = 3; 
    viaje.viajeFin = now;

    const diffMs = now.getTime() - viaje.viajeInicio.getTime();
    const diffHours = diffMs / (1000 * 60 * 60); 
    viaje.viajeDuracion = parseFloat(diffHours.toFixed(2));

    await this.viajeRepo.save(viaje);

    return this.findOne(id);
  }

  // ==========================
  //         UPDATE
  // ==========================
  async update(id: number, dto: UpdateViajeDto): Promise<ViajeItemDto> {
    const viaje = await this.viajeRepo.preload({
      viajeId: id,
      ...dto
    });
    if (!viaje) throw new NotFoundException('Viaje no encontrado');
    await this.viajeRepo.save(viaje);

    if (dto.rutasIds) {
      await this.rtFlRepo.delete({ viajeId: id });
      if (dto.rutasIds.length) {
         await this.rtFlRepo.save(dto.rutasIds.map(rid => this.rtFlRepo.create({ viajeId: id, etnsId2: rid })));
      }
    }

    if (dto.terminalesIds) {
      await this.tvRepo.delete({ viajeId: id });
      if (dto.terminalesIds.length) {
         await this.tvRepo.save(dto.terminalesIds.map(tid => this.tvRepo.create({ viajeId: id, trmId: tid })));
      }
    }

    return this.findOne(id);
  }

  // ==========================
  //         DELETE
  // ==========================
  async remove(id: number) {
    await this.rtFlRepo.delete({ viajeId: id });
    await this.tvRepo.delete({ viajeId: id });
    const res = await this.viajeRepo.softDelete(id);
    if (!res.affected) throw new NotFoundException('Viaje no encontrado');
    return { message: `Viaje ${id} eliminado` };
  }
}