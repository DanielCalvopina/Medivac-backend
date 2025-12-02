import { Operador } from "./Operador";
export declare class DocOp {
    docOpId: number;
    opCed: string;
    docOpName: string;
    docOpUrl: string;
    tipoId: number;
    status: boolean;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
    opCed2: Operador;
}
