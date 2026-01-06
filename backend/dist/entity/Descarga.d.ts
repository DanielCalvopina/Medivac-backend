import { Folio } from "./Folio";
import { DocDescarga } from "./DocDescarga";
export declare class Descarga {
    descargaId: number;
    folId: number;
    descargaFechEntrega: Date | null;
    descargaBole: string | null;
    descargaDensidad: string | null;
    descargaTemperatura: string | null;
    fol: Folio;
    docDescargas: DocDescarga[];
}
