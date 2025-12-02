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
    tnqPolizaSeguro: string | null;
    tnqExpPoliza: Date | null;
    status: number;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
    docTanques: DocTanque[];
    mancTanqs: MancTanq[];
}
