import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Operador } from '../entity/Operador';
import { CreateOperadorDto, UpdateOperadorDto, OperadorResponseDto } from '../dto/operador.dto';

@Injectable()
export class OperadorService {
  constructor(
    @InjectRepository(Operador)
    private readonly repo: Repository<Operador>,
  ) {}

  // === MAPPER ===
  private toResponseDto(entity: Operador): OperadorResponseDto {
    return { ...entity } as OperadorResponseDto;
  }

  // === FIND ALL ===
  async findAll(): Promise<OperadorResponseDto[]> {
    const list = await this.repo.find({ order: { createdAt: 'DESC' } });
    return list.map((item) => this.toResponseDto(item));
  }

  // === FIND ONE ===
  async findOne(opCed: string): Promise<OperadorResponseDto> {
    const item = await this.repo.findOne({ where: { opCed } });
    if (!item) throw new NotFoundException(`Operador ${opCed} no encontrado`);
    return this.toResponseDto(item);
  }

  // === CREATE ===
  async create(dto: CreateOperadorDto): Promise<OperadorResponseDto> {
    const exists = await this.repo.findOne({ 
      where: { opCed: dto.opCed }, 
      withDeleted: true 
    });
    
    if (exists) {
        throw new ConflictException('El operador con esa cédula ya existe.');
    }

    const entity = this.repo.create({
      ...dto,
      status: dto.status ?? true,
    });

    const saved = await this.repo.save(entity);
    return this.toResponseDto(saved);
  }

  // === UPDATE ===
  async update(opCed: string, dto: UpdateOperadorDto): Promise<OperadorResponseDto> {
    const entity = await this.repo.preload({
      opCed,
      ...dto,
    });

    if (!entity) throw new NotFoundException('Operador no encontrado');
    
    const saved = await this.repo.save(entity);
    return this.toResponseDto(saved);
  }

  // === TOGGLE STATUS ===
  async toggleStatus(opCed: string): Promise<OperadorResponseDto> {
    const operator = await this.repo.findOne({ where: { opCed } });
    if (!operator) throw new NotFoundException('Operador no encontrado');

    operator.status = !operator.status;
    
    const saved = await this.repo.save(operator);
    return this.toResponseDto(saved);
  }

  // === REMOVE ===
  async remove(opCed: string): Promise<{ deleted: true }> {
    const result = await this.repo.softDelete(opCed);
    
    if (result.affected === 0) {
      throw new NotFoundException('Operador no encontrado');
    }

    return { deleted: true };
  }
}