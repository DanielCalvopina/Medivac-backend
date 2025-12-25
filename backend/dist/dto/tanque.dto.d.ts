export declare class CreateTanqueDto {
    tnqPlacas: string;
    tnqEco: string;
    tnqEcoVal: string;
    tnqNumSer: string;
    tnqMrc: string;
    tnqMod: string;
    tnqColor: string;
    tnqNmCrc: string;
    tnqNmDblArt: string;
    tnqClcDblArt: string;
    tnqNoOfiCre: string;
    tnqPermisoSct: string;
    tnqCapacidad: string;
    tnqDesc: string;
    status?: number;
    tnqPolizaSeguro: string;
    tnqExpPoliza: string;
}
export declare class UpdateTanqueDto {
    tnqPlacas?: string;
    tnqEco?: string;
    tnqEcoVal?: string;
    tnqNumSer?: string;
    tnqMrc?: string;
    tnqMod?: string;
    tnqColor?: string;
    tnqNmCrc?: string;
    tnqNmDblArt?: string;
    tnqClcDblArt?: string;
    tnqNoOfiCre?: string;
    tnqPermisoSct?: string;
    tnqCapacidad?: string;
    tnqDesc?: string;
    status?: number;
    tnqPolizaSeguro?: string;
    tnqExpPoliza?: string;
}
export declare class TanqueResponseDto {
    tnqId: number;
    tnqPlacas: string;
    tnqEco: string;
    tnqEcoVal: string;
    tnqNumSer: string;
    tnqMrc: string;
    tnqMod: string;
    tnqColor: string;
    tnqNmCrc: string;
    tnqNmDblArt: string;
    tnqClcDblArt: string;
    tnqNoOfiCre: string;
    tnqPermisoSct: string;
    tnqCapacidad: string;
    tnqDesc: string;
    status: number;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    tnqPolizaSeguro: string;
    tnqExpPoliza: string;
}
