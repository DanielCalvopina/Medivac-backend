export declare class CreateDollyDto {
    dollyId: string;
    dollyNumSer_4Ul: string;
    dollyNumSer: string;
    dollyMr: string;
    dollyMod: string;
    dollyColor: string;
    dollyDesc: string;
    status?: number;
    dollyPolizaSeguro: string;
    dollyExpPoliza: string;
}
export declare class UpdateDollyDto {
    dollyNumSer_4Ul?: string;
    dollyNumSer?: string;
    dollyMr?: string;
    dollyMod?: string;
    dollyColor?: string;
    dollyDesc?: string;
    status?: number;
    dollyPolizaSeguro?: string;
    dollyExpPoliza?: string;
    dollyId?: never;
}
export declare class DollyResponseDto {
    dollyId: string;
    dollyNumSer_4Ul: string;
    dollyNumSer: string;
    dollyMr: string;
    dollyMod: string;
    dollyColor: string;
    dollyDesc: string;
    status: number;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    dollyPolizaSeguro: string;
    dollyExpPoliza: string;
}
