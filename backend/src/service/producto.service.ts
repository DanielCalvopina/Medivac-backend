import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from 'src/entity/Producto';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepo: Repository<Producto>,
  ) {}

  private today(): string {
    return new Date().toISOString().slice(0, 10);
  }

  // =======================================================
  //                        CREATE
  // =======================================================
  async create(data: any) {
    const today = this.today();

    if (!data.prdNombre || !data.prdDesc) {
      throw new BadRequestException('Nombre y descripción del producto son requeridos.');
    }

    const producto = this.productoRepo.create({
      ...data,
      createdAt: today,
      updatedAt: today,
    });

    return await this.productoRepo.save(producto);
  }

  // =======================================================
  //                        FIND ALL
  // =======================================================
  async findAll() {
    return await this.productoRepo.find();
  }

  // =======================================================
  //                        FIND ONE
  // =======================================================
  async findOne(id: number) {
    const producto = await this.productoRepo.findOne({ where: { prdId: id } });

    if (!producto) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado.`);
    }

    return producto;
  }

  // =======================================================
  //                        UPDATE
  // =======================================================
  async update(id: number, data: any) {
    const producto = await this.findOne(id);
    const today = this.today();

    Object.assign(producto, data, { updatedAt: today });

    return await this.productoRepo.save(producto);
  }

  // =======================================================
  //                        DELETE
  // =======================================================
  async remove(id: number) {
    const producto = await this.findOne(id);
    await this.productoRepo.remove(producto);

    return { message: `Producto con ID ${id} eliminado correctamente.` };
  }
}
