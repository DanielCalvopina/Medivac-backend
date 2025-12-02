import { Descarga } from "./Descarga";
export declare class DocDescarga {
    descargaId: number;
    docDescId: number;
    docDescNombre: string;
    docDescUrl: string;
    tipoId: number;
    status: boolean;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
    descarga: Descarga;
}
