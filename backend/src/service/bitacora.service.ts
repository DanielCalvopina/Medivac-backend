import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Bitacora } from 'src/entity/Bitacora';
import { Viaje } from 'src/entity/Viaje';

@Injectable()
export class BitacoraService {
  constructor(
    @InjectRepository(Bitacora)
    private readonly bitacoraRepository: Repository<Bitacora>,

    @InjectRepository(Viaje)
    private readonly viajeRepository: Repository<Viaje>,
  ) {}

  private todayStr(): string {
    return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  }

  // ======================================================
  //                       CREATE
  // ======================================================
  async create(data: any) {
    if (!data.viajeId) {
      throw new BadRequestException("viajeId es requerido");
    }

    const viaje = await this.viajeRepository.findOne({
      where: { viajeId: data.viajeId },
    });

    if (!viaje) {
      throw new NotFoundException(`El viaje con ID ${data.viajeId} no existe`);
    }

    const today = this.todayStr();

    const nuevaBitacora = this.bitacoraRepository.create({
      ...data,
      viajeId: data.viajeId,  // 👈 ahora SÍ se guardará
      viaje: viaje,           // 👈 relación opcional
      createdAt: today,
      updatedAt: today,
    });

    return await this.bitacoraRepository.save(nuevaBitacora);
  }


  // ======================================================
  //                     FIND ALL
  // ======================================================
  async findAll() {
    return await this.bitacoraRepository.find({
      relations: ['viaje'],
      order: { bitId: 'ASC' },
    });
  }

  // ======================================================
  //                    FIND ONE
  // ======================================================
  async findOne(id: number) {
    const bitacora = await this.bitacoraRepository.findOne({
      where: { bitId: id },
      relations: ['viaje'],
    });

    if (!bitacora) {
      throw new NotFoundException(`Bitácora con ID ${id} no encontrada`);
    }

    return bitacora;
  }
  async findByViaje(viajeId: number) {
    return await this.bitacoraRepository.find({
      where: { viaje: { viajeId } },
      relations: ['viaje'],
      order: { bitId: 'ASC' },
    });
  }

  // ======================================================
  //                      UPDATE
  // ======================================================
  async update(id: number, data: any) {
    const bitacora = await this.findOne(id);
    const today = this.todayStr();

    Object.assign(bitacora, data, { updatedAt: today });

    return await this.bitacoraRepository.save(bitacora);
  }

  // ======================================================
  //                      DELETE
  // ======================================================
  async remove(id: number) {
    const bitacora = await this.findOne(id);

    await this.bitacoraRepository.remove(bitacora);

    return { message: `Bitácora con ID ${id} eliminada correctamente` };
  }
}
