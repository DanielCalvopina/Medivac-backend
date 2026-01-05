import { Repository } from 'typeorm';
import { Cliente } from '../entity/Cliente';
import { CreateClienteDto, UpdateClienteDto, ClienteResponseDto } from '../dto/cliente.dto';
export declare class ClienteService {
    private readonly repo;
    constructor(repo: Repository<Cliente>);
    private toResponseDto;
    findAll(): Promise<ClienteResponseDto[]>;
    findOne(cliId: number): Promise<ClienteResponseDto>;
    create(dto: CreateClienteDto): Promise<ClienteResponseDto>;
    update(cliId: number, dto: UpdateClienteDto): Promise<ClienteResponseDto>;
    toggleStatus(cliId: number): Promise<ClienteResponseDto>;
    remove(cliId: number): Promise<{
        deleted: true;
    }>;
}
