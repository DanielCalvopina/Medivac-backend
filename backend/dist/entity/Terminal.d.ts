import { TerminalViaje } from "./TerminalViaje";
import { TmnCli } from "./TmnCli";
export declare class Terminal {
    trmId: number;
    trmNombre: string;
    trmNombreCorto: string;
    trmDireccion: string;
    trmUbicacion: string;
    trmTipo: string;
    trmCiudad: string;
    status: boolean | null;
    createdAt: string | null;
    updatedAt: string | null;
    deletedAt: string | null;
    terminalViajes: TerminalViaje[];
    tmnClis: TmnCli[];
}
