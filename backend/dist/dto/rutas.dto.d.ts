export declare class CreateRutasDto {
    rtsNombre: string;
    rtsDesc: string;
    status?: boolean;
    rtsMaps?: string;
    rtsOrigen?: string;
    rtsDestino?: string;
    rtsPlusCode?: string;
    rtsLugarManiobra?: string;
}
declare const UpdateRutasDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateRutasDto>>;
export declare class UpdateRutasDto extends UpdateRutasDto_base {
}
export declare class RutasResponseDto {
    etnsId2: number;
    rtsNombre: string;
    rtsDesc: string;
    rtsMaps: string | null;
    rtsOrigen: string | null;
    rtsDestino: string | null;
    rtsPlusCode: string | null;
    rtsLugarManiobra: string | null;
    status: boolean;
    createdAt: Date | string;
    updatedAt: Date | string | null;
    deletedAt: Date | string | null;
}
export {};
