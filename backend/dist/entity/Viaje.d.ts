import { Bitacora } from "./Bitacora";
import { DocViaje } from "./DocViaje";
import { Folio } from "./Folio";
import { RtFlId } from "./RtFlId";
import { TerminalViaje } from "./TerminalViaje";
import { Cliente } from "./Cliente";
import { Mancuerna } from "./Mancuerna";
export declare class Viaje {
    viajeId: number;
    mncId: number;
    cliId: number;
    viajeCod: string;
    status: number;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
    viajeInicio: string | null;
    viajeFin: string | null;
    viajeDuracion: number | null;
    viajeEta: string | null;
    viajeKm: number | null;
    bitacoras: Bitacora[];
    docViajes: DocViaje[];
    folios: Folio[];
    rtFlS: RtFlId[];
    terminalViajes: TerminalViaje[];
    cli: Cliente;
    mnc: Mancuerna;
}
