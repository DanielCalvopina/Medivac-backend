import { Viaje } from "./Viaje";
export declare class Bitacora {
    bitId: number;
    bitFecIni: Date;
    bitFecFin: Date | null;
    bitTmpTotal: number | null;
    bitDesc: string;
    status: number;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    viajeId: number;
    viaje: Viaje;
}
