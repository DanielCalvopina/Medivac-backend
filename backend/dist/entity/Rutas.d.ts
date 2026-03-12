import { RtFlId } from "./RtFlId";
export declare class Rutas {
    etnsId2: number;
    rtsNombre: string;
    rtsDesc: string;
    status: boolean;
    rtsMaps: string | null;
    rtsOrigen: string | null;
    rtsDestino: string | null;
    rtsPlusCode: string | null;
    rtsLugarManiobra: string | null;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    rtFlS: RtFlId[];
}
