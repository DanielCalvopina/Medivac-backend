import { MancuernaResponseDto } from './mancuerna.dto';
import { ClienteResponseDto } from './cliente.dto';
import { RutasResponseDto } from './rutas.dto';
import { TerminalResponseDto } from './terminal.dto';
import { FolioResponseDto } from './folio.dto';
import { BitacoraResponseDto } from './bitacora.dto';
export declare class CreateViajeDto {
    mncId: number;
    cliId: number;
    viajeCod: string;
    rutasIds?: number[];
    terminalesIds?: number[];
}
export declare class UpdateViajeDto {
    mncId?: number;
    cliId?: number;
    viajeCod?: string;
    status?: number;
    rutasIds?: number[];
    terminalesIds?: number[];
}
export declare class ViajeResponseDto {
    viajeId: number;
    viajeCod: string;
    status: number;
    viajeInicio: Date | null;
    viajeFin: Date | null;
    viajeDuracion: number | null;
    createdAt: Date;
    updatedAt: Date | null;
    cliente: ClienteResponseDto | null;
    mancuerna: MancuernaResponseDto | null;
    rutas: RutasResponseDto[];
    terminales: TerminalResponseDto[];
    folios: FolioResponseDto[];
    bitacoras: BitacoraResponseDto[];
}
export declare class ViajeItemsDto {
    items: {
        viajes: ViajeResponseDto[];
    };
}
export declare class ViajeItemDto {
    items: {
        viaje: ViajeResponseDto;
    };
}
