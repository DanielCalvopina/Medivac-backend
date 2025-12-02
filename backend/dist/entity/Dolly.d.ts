import { DocDolly } from "./DocDolly";
import { Mancuerna } from "./Mancuerna";
export declare class Dolly {
    dollyId: string;
    dollyNumSer_4Ul: string;
    dollyNumSer: string;
    dollyMr: string;
    dollyMod: string;
    dollyColor: string;
    dollyDesc: string;
    dollyPolizaSeguro: string | null;
    dollyExpPoliza: Date | null;
    status: number;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
    docDollies: DocDolly[];
    mancuernas: Mancuerna[];
}
