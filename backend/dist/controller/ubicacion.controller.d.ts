import { UbicacionService } from '../service/ubicacion.service';
import { CreateEstacionesDto, UpdateEstacionesDto } from '../dto/estaciones.dto';
import { CreateTerminalDto, UpdateTerminalDto } from '../dto/terminal.dto';
import { UbicacionesItemsDto, VinculoEstacionClienteDto, VinculoTerminalClienteDto } from '../dto/ubicacion.dto';
export declare class UbicacionController {
    private readonly svc;
    constructor(svc: UbicacionService);
    getUbicaciones(): Promise<UbicacionesItemsDto>;
    estacionesConClientes(): Promise<import("../dto/ubicacion.dto").EstacionesConClientesResponseDto>;
    terminalesConClientes(): Promise<import("../dto/ubicacion.dto").TerminalesConClientesResponseDto>;
    listEstaciones(): Promise<import("../dto/estaciones.dto").EstacionesResponseDto[]>;
    getEstacion(etnsId: number): Promise<import("../dto/estaciones.dto").EstacionesResponseDto>;
    createEstacion(body: CreateEstacionesDto): Promise<import("../dto/estaciones.dto").EstacionesResponseDto>;
    updateEstacion(etnsId: number, body: UpdateEstacionesDto): Promise<import("../dto/estaciones.dto").EstacionesResponseDto>;
    toggleEstacionStatus(etnsId: number): Promise<import("../dto/estaciones.dto").EstacionesResponseDto>;
    deleteEstacion(etnsId: number): Promise<{
        deleted: true;
    }>;
    listTerminales(): Promise<import("../dto/terminal.dto").TerminalResponseDto[]>;
    getTerminal(trmId: number): Promise<import("../dto/terminal.dto").TerminalResponseDto>;
    createTerminal(body: CreateTerminalDto): Promise<import("../dto/terminal.dto").TerminalResponseDto>;
    updateTerminal(trmId: number, body: UpdateTerminalDto): Promise<import("../dto/terminal.dto").TerminalResponseDto>;
    toggleTerminalStatus(trmId: number): Promise<import("../dto/terminal.dto").TerminalResponseDto>;
    deleteTerminal(trmId: number): Promise<{
        deleted: true;
    }>;
    vincularEstacionCliente(body: VinculoEstacionClienteDto): Promise<import("../entity/EtnsCli").EtnsCli[]>;
    vincularTerminalCliente(body: VinculoTerminalClienteDto): Promise<import("../entity/TmnCli").TmnCli[]>;
    estacionesPorCliente(cliId: number): Promise<import("../dto/estaciones.dto").EstacionesResponseDto[]>;
    terminalesPorCliente(cliId: number): Promise<import("../dto/terminal.dto").TerminalResponseDto[]>;
}
