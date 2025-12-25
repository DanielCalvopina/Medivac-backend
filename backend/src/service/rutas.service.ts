import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rutas } from '../entity/Rutas';
import { CreateRutasDto, UpdateRutasDto, RutasResponseDto } from '../dto/rutas.dto';

@Injectable()
export class RutasService {
  constructor(
    @InjectRepository(Rutas)
    private readonly rutasRepo: Repository<Rutas>,
  ) {}

  // === MAPPER DINÁMICO ===
  // Transforma la entidad a DTO automáticamente.
  // Si agregas columnas nuevas en la BD y el DTO, no necesitas tocar esto.
  private toResponseDto(entity: Rutas): RutasResponseDto {
    return { ...entity } as RutasResponseDto;
  }

  // GET ALL
  async findAll(): Promise<RutasResponseDto[]> {
    // Ordenamos por fecha de creación (DESC)
    const items = await this.rutasRepo.find({ order: { createdAt: 'DESC' } });
    return items.map(item => this.toResponseDto(item));
  }

  // GET ONE
  async findOne(etnsId2: number): Promise<RutasResponseDto> {
    const ruta = await this.rutasRepo.findOne({ where: { etnsId2 } });
    if (!ruta) throw new NotFoundException(`Ruta con ID ${etnsId2} no encontrada`);
    return this.toResponseDto(ruta);
  }

  // CREATE
  async create(dto: CreateRutasDto): Promise<RutasResponseDto> {
    // Sanitización básica: Quitamos espacios en blanco al inicio/final
    const rtsNombre = dto.rtsNombre?.trim();
    const rtsDesc = dto.rtsDesc?.trim();

    if (!rtsNombre || !rtsDesc) {
      throw new BadRequestException('El nombre y la descripción no pueden estar vacíos.');
    }

    const nuevaRuta = this.rutasRepo.create({
      ...dto,
      rtsNombre,
      rtsDesc,
      status: dto.status ?? true // Default activo
    });

    const saved = await this.rutasRepo.save(nuevaRuta);
    return this.toResponseDto(saved);
  }

  // UPDATE
  async update(etnsId2: number, dto: UpdateRutasDto): Promise<RutasResponseDto> {
    // Preload busca por ID y reemplaza los campos que vienen en el DTO
    const ruta = await this.rutasRepo.preload({
      etnsId2,
      ...dto,
      // Si quieres sanitizar también en update:
      ...(dto.rtsNombre && { rtsNombre: dto.rtsNombre.trim() }),
      ...(dto.rtsDesc && { rtsDesc: dto.rtsDesc.trim() }),
    });

    if (!ruta) throw new NotFoundException(`Ruta con ID ${etnsId2} no encontrada`);
    
    const saved = await this.rutasRepo.save(ruta);
    return this.toResponseDto(saved);
  }

  // TOGGLE STATUS
  async toggleStatus(etnsId2: number): Promise<RutasResponseDto> {
    const ruta = await this.rutasRepo.findOne({ where: { etnsId2 } });
    if (!ruta) throw new NotFoundException(`Ruta con ID ${etnsId2} no encontrada`);

    // Invertir booleano
    ruta.status = !ruta.status;
    
    const saved = await this.rutasRepo.save(ruta);
    return this.toResponseDto(saved);
  }

  // DELETE
  async remove(etnsId2: number): Promise<{ deleted: true }> {
    const res = await this.rutasRepo.softDelete(etnsId2);
    
    if (res.affected === 0) {
      throw new NotFoundException(`Ruta con ID ${etnsId2} no encontrada`);
    }

    return { deleted: true };
  }
}