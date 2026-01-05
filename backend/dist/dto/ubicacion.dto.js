"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VinculoTerminalClienteDto = exports.VinculoEstacionClienteDto = exports.TerminalesConClientesResponseDto = exports.EstacionesConClientesResponseDto = exports.TerminalConClientesDto = exports.EstacionConClientesDto = exports.UbicacionesItemsDto = void 0;
const estaciones_dto_1 = require("./estaciones.dto");
const terminal_dto_1 = require("./terminal.dto");
class UbicacionesItemsDto {
    items;
}
exports.UbicacionesItemsDto = UbicacionesItemsDto;
class EstacionConClientesDto extends estaciones_dto_1.EstacionesResponseDto {
    clientes;
}
exports.EstacionConClientesDto = EstacionConClientesDto;
class TerminalConClientesDto extends terminal_dto_1.TerminalResponseDto {
    clientes;
}
exports.TerminalConClientesDto = TerminalConClientesDto;
class EstacionesConClientesResponseDto {
    estaciones;
}
exports.EstacionesConClientesResponseDto = EstacionesConClientesResponseDto;
class TerminalesConClientesResponseDto {
    terminales;
}
exports.TerminalesConClientesResponseDto = TerminalesConClientesResponseDto;
class VinculoEstacionClienteDto {
    etnsId;
    cliId;
}
exports.VinculoEstacionClienteDto = VinculoEstacionClienteDto;
class VinculoTerminalClienteDto {
    trmId;
    cliId;
}
exports.VinculoTerminalClienteDto = VinculoTerminalClienteDto;
//# sourceMappingURL=ubicacion.dto.js.map