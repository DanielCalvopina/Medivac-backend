import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Folio } from 'src/entity/Folio';
import { Producto } from 'src/entity/Producto';
import { Viaje } from 'src/entity/Viaje';
import { Tanque } from 'src/entity/Tanque';
import { Mancuerna } from 'src/entity/Mancuerna';
import { MancTanq } from 'src/entity/MancTanq';
import { Estaciones } from 'src/entity/Estaciones';
import { EstacionesFolio } from 'src/entity/EstacionesFolio';

@Injectable()
export class FolioService {
  constructor(
    @InjectRepository(Folio)
    private readonly folioRepo: Repository<Folio>,

    @InjectRepository(Producto)
    private readonly productoRepo: Repository<Producto>,

    @InjectRepository(Viaje)
    private readonly viajeRepo: Repository<Viaje>,

    @InjectRepository(Mancuerna)
    private readonly mancuernaRepo: Repository<Mancuerna>,

    @InjectRepository(Tanque)
    private readonly tanqueRepo: Repository<Tanque>,

    @InjectRepository(MancTanq)
    private readonly mancTanqRepo: Repository<MancTanq>,

    @InjectRepository(Estaciones)
    private readonly estacionesRepo: Repository<Estaciones>,

    @InjectRepository(EstacionesFolio)
    private readonly estacionesFolioRepo: Repository<EstacionesFolio>,
  ) {}

  private today(): string {
    return new Date().toISOString().slice(0, 10);
  }

  // =============================================================
  //                        CREATE
  // =============================================================
  async create(data: any) {
    const today = this.today();

    // 1. Viaje
    const viaje = await this.viajeRepo.findOne({
      where: { viajeId: data.viajeId },
    });
    if (!viaje) {
      throw new NotFoundException(`Viaje ${data.viajeId} no existe`);
    }

    // 2. Mancuerna
    const mancuerna = await this.mancuernaRepo.findOne({
      where: { mncId: viaje.mncId },
    });
    if (!mancuerna) {
      throw new NotFoundException(`Mancuerna ${viaje.mncId} no existe`);
    }

    // 3. Tanque por número de serie (tnqNumSer)
    if (!data.tnqNumse) {
      throw new BadRequestException(`tnqNumse es obligatorio.`);
    }

    const tanque = await this.tanqueRepo.findOne({
      where: { tnqNumSer: data.tnqNumse },
    });

    if (!tanque) {
      throw new NotFoundException(`Tanque ${data.tnqNumse} no existe`);
    }

    // Validación suave de pertenencia a mancuerna (no bloquea)
    try {
      const tanquesManc = await this.mancTanqRepo.find({
        where: { mncId: viaje.mncId },
      });

      const tanquesValidos = tanquesManc
        .map((t) => t.tnqId)
        .filter((id): id is number => id !== null);

      if (
        tanquesValidos.length > 0 &&
        tanque.tnqId &&
        !tanquesValidos.includes(tanque.tnqId)
      ) {
        // solo podrías loguear, pero NO se lanza error
      }
    } catch (e) {
      // ignoramos errores de MancTanq
    }

    // 4. Producto
    const producto = await this.productoRepo.findOne({
      where: { prdId: data.prdId },
    });
    if (!producto) {
      throw new NotFoundException(`Producto ${data.prdId} no existe`);
    }

    // 5. Crear folio (folOv numérico)
    const folio = this.folioRepo.create({
      ...data,
      folOv:
        data.folOv !== undefined && data.folOv !== null
          ? Number(data.folOv)
          : null,
      createdAt: today,
      updatedAt: today,
    });

    const saved = (await this.folioRepo.save(folio)) as unknown as Folio;

    // 6. Registrar estaciones en tabla intersección
    if (Array.isArray(data.estaciones)) {
      for (const estId of data.estaciones) {
        const est = await this.estacionesRepo.findOne({
          where: { etnsId: estId },
        });

        if (est) {
          await this.estacionesFolioRepo.save(
            this.estacionesFolioRepo.create({
              folId: saved.folId,
              etnsId: est.etnsId,
            }),
          );
        }
      }
    }

    return this.findOne(saved.folId);
  }

  // =============================================================
  //                        FIND ALL
  // =============================================================
  async findAll() {
    return this.folioRepo.find({
      relations: ['prd', 'viaje'],
    });
  }

  async findByViaje(viajeId: number) {
    return this.folioRepo.find({
      where: { viajeId },
      relations: [
        'viaje',
        'prd',
        'estacionesFolios',
        'estacionesFolios.etns',
      ],
      order: { folId: 'ASC' },
    });
  }

  // =============================================================
  //                        FIND ONE
  // =============================================================
  async findOne(id: number) {
    const folio = await this.folioRepo.findOne({
      where: { folId: id },
      relations: [
        'prd',
        'viaje',
        'estacionesFolios',
        'estacionesFolios.etns',
      ],
    });

    if (!folio) {
      throw new NotFoundException(`Folio ${id} no encontrado`);
    }

    return folio;
  }

  // =============================================================
  //                        UPDATE
  // =============================================================
  async update(id: number, data: any) {
    const today = this.today();

    const folio = await this.findOne(id);

    // Validar tanque si viene tnqNumse
    if (data.tnqNumse) {
      const viaje = folio.viaje;
      if (!viaje) {
        throw new NotFoundException(`Viaje asignado al folio no existe`);
      }

      const tanque = await this.tanqueRepo.findOne({
        where: { tnqNumSer: data.tnqNumse },
      });

      if (!tanque) {
        throw new NotFoundException(`Tanque ${data.tnqNumse} no existe`);
      }

      try {
        const tanquesManc = await this.mancTanqRepo.find({
          where: { mncId: viaje.mncId },
        });

        const tanquesValidos = tanquesManc
          .map((t) => t.tnqId)
          .filter((id): id is number => id !== null);

        if (
          tanquesValidos.length > 0 &&
          tanque.tnqId &&
          !tanquesValidos.includes(tanque.tnqId)
        ) {
          // solo log, no excepción
        }
      } catch (e) {
        // ignoramos error de MancTanq
      }
    }

    // folOv numérico si viene
    if (data.folOv !== undefined) {
      data.folOv =
        data.folOv !== null && data.folOv !== ''
          ? Number(data.folOv)
          : null;
    }

    Object.assign(folio, data, { updatedAt: today });

    const updated = (await this.folioRepo.save(folio)) as Folio;

    // Actualizar estaciones
    if (Array.isArray(data.estaciones)) {
      await this.estacionesFolioRepo.delete({ folId: id });

      for (const estId of data.estaciones) {
        const est = await this.estacionesRepo.findOne({
          where: { etnsId: estId },
        });

        if (est) {
          await this.estacionesFolioRepo.save(
            this.estacionesFolioRepo.create({
              folId: id,
              etnsId: est.etnsId,
            }),
          );
        }
      }
    }

    return updated;
  }

  // =============================================================
  //                        DELETE
  // =============================================================
  async remove(id: number) {
    await this.estacionesFolioRepo.delete({ folId: id });

    const folio = await this.findOne(id);
    await this.folioRepo.remove(folio);

    return { message: `Folio ${id} eliminado correctamente` };
  }
}
