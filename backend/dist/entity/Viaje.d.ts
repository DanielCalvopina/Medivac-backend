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
    viajeInicio: Date | null;
    viajeFin: Date | null;
    viajeDuracion: number | null;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    bitacoras: Bitacora[];
    docViajes: DocViaje[];
    folios: Folio[];
    rtFlS: RtFlId[];
    terminalViajes: TerminalViaje[];
    cli: Cliente;
    mnc: Mancuerna;
}
