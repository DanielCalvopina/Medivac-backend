import { Folio } from "./Folio";
import { Sellos } from "./Sellos";
import { DocCarga } from "./DocCarga";
export declare class Carga {
    cargaId: number;
    folId: number | null;
    cargaFechEntrega: Date | null;
    cargaCargaReal: string | null;
    cargaBole: string | null;
    cargaDensidad: string | null;
    cargaTemperatura: string | null;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    fol: Folio;
    sellos: Sellos[];
    docCargas: DocCarga[];
}
