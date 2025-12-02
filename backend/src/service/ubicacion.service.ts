import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estaciones } from '../entity/Estaciones';
import { Terminal } from '../entity/Terminal';
import { EtnsCli } from '../entity/EtnsCli';
import { TmnCli } from '../entity/TmnCli';
import { Cliente } from '../entity/Cliente';

@Injectable()
export class UbicacionService {
  constructor(
    @InjectRepository(Estaciones) private readonly estRepo: Repository<Estaciones>,
    @InjectRepository(Terminal)   private readonly trmRepo: Repository<Terminal>,
    @InjectRepository(Cliente)    private readonly cliRepo: Repository<Cliente>,
    @InjectRepository(EtnsCli)    private readonly etnsCliRepo: Repository<EtnsCli>,
    @InjectRepository(TmnCli)     private readonly tmnCliRepo: Repository<TmnCli>,
  ) {}

  // Utilidad: hoy en YYYY-MM-DD para columnas tipo DATE
  private todayStr(): string {
    return new Date().toISOString().slice(0, 10);
  }

  // ====== ESTACIONES (CRUD) ======
  listEstaciones() {
    return this.estRepo.find();
  }

  async getEstacion(etnsId: number) {
    const found = await this.estRepo.findOne({ where: { etnsId } });
    if (!found) throw new NotFoundException('Estación no encontrada');
    return found;
  }

  async createEstacion(data: Partial<Estaciones>) {
    const today = this.todayStr();
    const e = this.estRepo.create({
      ...data,
      createdAt: today,
      updatedAt: today,
    });
    return this.estRepo.save(e);
  }

  async updateEstacion(etnsId: number, data: Partial<Estaciones>) {
    const estacion = await this.getEstacion(etnsId);
    Object.assign(estacion, data, { updatedAt: this.todayStr() });
    return this.estRepo.save(estacion);
  }

  async deleteEstacion(etnsId: number) {
    const res = await this.estRepo.delete({ etnsId } as any);
    if (!res.affected) throw new NotFoundException('Estación no encontrada');
    return { deleted: true };
  }

  // ====== TERMINALES (CRUD) ======
  listTerminales() {
    return this.trmRepo.find();
  }

  async getTerminal(trmId: number) {
    const found = await this.trmRepo.findOne({ where: { trmId } });
    if (!found) throw new NotFoundException('Terminal no encontrada');
    return found;
  }

  async createTerminal(data: Partial<Terminal>) {
    const today = this.todayStr();
    const t = this.trmRepo.create({
      ...data,
      createdAt: today,
      updatedAt: today,
    });
    return this.trmRepo.save(t);
  }

  async updateTerminal(trmId: number, data: Partial<Terminal>) {
    const terminal = await this.getTerminal(trmId);
    Object.assign(terminal, data, { updatedAt: this.todayStr() });
    return this.trmRepo.save(terminal);
  }

  async deleteTerminal(trmId: number) {
    const res = await this.trmRepo.delete({ trmId } as any);
    if (!res.affected) throw new NotFoundException('Terminal no encontrada');
    return { deleted: true };
  }

  // ====== VÍNCULO: ESTACIÓN ↔ CLIENTE ======
  async vincularEstacionCliente(etnsId: number, cliId: number) {
    const [est, cli] = await Promise.all([
      this.estRepo.findOne({ where: { etnsId } }),
      this.cliRepo.findOne({ where: { cliId } }),
    ]);
    if (!est) throw new NotFoundException('Estación no encontrada');
    if (!cli) throw new NotFoundException('Cliente no encontrado');

    const existing = await this.etnsCliRepo.findOne({ where: { etnsId, cliId } as any });
    if (existing) throw new ConflictException('La estación ya está vinculada con ese cliente');

    const link = this.etnsCliRepo.create({ etnsId, cliId } as any);
    return this.etnsCliRepo.save(link);
  }

  async vincularTerminalCliente(trmId: number, cliId: number) {
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

  // ====== LISTAR ESTACIONES / TERMINALES POR CLIENTE ======
  async estacionesPorCliente(cliId: number) {
    const cli = await this.cliRepo.findOne({ where: { cliId } });
    if (!cli) throw new NotFoundException('Cliente no encontrado');

    const links = await this.etnsCliRepo.find({
      where: { cliId } as any,
      relations: ['etns'],
    });
    return links.map((l) => l.etns);
  }

  async terminalesPorCliente(cliId: number) {
    const cli = await this.cliRepo.findOne({ where: { cliId } });
    if (!cli) throw new NotFoundException('Cliente no encontrado');

    const links = await this.tmnCliRepo.find({
      where: { cliId } as any,
      relations: ['trm'],
    });
    return links.map((l) => l.trm);
  }

  async clientesPorEstacion(etnsId: number) {
    const estacion = await this.estRepo.findOne({ where: { etnsId } });
    if (!estacion) throw new NotFoundException('Estación no encontrada');

    const links = await this.etnsCliRepo.find({
      where: { etnsId } as any,
      relations: ['cli'],
    });

    return links.map((l) => l.cli);
  }

  async clientesPorTerminal(trmId: number) {
    const terminal = await this.trmRepo.findOne({ where: { trmId } });
    if (!terminal) throw new NotFoundException('Terminal no encontrada');

    const links = await this.tmnCliRepo.find({
      where: { trmId } as any,
      relations: ['cli'],
    });

    return links.map((l) => l.cli);
  }
}
