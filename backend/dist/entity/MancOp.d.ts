import { Mancuerna } from "./Mancuerna";
import { Operador } from "./Operador";
export declare class MancOp {
    mancOpId: number;
    mncId: number;
    opCed: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    mnc: Mancuerna;
    operador: Operador;
}
