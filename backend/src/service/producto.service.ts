import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from '../entity/Producto';
import { CreateProductoDto, UpdateProductoDto, ProductoResponseDto } from '../dto/producto.dto';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepo: Repository<Producto>,
  ) {}

  // === MAPPER DINÁMICO ===
  private toResponseDto(entity: Producto): ProductoResponseDto {
    return { ...entity } as ProductoResponseDto;
  }

  // GET ALL
  async findAll(): Promise<ProductoResponseDto[]> {
    // Ordenamos por fecha de creación descendente
    const items = await this.productoRepo.find({ order: { createdAt: 'DESC' } });
    return items.map(item => this.toResponseDto(item));
  }

  // GET ONE
  async findOne(id: number): Promise<ProductoResponseDto> {
    const producto = await this.productoRepo.findOne({ where: { prdId: id } });
    if (!producto) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado.`);
    }
    return this.toResponseDto(producto);
  }

  // CREATE
  async create(dto: CreateProductoDto): Promise<ProductoResponseDto> {
    // Validación de negocio: Min no puede ser mayor a Max
    if (dto.prdMin > dto.prdMax) {
      throw new BadRequestException('El valor mínimo (prdMin) no puede ser mayor que el máximo (prdMax).');
    }

    const producto = this.productoRepo.create({
      ...dto,
      status: dto.status ?? true // Default true
    });

    const saved = await this.productoRepo.save(producto);
    return this.toResponseDto(saved);
  }

  // UPDATE
  async update(id: number, dto: UpdateProductoDto): Promise<ProductoResponseDto> {
    // Preload fusiona el DTO con la entidad existente basada en el ID
    // Esto evita tener que hacer un findOne manual antes para obtener los valores actuales
    const merged = await this.productoRepo.preload({
      prdId: id,
      ...dto,
    });
    
    if (!merged) throw new NotFoundException(`Producto con ID ${id} no encontrado.`);

    // Validación de negocio cruzada (Valores nuevos vs Valores existentes/precargados)
    // Como 'merged' ya tiene la combinación de lo viejo + lo nuevo, validamos directamente sobre 'merged'
    if (merged.prdMin > merged.prdMax) {
      throw new BadRequestException('Conflicto de rangos: El valor mínimo no puede ser mayor que el máximo.');
    }

    const saved = await this.productoRepo.save(merged);
    return this.toResponseDto(saved);
  }

  // TOGGLE STATUS
  async toggleStatus(id: number): Promise<ProductoResponseDto> {
    const producto = await this.productoRepo.findOne({ where: { prdId: id } });
    if (!producto) throw new NotFoundException(`Producto con ID ${id} no encontrado.`);
    
    producto.status = !producto.status;
    
    const saved = await this.productoRepo.save(producto);
    return this.toResponseDto(saved);
  }

  // DELETE
  async remove(id: number): Promise<{ deleted: true }> {
    const res = await this.productoRepo.softDelete(id);
    if (res.affected === 0) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado.`);
    }
    return { deleted: true };
  }
}