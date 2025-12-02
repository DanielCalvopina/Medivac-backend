import { Carga } from "./Carga";
export declare class DocCarga {
    docCarId: number;
    cargaId: number;
    docCarName: string;
    docCarUrl: string;
    tipoId: number;
    status: boolean;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
    carga: Carga;
}
