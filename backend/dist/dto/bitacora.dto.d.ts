export declare class CreateBitacoraDto {
    viajeId: number;
    bitFecIni: string;
    bitFecFin?: string | null;
    bitTmpTotal?: number | null;
    bitDesc: string;
    status?: number;
}
export declare class UpdateBitacoraDto {
    bitFecIni?: string;
    bitFecFin?: string | null;
    bitTmpTotal?: number | null;
    bitDesc?: string;
    status?: number;
}
export declare class BitacoraResponseDto {
    bitId: number;
    viajeId: number;
    bitFecIni: Date;
    bitFecFin: Date | null;
    bitTmpTotal: number | null;
    bitDesc: string;
    status: number;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
}
export declare class BitacoraItemsDto {
    items: {
        bitacoras: BitacoraResponseDto[];
    };
}
export declare class BitacoraItemDto {
    items: {
        bitacora: BitacoraResponseDto;
    };
}
