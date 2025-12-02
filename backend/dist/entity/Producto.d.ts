import { Folio } from "./Folio";
export declare class Producto {
    prdId: number;
    prdNombre: string;
    prdDesc: string;
    prdMax: number;
    prdMin: number;
    status: boolean;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
    folios: Folio[];
}
