import { Viaje } from "./Viaje";
export declare class DocViaje {
    docViajeId: number;
    viajeId: number;
    docViajeName: string;
    docUrl: string;
    tipoId: number;
    status: boolean;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
    viaje: Viaje;
}
