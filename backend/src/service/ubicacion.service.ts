import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Estaciones } from '../entity/Estaciones';
import { Terminal } from '../entity/Terminal';
import { Cliente } from '../entity/Cliente';
import { EtnsCli } from '../entity/EtnsCli'; // Tabla intermedia Estacion-Cliente
import { TmnCli } from '../entity/TmnCli';   // Tabla intermedia Terminal-Cliente

import { CreateEstacionesDto, UpdateEstacionesDto, EstacionesResponseDto } from '../dto/estaciones.dto';
import { CreateTerminalDto, UpdateTerminalDto, TerminalResponseDto } from '../dto/terminal.dto';
import { ClienteResponseDto } from '../dto/cliente.dto';

import {
  UbicacionesItemsDto,
  EstacionesConClientesResponseDto,
  TerminalesConClientesResponseDto,
  VinculoEstacionClienteDto,
  VinculoTerminalClienteDto,
} from '../dto/ubicacion.dto';

@Injectable()
export class UbicacionService {
  constructor(
    @InjectRepository(Estaciones) private readonly estRepo: Repository<Estaciones>,
    @InjectRepository(Terminal) private readonly trmRepo: Repository<Terminal>,
    @InjectRepository(Cliente) private readonly cliRepo: Repository<Cliente>,
    @InjectRepository(EtnsCli) private readonly etnsCliRepo: Repository<EtnsCli>,
    @InjectRepository(TmnCli) private readonly tmnCliRepo: Repository<TmnCli>,
  ) {}

  // ==========================
  //      MAPPERS DINÁMICOS
  // ==========================
  private toEstacionResponse(entity: Estaciones): EstacionesResponseDto {
    return { ...entity } as EstacionesResponseDto;
  }

  private toTerminalResponse(entity: Terminal): TerminalResponseDto {
    return { ...entity } as TerminalResponseDto;
  }

  private toClienteResponse(entity: Cliente): ClienteResponseDto {
    return { ...entity } as ClienteResponseDto;
  }

  // ==========================
  //     BUNDLE (TODO JUNTO)
  // ==========================
  async getUbicaciones(): Promise<UbicacionesItemsDto> {
    const [estaciones, terminales] = await Promise.all([
      this.estRepo.find({ order: { createdAt: 'DESC' } }),
      this.trmRepo.find({ order: { createdAt: 'DESC' } }),
    ]);

    return {
      items: {
        estaciones: estaciones.map((e) => this.toEstacionResponse(e)),
        terminales: terminales.map((t) => this.toTerminalResponse(t)),
      },
    };
  }

  // ==========================
  //        ESTACIONES
  // ==========================
  async listEstaciones(): Promise<EstacionesResponseDto[]> {
    const items = await this.estRepo.find({ order: { createdAt: 'DESC' } });
    return items.map((x) => this.toEstacionResponse(x));
  }

  async getEstacion(etnsId: number): Promise<EstacionesResponseDto> {
    const found = await this.estRepo.findOne({ where: { etnsId } });
    if (!found) throw new NotFoundException('Estación no encontrada');
    return this.toEstacionResponse(found);
  }

  async createEstacion(dto: CreateEstacionesDto): Promise<EstacionesResponseDto> {
    const entity = this.estRepo.create({
      ...dto,
      status: dto.status ?? true,
      // createdAt/updatedAt automáticos por la Entidad
    });
    const saved = await this.estRepo.save(entity);
    return this.toEstacionResponse(saved);
  }

  async updateEstacion(etnsId: number, dto: UpdateEstacionesDto): Promise<EstacionesResponseDto> {
    const entity = await this.estRepo.preload({
      etnsId,
      ...dto,
    });
    if (!entity) throw new NotFoundException('Estación no encontrada');

    const saved = await this.estRepo.save(entity);
    return this.toEstacionResponse(saved);
  }

  async toggleEstacionStatus(etnsId: number): Promise<EstacionesResponseDto> {
    const item = await this.estRepo.findOne({ where: { etnsId } });
    if (!item) throw new NotFoundException('Estación no encontrada');

    item.status = !item.status;
    const saved = await this.estRepo.save(item);
    return this.toEstacionResponse(saved);
  }

  async deleteEstacion(etnsId: number): Promise<{ deleted: true }> {
    const res = await this.estRepo.softDelete(etnsId);
    if (!res.affected) throw new NotFoundException('Estación no encontrada');
    return { deleted: true };
  }

  // ==========================
  //        TERMINALES
  // ==========================
  async listTerminales(): Promise<TerminalResponseDto[]> {
    const items = await this.trmRepo.find({ order: { createdAt: 'DESC' } });
    return items.map((x) => this.toTerminalResponse(x));
  }

  async getTerminal(trmId: number): Promise<TerminalResponseDto> {
    const found = await this.trmRepo.findOne({ where: { trmId } });
    if (!found) throw new NotFoundException('Terminal no encontrada');
    return this.toTerminalResponse(found);
  }

  async createTerminal(dto: CreateTerminalDto): Promise<TerminalResponseDto> {
    const entity = this.trmRepo.create({
      ...dto,
      status: dto.status ?? true,
    });
    const saved = await this.trmRepo.save(entity);
    return this.toTerminalResponse(saved);
  }

  async updateTerminal(trmId: number, dto: UpdateTerminalDto): Promise<TerminalResponseDto> {
    const entity = await this.trmRepo.preload({
      trmId,
      ...dto,
    });
    if (!entity) throw new NotFoundException('Terminal no encontrada');

    const saved = await this.trmRepo.save(entity);
    return this.toTerminalResponse(saved);
  }

  async toggleTerminalStatus(trmId: number): Promise<TerminalResponseDto> {
    const item = await this.trmRepo.findOne({ where: { trmId } });
    if (!item) throw new NotFoundException('Terminal no encontrada');

    item.status = !item.status;
    const saved = await this.trmRepo.save(item);
    return this.toTerminalResponse(saved);
  }

  async deleteTerminal(trmId: number): Promise<{ deleted: true }> {
    const res = await this.trmRepo.softDelete(trmId);
    if (!res.affected) throw new NotFoundException('Terminal no encontrada');
    return { deleted: true };
  }

  // ==========================
  //    RELACIONES / VÍNCULOS
  // ==========================

  async vincularEstacionCliente(dto: VinculoEstacionClienteDto) {
    const { etnsId, cliId } = dto;

    // Verificar existencia
    const [est, cli] = await Promise.all([
      this.estRepo.findOne({ where: { etnsId } }),
      this.cliRepo.findOne({ where: { cliId } }),
    ]);

    if (!est) throw new NotFoundException('Estación no encontrada');
    if (!cli) throw new NotFoundException('Cliente no encontrado');

    // Verificar duplicados (usando any temporal para evitar conflictos de tipo en la tabla pivote)
    const existing = await this.etnsCliRepo.findOne({ where: { etnsId, cliId } as any });
    if (existing) throw new ConflictException('La estación ya está vinculada con ese cliente');

    const link = this.etnsCliRepo.create({ etnsId, cliId } as any);
    return this.etnsCliRepo.save(link);
  }

  async vincularTerminalCliente(dto: VinculoTerminalClienteDto) {
    const { trmId, cliId } = dto;

    const [trm, cli] = await Promise.all([
      this.trmRepo.findOne({ where: { trmId } }),
      this.cliRepo.findOne({ where: { cliId } }),
    ]);

    if (!trm) throw new NotFoundException('Terminal no encontrada');
    if (!cli) throw new NotFoundException('Cliente no encontrado');

    const existing = await this.tmnCliRepo.findOne({ where: { trmId, cliId } as any });
    if (existing) throw new ConflictException('La terminal ya está vinculada con ese cliente');

    const link = this.tmnCliRepo.create({ trmId, cliId } as any);
    return this.tmnCliRepo.save(link);
  }

  // ==========================
  //    CONSULTAS COMPUESTAS
  // ==========================
  // Optimizado para traer las relaciones de golpe y mapear en memoria
  
  async estacionesConClientes(): Promise<EstacionesConClientesResponseDto> {
    const estaciones = await this.estRepo.find({ order: { createdAt: 'DESC' } });
    const links = await this.etnsCliRepo.find({ relations: ['cli', 'etns'] });

    // Mapa para agrupar clientes por Estacion ID
    const map = new Map<number, ClienteResponseDto[]>();
    for (const l of links) {
      if (!l.etns?.etnsId || !l.cli) continue;
      
      const key = l.etns.etnsId;
      const arr = map.get(key) ?? [];
      arr.push(this.toClienteResponse(l.cli)); // Mapeo limpio
      map.set(key, arr);
    }

    return {
      estaciones: estaciones.map((e) => ({
        ...this.toEstacionResponse(e),
        clientes: map.get(e.etnsId) ?? [],
      })),
    };
  }

  async terminalesConClientes(): Promise<TerminalesConClientesResponseDto> {
    const terminales = await this.trmRepo.find({ order: { createdAt: 'DESC' } });
    const links = await this.tmnCliRepo.find({ relations: ['cli', 'trm'] });

    const map = new Map<number, ClienteResponseDto[]>();
    for (const l of links) {
      if (!l.trm?.trmId || !l.cli) continue;

      const key = l.trm.trmId;
      const arr = map.get(key) ?? [];
      arr.push(this.toClienteResponse(l.cli));
      map.set(key, arr);
    }

    return {
      terminales: terminales.map((t) => ({
        ...this.toTerminalResponse(t),
        clientes: map.get(t.trmId) ?? [],
      })),
    };
  }

  // Consultas específicas por cliente (útiles para selects dependientes)
  async estacionesPorCliente(cliId: number): Promise<EstacionesResponseDto[]> {
    const links = await this.etnsCliRepo.find({
      where: { cliId } as any, // as any si TypeORM se queja de la PK compuesta
      relations: ['etns'],
    });
    return links.map((l) => this.toEstacionResponse(l.etns));
  }

  async terminalesPorCliente(cliId: number): Promise<TerminalResponseDto[]> {
    const links = await this.tmnCliRepo.find({
      where: { cliId } as any,
      relations: ['trm'],
    });
    return links.map((l) => this.toTerminalResponse(l.trm));
  }
}