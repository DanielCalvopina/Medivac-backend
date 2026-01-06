import { Repository } from 'typeorm';
import { Viaje } from '../entity/Viaje';
import { Cliente } from '../entity/Cliente';
import { Mancuerna } from '../entity/Mancuerna';
import { Rutas } from '../entity/Rutas';
import { Terminal } from '../entity/Terminal';
import { RtFlId } from '../entity/RtFlId';
import { TerminalViaje } from '../entity/TerminalViaje';
import { CreateViajeDto, UpdateViajeDto, ViajeItemDto, ViajeItemsDto } from '../dto/viaje.dto';
export declare class ViajesService {
    private readonly viajeRepo;
    private readonly clienteRepo;
    private readonly mancuernaRepo;
    private readonly rutasRepo;
    private readonly terminalRepo;
    private readonly rtFlRepo;
    private readonly tvRepo;
    constructor(viajeRepo: Repository<Viaje>, clienteRepo: Repository<Cliente>, mancuernaRepo: Repository<Mancuerna>, rutasRepo: Repository<Rutas>, terminalRepo: Repository<Terminal>, rtFlRepo: Repository<RtFlId>, tvRepo: Repository<TerminalViaje>);
    private toResponseDto;
    private getRelations;
    findOne(id: number): Promise<ViajeItemDto>;
    findAll(): Promise<ViajeItemsDto>;
    create(dto: CreateViajeDto): Promise<ViajeItemDto>;
    iniciarViaje(id: number): Promise<ViajeItemDto>;
    finalizarViaje(id: number): Promise<ViajeItemDto>;
    update(id: number, dto: UpdateViajeDto): Promise<ViajeItemDto>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
