import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from '../entity/Cliente';
import { CreateClienteDto, UpdateClienteDto, ClienteResponseDto } from '../dto/cliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly repo: Repository<Cliente>,
  ) {}

  // === MAPPER (Transforma Entity -> DTO Dinámicamente) ===
  // Al usar spread operator (...), si agregas campos en la BD y DTO,
  // se pasan automáticamente sin tener que editar esto.
  private toResponseDto(entity: Cliente): ClienteResponseDto {
    return { ...entity } as ClienteResponseDto;
  }

  // GET ALL
  async findAll(): Promise<ClienteResponseDto[]> {
    // Ordenamos por fecha de creación (los más nuevos primero)
    const list = await this.repo.find({ order: { createdAt: 'DESC' } });
    return list.map((item) => this.toResponseDto(item));
  }

  // GET ONE
  async findOne(cliId: number): Promise<ClienteResponseDto> {
    const cliente = await this.repo.findOne({ where: { cliId } });
    if (!cliente) throw new NotFoundException(`Cliente con ID ${cliId} no encontrado`);
    return this.toResponseDto(cliente);
  }

  // CREATE
  async create(dto: CreateClienteDto): Promise<ClienteResponseDto> {
    // 1. Verificación de duplicados (RUC o Correo)
    const existe = await this.repo.findOne({ 
        where: [
            { cliRuc: dto.cliRuc }, 
            { cliCorreo: dto.cliCorreo }
        ],
        withDeleted: true 
    });
    
    if (existe) {
        throw new ConflictException('Ya existe un cliente con ese RUC o Correo.');
    }

    // 2. Creación con Spread y Default Status
    const entity = this.repo.create({
        ...dto,
        status: dto.status ?? true // Asume activo si no se envía
    });

    const saved = await this.repo.save(entity);
    return this.toResponseDto(saved);
  }

  // UPDATE
  async update(cliId: number, dto: UpdateClienteDto): Promise<ClienteResponseDto> {
    const cliente = await this.repo.preload({
      cliId,
      ...dto,
    });

    if (!cliente) throw new NotFoundException(`Cliente con ID ${cliId} no encontrado`);
    
    const saved = await this.repo.save(cliente);
    return this.toResponseDto(saved);
  }

  // TOGGLE STATUS
  async toggleStatus(cliId: number): Promise<ClienteResponseDto> {
    const cliente = await this.repo.findOne({ where: { cliId } });
    if (!cliente) throw new NotFoundException(`Cliente con ID ${cliId} no encontrado`);

    // Inversión simple de booleano
    cliente.status = !cliente.status;
    
    const saved = await this.repo.save(cliente);
    return this.toResponseDto(saved);
  }

  // DELETE
  async remove(cliId: number): Promise<{ deleted: true }> {
    const res = await this.repo.softDelete(cliId);
    
    if (res.affected === 0) {
      throw new NotFoundException(`Cliente con ID ${cliId} no encontrado`);
    }

    return { deleted: true };
  }
}