import { Folio } from "./Folio";
import { DocCarga } from "./DocCarga";
export declare class Carga {
    cargaId: number;
    folId: number | null;
    fol: Folio;
    docCargas: DocCarga[];
}
