import { ClienteService } from '../service/cliente.service';
import { CreateClienteDto, UpdateClienteDto, ClienteResponseDto } from '../dto/cliente.dto';
export declare class ClientesController {
    private readonly service;
    constructor(service: ClienteService);
    findAll(): Promise<ClienteResponseDto[]>;
    findOne(cliId: number): Promise<ClienteResponseDto>;
    create(body: CreateClienteDto): Promise<ClienteResponseDto>;
    update(cliId: number, body: UpdateClienteDto): Promise<ClienteResponseDto>;
    toggleStatus(cliId: number): Promise<ClienteResponseDto>;
    remove(cliId: number): Promise<void>;
}
