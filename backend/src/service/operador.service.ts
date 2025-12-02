import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Operador } from '../entity/Operador';

@Injectable()
export class OperadorService {
  constructor(
    @InjectRepository(Operador)
    private readonly repo: Repository<Operador>,
  ) {}

  // Obtener todos los operadores
  findAll() {
    return this.repo.find();
  }

  // Buscar un operador por su CURP (opCed)
  async findOne(opCed: string) {
    const item = await this.repo.findOne({ where: { opCed } });
    if (!item) throw new NotFoundException('Operador no encontrado');
    return item;
  }

  // Crear un nuevo operador
  async create(data: Partial<Operador>) {
    // status por defecto
    if (data.status === undefined || data.status === null) data.status = true as any;

    // ⚡ Fechas automáticas
    const now = new Date();
    (data as any).createdAt = now;
    (data as any).updatedAt = now;

    // ⚡ Valor por defecto para opVerificate
    if (!data.opVerificate || data.opVerificate.trim() === '') {
      data.opVerificate = 'pendiente'; // o "verificado" si aplica
    }

    const entity = this.repo.create(data);
    return this.repo.save(entity);
  }

  // Actualizar un operador existente
  async update(opCed: string, data: Partial<Operador>) {
    await this.findOne(opCed);
    (data as any).updatedAt = new Date();

    await this.repo.update({ opCed } as any, data);
    return this.findOne(opCed);
  }

  // Eliminar un operador
  async remove(opCed: string) {
    const res = await this.repo.delete({ opCed } as any);
    if (!res.affected) throw new NotFoundException('Operador no encontrado');
    return { deleted: true };
  }
}
