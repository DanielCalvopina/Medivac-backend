import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Tracto } from '../entity/Tracto';
import { Tanque } from '../entity/Tanque';
import { Dolly } from '../entity/Dolly';

import { CreateTractoDto, UpdateTractoDto, TractoResponseDto } from '../dto/tracto.dto';
import { CreateTanqueDto, UpdateTanqueDto, TanqueResponseDto } from '../dto/tanque.dto';
import { CreateDollyDto, UpdateDollyDto, DollyResponseDto } from '../dto/dolly.dto';
import { UnidadesItemsDto } from '../dto/unidades.dto';

@Injectable()
export class UnidadesService {
  constructor(
    @InjectRepository(Tracto) private readonly tractoRepo: Repository<Tracto>,
    @InjectRepository(Tanque) private readonly tanqueRepo: Repository<Tanque>,
    @InjectRepository(Dolly) private readonly dollyRepo: Repository<Dolly>,
  ) {}

  // ==========================
  //          MAPPERS
  // ==========================
  private tractoToResponse(x: Tracto): TractoResponseDto {
    return { ...x };
  }

  private tanqueToResponse(x: Tanque): TanqueResponseDto {
    return { ...x };
  }

  private dollyToResponse(x: Dolly): DollyResponseDto {
    return { ...x };
  }

  // ==========================
  //      BUNDLE GENERAL
  // ==========================
  // Renombrado de items() a getUnidades()
  async getUnidades(): Promise<UnidadesItemsDto> {
    const [tractos, tanques, dollies] = await Promise.all([
      this.tractoRepo.find({ order: { createdAt: 'DESC' } }),
      this.tanqueRepo.find({ order: { createdAt: 'DESC' } }),
      this.dollyRepo.find({ order: { createdAt: 'DESC' } }),
    ]);

    return {
      items: {
        tractos: tractos.map((x) => this.tractoToResponse(x)),
        tanques: tanques.map((x) => this.tanqueToResponse(x)),
        dollies: dollies.map((x) => this.dollyToResponse(x)),
      },
    };
  }

  // ==========================
  //          TRACTOS
  // ==========================
  async listTractos(): Promise<TractoResponseDto[]> {
    const items = await this.tractoRepo.find({ order: { createdAt: 'DESC' } });
    return items.map((x) => this.tractoToResponse(x));
  }

  async getTracto(trPlc: string): Promise<TractoResponseDto> {
    const item = await this.tractoRepo.findOne({ where: { trPlc } });
    if (!item) throw new NotFoundException('Tracto no encontrado');
    return this.tractoToResponse(item);
  }

  async createTracto(dto: CreateTractoDto): Promise<TractoResponseDto> {
    const entity = this.tractoRepo.create({
      ...dto,
      status: dto.status ?? 1,
    });
    const saved = await this.tractoRepo.save(entity);
    return this.tractoToResponse(saved);
  }

  async updateTracto(trPlc: string, dto: UpdateTractoDto): Promise<TractoResponseDto> {
    const loaded = await this.tractoRepo.preload({
      trPlc,
      ...dto,
    });
    if (!loaded) throw new NotFoundException('Tracto no encontrado');

    const saved = await this.tractoRepo.save(loaded);
    return this.tractoToResponse(saved);
  }

  async changeTractoStatus(trPlc: string, newStatus: number): Promise<TractoResponseDto> {
    const item = await this.tractoRepo.findOne({ where: { trPlc } });
    if (!item) throw new NotFoundException('Tracto no encontrado');

    item.status = newStatus;
    const saved = await this.tractoRepo.save(item);
    return this.tractoToResponse(saved);
  }

  async deleteTracto(trPlc: string): Promise<{ deleted: true }> {
    const res = await this.tractoRepo.softDelete({ trPlc });
    if (!res.affected) throw new NotFoundException('Tracto no encontrado');
    return { deleted: true };
  }

  // ==========================
  //          TANQUES
  // ==========================
  async listTanques(): Promise<TanqueResponseDto[]> {
    const items = await this.tanqueRepo.find({ order: { createdAt: 'DESC' } });
    return items.map((x) => this.tanqueToResponse(x));
  }

  async getTanque(tnqId: number): Promise<TanqueResponseDto> {
    const item = await this.tanqueRepo.findOne({ where: { tnqId } });
    if (!item) throw new NotFoundException('Tanque no encontrado');
    return this.tanqueToResponse(item);
  }

  async createTanque(dto: CreateTanqueDto): Promise<TanqueResponseDto> {
    const entity = this.tanqueRepo.create({
      ...dto,
      status: dto.status ?? 1,
    });
    const saved = await this.tanqueRepo.save(entity);
    return this.tanqueToResponse(saved);
  }

  async updateTanque(tnqId: number, dto: UpdateTanqueDto): Promise<TanqueResponseDto> {
    const loaded = await this.tanqueRepo.preload({
      tnqId,
      ...dto,
    });
    if (!loaded) throw new NotFoundException('Tanque no encontrado');

    const saved = await this.tanqueRepo.save(loaded);
    return this.tanqueToResponse(saved);
  }

  async changeTanqueStatus(tnqId: number, newStatus: number): Promise<TanqueResponseDto> {
    const item = await this.tanqueRepo.findOne({ where: { tnqId } });
    if (!item) throw new NotFoundException('Tanque no encontrado');

    item.status = newStatus;
    const saved = await this.tanqueRepo.save(item);
    return this.tanqueToResponse(saved);
  }

  async deleteTanque(tnqId: number): Promise<{ deleted: true }> {
    const res = await this.tanqueRepo.softDelete({ tnqId });
    if (!res.affected) throw new NotFoundException('Tanque no encontrado');
    return { deleted: true };
  }

  // ==========================
  //          DOLLIES
  // ==========================
  async listDollies(): Promise<DollyResponseDto[]> {
    const items = await this.dollyRepo.find({ order: { createdAt: 'DESC' } });
    return items.map((x) => this.dollyToResponse(x));
  }

  async getDolly(dollyId: string): Promise<DollyResponseDto> {
    const item = await this.dollyRepo.findOne({ where: { dollyId } });
    if (!item) throw new NotFoundException('Dolly no encontrado');
    return this.dollyToResponse(item);
  }

  async createDolly(dto: CreateDollyDto): Promise<DollyResponseDto> {
    const entity = this.dollyRepo.create({
      ...dto,
      status: dto.status ?? 1,
    });
    const saved = await this.dollyRepo.save(entity);
    return this.dollyToResponse(saved);
  }

  async updateDolly(dollyId: string, dto: UpdateDollyDto): Promise<DollyResponseDto> {
    const loaded = await this.dollyRepo.preload({
      dollyId,
      ...dto,
    });
    if (!loaded) throw new NotFoundException('Dolly no encontrado');

    const saved = await this.dollyRepo.save(loaded);
    return this.dollyToResponse(saved);
  }

  async changeDollyStatus(dollyId: string, newStatus: number): Promise<DollyResponseDto> {
    const item = await this.dollyRepo.findOne({ where: { dollyId } });
    if (!item) throw new NotFoundException('Dolly no encontrado');

    item.status = newStatus;
    const saved = await this.dollyRepo.save(item);
    return this.dollyToResponse(saved);
  }

  async deleteDolly(dollyId: string): Promise<{ deleted: true }> {
    const res = await this.dollyRepo.softDelete({ dollyId });
    if (!res.affected) throw new NotFoundException('Dolly no encontrado');
    return { deleted: true };
  }
}