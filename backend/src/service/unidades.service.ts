import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tracto } from '../entity/Tracto';
import { Tanque } from '../entity/Tanque';
import { Dolly } from '../entity/Dolly';

// 🔧 Función auxiliar para aplicar valores por defecto
function withDefaults<T extends Record<string, any>>(data: T): T {
  const now = new Date().toISOString().split('T')[0];

  const hasStatus = ['status', 'estado', 'estatus', 'trStatus', 'tnqStatus', 'dollyStatus']
    .some(k => data[k] !== undefined && data[k] !== null);

  return {
    ...data,
    status: hasStatus ? data.status : true,
    createdAt: data.createdAt || now,
    updatedAt: now,
  };
}

@Injectable()
export class UnidadesService {
  constructor(
    @InjectRepository(Tracto) private readonly tractoRepo: Repository<Tracto>,
    @InjectRepository(Tanque) private readonly tanqueRepo: Repository<Tanque>,
    @InjectRepository(Dolly)  private readonly dollyRepo: Repository<Dolly>,
  ) {}

  // ========= TRACTOS =========
  listTractos() {
    return this.tractoRepo.find();
  }

  async getTracto(trPlc: string) {
    const item = await this.tractoRepo.findOne({ where: { trPlc } });
    if (!item) throw new NotFoundException('Tracto no encontrado');
    return item;
  }

  createTracto(data: Partial<Tracto>) {
    const payload = withDefaults(data);
    const entity = this.tractoRepo.create(payload);
    return this.tractoRepo.save(entity);
  }

  async updateTracto(trPlc: string, data: Partial<Tracto>) {
    const now = new Date().toISOString().split('T')[0];
    await this.tractoRepo.update({ trPlc }, { ...data, updatedAt: now });
    return this.getTracto(trPlc);
  }

  async deleteTracto(trPlc: string) {
    const res = await this.tractoRepo.delete({ trPlc });
    if (!res.affected) throw new NotFoundException('Tracto no encontrado');
    return { deleted: true };
  }

  // ========= TANQUES (NUEVO) =========
  listTanques() {
    return this.tanqueRepo.find();
  }

  async getTanque(tnqId: number) {
    const item = await this.tanqueRepo.findOne({ where: { tnqId } });
    if (!item) throw new NotFoundException('Tanque no encontrado');
    return item;
  }

  createTanque(data: Partial<Tanque>) {
    const payload = withDefaults(data);
    const entity = this.tanqueRepo.create(payload);
    return this.tanqueRepo.save(entity);
  }

  async updateTanque(tnqId: number, data: Partial<Tanque>) {
    const now = new Date().toISOString().split('T')[0];
    await this.tanqueRepo.update({ tnqId }, { ...data, updatedAt: now });
    return this.getTanque(tnqId);
  }

  async deleteTanque(tnqId: number) {
    const res = await this.tanqueRepo.delete({ tnqId });
    if (!res.affected) throw new NotFoundException('Tanque no encontrado');
    return { deleted: true };
  }

  // ========= DOLLIES =========
  listDollies() {
    return this.dollyRepo.find();
  }

  async getDolly(dollyId: string) {
    const item = await this.dollyRepo.findOne({ where: { dollyId } });
    if (!item) throw new NotFoundException('Dolly no encontrado');
    return item;
  }

  createDolly(data: Partial<Dolly>) {
    const payload = withDefaults(data);
    const entity = this.dollyRepo.create(payload);
    return this.dollyRepo.save(entity);
  }

  async updateDolly(dollyId: string, data: Partial<Dolly>) {
    const now = new Date().toISOString().split('T')[0];
    await this.dollyRepo.update({ dollyId }, { ...data, updatedAt: now });
    return this.getDolly(dollyId);
  }

  async deleteDolly(dollyId: string) {
    const res = await this.dollyRepo.delete({ dollyId });
    if (!res.affected) throw new NotFoundException('Dolly no encontrado');
    return { deleted: true };
  }
}
