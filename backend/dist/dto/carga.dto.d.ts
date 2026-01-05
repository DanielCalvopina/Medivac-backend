export declare class CreateCargaDto {
    folId: number;
    cargaFechEntrega?: string | null;
    cargaCargaReal?: string | null;
    cargaBole?: string | null;
    cargaDensidad?: string | null;
    cargaTemperatura?: string | null;
    sellosLista?: string[];
}
export declare class UpdateCargaDto {
    cargaFechEntrega?: string | null;
    cargaCargaReal?: string | null;
    cargaBole?: string | null;
    cargaDensidad?: string | null;
    cargaTemperatura?: string | null;
    sellosLista?: string[];
}
export declare class SelloResponseDto {
    sellosId: number;
    sellosNum: string;
}
export declare class CargaResponseDto {
    cargaId: number;
    cargaFechEntrega: Date | null;
    cargaCargaReal: string | null;
    cargaBole: string | null;
    cargaDensidad: string | null;
    cargaTemperatura: string | null;
    sellos: SelloResponseDto[];
}
export declare class CargaItemsDto {
    items: {
        cargas: CargaResponseDto[];
    };
}
export declare class CargaItemDto {
    items: {
        carga: CargaResponseDto;
    };
}
