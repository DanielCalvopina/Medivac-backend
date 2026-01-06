import { Folio } from "./Folio";
export declare class Producto {
    prdId: number;
    prdNombre: string;
    prdDesc: string;
    prdMax: number;
    prdMin: number;
    status: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    folios: Folio[];
}
