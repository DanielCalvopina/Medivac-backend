import { Folio } from "./Folio";
import { DocDescarga } from "./DocDescarga";
export declare class Descarga {
    descargaId: number;
    folId: number | null;
    fol: Folio;
    docDescargas: DocDescarga[];
}
