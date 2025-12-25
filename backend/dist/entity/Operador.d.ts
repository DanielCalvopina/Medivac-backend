import { DocOp } from "./DocOp";
import { Grupo } from "./Grupo";
import { MancOp } from "./MancOp";
export declare class Operador {
    opCed: string;
    opNombre: string;
    opApellido: string;
    opTelefono: string;
    opCorreo: string;
    opNumLicencia: string;
    opFcVencLicencia: Date | string;
    opFcVencDc3: Date | string;
    opFcVenCertMed: Date | string;
    status: boolean;
    opTimeToExp: Date | string | null;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    docOps: DocOp[];
    grupos: Grupo[];
    mancOps: MancOp[];
}
