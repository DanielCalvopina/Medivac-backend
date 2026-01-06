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
    status: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    terminalViajes: TerminalViaje[];
    tmnClis: TmnCli[];
}
