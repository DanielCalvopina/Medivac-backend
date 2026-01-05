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
    dollyPolizaSeguro: string;
    dollyExpPoliza: string;
    status: number;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    docDollies: DocDolly[];
    mancuernas: Mancuerna[];
}
