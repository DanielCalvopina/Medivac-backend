import { Folio } from "./Folio";
import { DocDescarga } from "./DocDescarga";
export declare class Descarga {
    descargaId: number;
    folId: number;
    descargaFechEntrega: Date | null;
    descargaBole: string | null;
    descargaDensidad: string | null;
    descargaTemperatura: string | null;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    fol: Folio;
    docDescargas: DocDescarga[];
}
