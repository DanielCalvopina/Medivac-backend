export declare class CreateTractoDto {
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
    status?: number;
    trPolizaSeguro: string;
    trExpPolizaSeguro: string;
}
export declare class UpdateTractoDto {
    trEco?: string;
    trEcoVal?: string;
    trMnSr?: string;
    trMrc?: string;
    trMd?: string;
    trColor?: string;
    trNmMotor?: string;
    trNmTrjCrc?: string;
    trNmDblArt?: string;
    trClcDblArt?: string;
    trOfCer?: string;
    trPermisoSct?: string;
    trPeso?: string;
    trDesc?: string;
    status?: number;
    trPolizaSeguro?: string;
    trExpPolizaSeguro?: string;
    trPlc?: never;
}
export declare class TractoResponseDto {
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
    status: number;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    trPolizaSeguro: string;
    trExpPolizaSeguro: string;
}
