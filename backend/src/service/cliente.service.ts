import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from '../entity/Cliente';

@Injectable()
export class ClienteService {
  constructor(@InjectRepository(Cliente) private readonly repo: Repository<Cliente>) {}

  // Obtener todos los clientes
  findAll() {
    return this.repo.find();
  }

  // Obtener un cliente por ID
  async findOne(cliId: number) {
    const cliente = await this.repo.findOne({ where: { cliId } });
    if (!cliente) throw new NotFoundException('Cliente no encontrado');
    return cliente;
  }

  // Crear cliente con fechas automáticas
  async create(data: Partial<Cliente>) {
    if (data.status === undefined || data.status === null) {
      data.status = true as any;
    }

    const now = new Date().toISOString().split('T')[0]; // formato YYYY-MM-DD

    const nuevo = this.repo.create({
      ...data,
      createdAt: now,
      updatedAt: now,
    });

    return await this.repo.save(nuevo);
  }

  // Actualizar cliente con fecha de actualización automática
  async update(cliId: number, data: Partial<Cliente>) {
    const cliente = await this.findOne(cliId);
    if (!cliente) throw new NotFoundException('Cliente no encontrado');

    const now = new Date().toISOString().split('T')[0];
    await this.repo.update(cliId, { ...data, updatedAt: now });
    return this.findOne(cliId);
  }

  // Eliminar cliente
  async remove(cliId: number) {
    const res = await this.repo.delete(cliId);
    if (!res.affected) throw new NotFoundException('Cliente no encontrado');
    return { deleted: true };
  }
}
