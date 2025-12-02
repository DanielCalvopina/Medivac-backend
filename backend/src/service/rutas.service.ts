import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rutas } from '../entity/Rutas';

@Injectable()
export class RutasService {
  constructor(
    @InjectRepository(Rutas)
    private readonly rutasRepo: Repository<Rutas>,
  ) {}

  // ====== LISTAR TODAS ======
  async findAll() {
    return this.rutasRepo.find();
  }

  // ====== OBTENER POR ID ======
  async findOne(etnsId2: number) {
    const ruta = await this.rutasRepo.findOne({ where: { etnsId2 } });
    if (!ruta) throw new NotFoundException('Ruta no encontrada');
    return ruta;
  }

  // ====== CREAR RUTA ======
  async create(data: Partial<Rutas>) {
    const now = new Date().toISOString().split('T')[0]; // fecha tipo string (YYYY-MM-DD)
    const nuevaRuta = this.rutasRepo.create({
      ...data,
      createdAt: now,
      updatedAt: now,
    });
    return this.rutasRepo.save(nuevaRuta);
  }

  // ====== ACTUALIZAR RUTA ======
  async update(etnsId2: number, data: Partial<Rutas>) {
    const ruta = await this.findOne(etnsId2);
    Object.assign(ruta, data, {
      updatedAt: new Date().toISOString().split('T')[0],
    });
    return this.rutasRepo.save(ruta);
  }

  // ====== ELIMINAR RUTA ======
  async remove(etnsId2: number) {
    const result = await this.rutasRepo.delete({ etnsId2 });
    if (!result.affected) throw new NotFoundException('Ruta no encontrada');
    return { deleted: true };
  }
}
