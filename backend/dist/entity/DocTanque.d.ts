import { Tanque } from "./Tanque";
export declare class DocTanque {
    docTaqId: number;
    tnqId: number | null;
    docTaqName: string;
    docTaqUrl: string;
    tipoId: number;
    status: boolean;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
    tnq: Tanque;
}
