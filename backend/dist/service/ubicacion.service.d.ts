import { Repository } from 'typeorm';
import { Estaciones } from '../entity/Estaciones';
import { Terminal } from '../entity/Terminal';
import { Cliente } from '../entity/Cliente';
import { EtnsCli } from '../entity/EtnsCli';
import { TmnCli } from '../entity/TmnCli';
import { CreateEstacionesDto, UpdateEstacionesDto, EstacionesResponseDto } from '../dto/estaciones.dto';
import { CreateTerminalDto, UpdateTerminalDto, TerminalResponseDto } from '../dto/terminal.dto';
import { UbicacionesItemsDto, EstacionesConClientesResponseDto, TerminalesConClientesResponseDto, VinculoEstacionClienteDto, VinculoTerminalClienteDto } from '../dto/ubicacion.dto';
export declare class UbicacionService {
    private readonly estRepo;
    private readonly trmRepo;
    private readonly cliRepo;
    private readonly etnsCliRepo;
    private readonly tmnCliRepo;
    constructor(estRepo: Repository<Estaciones>, trmRepo: Repository<Terminal>, cliRepo: Repository<Cliente>, etnsCliRepo: Repository<EtnsCli>, tmnCliRepo: Repository<TmnCli>);
    private toEstacionResponse;
    private toTerminalResponse;
    private toClienteResponse;
    getUbicaciones(): Promise<UbicacionesItemsDto>;
    listEstaciones(): Promise<EstacionesResponseDto[]>;
    getEstacion(etnsId: number): Promise<EstacionesResponseDto>;
    createEstacion(dto: CreateEstacionesDto): Promise<EstacionesResponseDto>;
    updateEstacion(etnsId: number, dto: UpdateEstacionesDto): Promise<EstacionesResponseDto>;
    toggleEstacionStatus(etnsId: number): Promise<EstacionesResponseDto>;
    deleteEstacion(etnsId: number): Promise<{
        deleted: true;
    }>;
    listTerminales(): Promise<TerminalResponseDto[]>;
    getTerminal(trmId: number): Promise<TerminalResponseDto>;
    createTerminal(dto: CreateTerminalDto): Promise<TerminalResponseDto>;
    updateTerminal(trmId: number, dto: UpdateTerminalDto): Promise<TerminalResponseDto>;
    toggleTerminalStatus(trmId: number): Promise<TerminalResponseDto>;
    deleteTerminal(trmId: number): Promise<{
        deleted: true;
    }>;
    vincularEstacionCliente(dto: VinculoEstacionClienteDto): Promise<EtnsCli[]>;
    vincularTerminalCliente(dto: VinculoTerminalClienteDto): Promise<TmnCli[]>;
    estacionesConClientes(): Promise<EstacionesConClientesResponseDto>;
    terminalesConClientes(): Promise<TerminalesConClientesResponseDto>;
    estacionesPorCliente(cliId: number): Promise<EstacionesResponseDto[]>;
    terminalesPorCliente(cliId: number): Promise<TerminalResponseDto[]>;
}
