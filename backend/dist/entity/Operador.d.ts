import { DocOp } from "./DocOp";
import { Grupo } from "./Grupo";
import { Mancuerna } from "./Mancuerna";
export declare class Operador {
    opCed: string;
    opNombre: string;
    opApellido: string;
    opTelefono: string;
    opCorreo: string;
    opNumLicencia: string;
    opFcVencLicencia: string;
    opFcVencDc3: string;
    opFcVenCertMed: string;
    status: boolean;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
    opPassword: string | null;
    opVerificate: string;
    opCodeAth: string | null;
    opTimeToExp: string | null;
    docOps: DocOp[];
    grupos: Grupo[];
    mancuernas: Mancuerna[];
}
