import { EstacionesResponseDto } from './estaciones.dto';
import { TerminalResponseDto } from './terminal.dto';
import { ClienteResponseDto } from './cliente.dto';
export declare class UbicacionesItemsDto {
    items: {
        estaciones: EstacionesResponseDto[];
        terminales: TerminalResponseDto[];
    };
}
export declare class EstacionConClientesDto extends EstacionesResponseDto {
    clientes: ClienteResponseDto[];
}
export declare class TerminalConClientesDto extends TerminalResponseDto {
    clientes: ClienteResponseDto[];
}
export declare class EstacionesConClientesResponseDto {
    estaciones: EstacionConClientesDto[];
}
export declare class TerminalesConClientesResponseDto {
    terminales: TerminalConClientesDto[];
}
export declare class VinculoEstacionClienteDto {
    etnsId: number;
    cliId: number;
}
export declare class VinculoTerminalClienteDto {
    trmId: number;
    cliId: number;
}
