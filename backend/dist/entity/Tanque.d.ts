import { DocTanque } from "./DocTanque";
import { MancTanq } from "./MancTanq";
export declare class Tanque {
    tnqId: number;
    tnqPlacas: string;
    tnqEco: string;
    tnqEcoVal: string;
    tnqNumSer: string;
    tnqMrc: string;
    tnqMod: string;
    tnqColor: string;
    tnqNmCrc: string;
    tnqNmDblArt: string;
    tnqClcDblArt: string;
    tnqNoOfiCre: string;
    tnqPermisoSct: string;
    tnqCapacidad: string;
    tnqDesc: string;
    tnqPolizaSeguro: string;
    tnqExpPoliza: string;
    status: number;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    docTanques: DocTanque[];
    mancTanqs: MancTanq[];
}
