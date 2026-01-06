import { Carga } from "./Carga";
import { Descarga } from "./Descarga";
import { DocFolio } from "./DocFolio";
import { EstacionesFolio } from "./EstacionesFolio";
import { Producto } from "./Producto";
import { Viaje } from "./Viaje";
export declare class Folio {
    folId: number;
    prdId: number;
    viajeId: number;
    folCod: string;
    folName: string;
    folDesc: string;
    status: boolean;
    tnqNumse: string;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    cargas: Carga[];
    descargas: Descarga[];
    docFolios: DocFolio[];
    estacionesFolios: EstacionesFolio[];
    prd: Producto;
    viaje: Viaje;
}
