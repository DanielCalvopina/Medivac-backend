import { FolioResponseDto } from './folio.dto';
export declare class CreateDescargaDto {
    folId: number;
    descargaFechEntrega?: string | null;
    descargaBole?: string | null;
    descargaDensidad?: string | null;
    descargaTemperatura?: string | null;
}
export declare class UpdateDescargaDto {
    descargaFechEntrega?: string | null;
    descargaBole?: string | null;
    descargaDensidad?: string | null;
    descargaTemperatura?: string | null;
}
export declare class DescargaResponseDto {
    descargaId: number;
    descargaFechEntrega: Date | null;
    descargaBole: string | null;
    descargaDensidad: string | null;
    descargaTemperatura: string | null;
    folio?: FolioResponseDto | null;
}
export declare class DescargaItemsDto {
    items: {
        descargas: DescargaResponseDto[];
    };
}
export declare class DescargaItemDto {
    items: {
        descarga: DescargaResponseDto;
    };
}
