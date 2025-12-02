import { DocTracto } from "./DocTracto";
import { Mancuerna } from "./Mancuerna";
export declare class Tracto {
    trPlc: string;
    trEco: string;
    trEcoVal: string;
    trMnSr: string;
    trMrc: string;
    trMd: string;
    trColor: string;
    trNmMotor: string;
    trNmTrjCrc: string;
    trNmDblArt: string;
    trClcDblArt: string;
    trOfCer: string;
    trPermisoSct: string;
    trPeso: string;
    trDesc: string;
    trPolizaSeguro: string | null;
    trExpPoliza: Date | null;
    status: number;
    createdAt: string;
    updatedAt: string | null;
    deletedAt: string | null;
    docTractos: DocTracto[];
    mancuernas: Mancuerna[];
}
