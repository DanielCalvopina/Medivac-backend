import { Folio } from "./Folio";
export declare class DocFolio {
    docFolioId: number;
    folId: number;
    docFolioName: string;
    docFolioUrl: string;
    tipoId: number;
    status: boolean;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
    fol: Folio;
}
