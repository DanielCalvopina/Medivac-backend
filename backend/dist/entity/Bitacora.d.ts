import { Viaje } from "./Viaje";
export declare class Bitacora {
    bitId: number;
    bitFecIni: Date;
    bitFecFin: Date;
    bitTmpTotal: number;
    bitDesc: string;
    status: number;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    viaje: Viaje;
}
