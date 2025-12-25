import { EstacionesResponseDto } from './estaciones.dto';
import { TerminalResponseDto } from './terminal.dto';
import { ClienteResponseDto } from './cliente.dto';

// DTO Principal para cargar todo el mapa de ubicaciones
export class UbicacionesItemsDto {
  items: {
    estaciones: EstacionesResponseDto[];
    terminales: TerminalResponseDto[];
  };
}

// DTOs Auxiliares para respuestas compuestas (con clientes)
export class EstacionConClientesDto extends EstacionesResponseDto {
  clientes: ClienteResponseDto[];
}

export class TerminalConClientesDto extends TerminalResponseDto {
  clientes: ClienteResponseDto[];
}

export class EstacionesConClientesResponseDto {
  estaciones: EstacionConClientesDto[];
}

export class TerminalesConClientesResponseDto {
  terminales: TerminalConClientesDto[];
}

// DTOs para vinculación
export class VinculoEstacionClienteDto {
  etnsId: number;
  cliId: number;
}

export class VinculoTerminalClienteDto {
  trmId: number;
  cliId: number;
}