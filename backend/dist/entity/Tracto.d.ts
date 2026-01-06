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
    trPolizaSeguro: string;
    trExpPolizaSeguro: string;
    status: number;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    docTractos: DocTracto[];
    mancuernas: Mancuerna[];
}
