import { ProductoResponseDto } from './producto.dto';
import { EstacionesResponseDto } from './estaciones.dto';
import { CargaResponseDto } from './carga.dto';
import { DescargaResponseDto } from './descarga.dto';
export declare class CreateFolioDto {
    viajeId: number;
    prdId: number;
    folCod: string;
    folName: string;
    folDesc: string;
    tnqNumse: string;
    status?: boolean;
    estacionesIds?: number[];
}
export declare class UpdateFolioDto {
    prdId?: number;
    folCod?: string;
    folName?: string;
    folDesc?: string;
    tnqNumse?: string;
    status?: boolean;
    estacionesIds?: number[];
}
export declare class FolioResponseDto {
    folId: number;
    folCod: string;
    folName: string;
    folDesc: string;
    tnqNumse: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    producto: ProductoResponseDto | null;
    estaciones: EstacionesResponseDto[];
    cargas: CargaResponseDto[];
    descargas: DescargaResponseDto[];
}
export declare class FolioItemsDto {
    items: {
        folios: FolioResponseDto[];
    };
}
export declare class FolioItemDto {
    items: {
        folio: FolioResponseDto;
    };
}
