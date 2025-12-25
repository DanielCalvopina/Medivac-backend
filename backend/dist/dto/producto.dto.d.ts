export declare class CreateProductoDto {
    prdNombre: string;
    prdDesc: string;
    prdMax: number;
    prdMin: number;
    status?: boolean;
}
declare const UpdateProductoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductoDto>>;
export declare class UpdateProductoDto extends UpdateProductoDto_base {
}
export declare class ProductoResponseDto {
    prdId: number;
    prdNombre: string;
    prdDesc: string;
    prdMax: number;
    prdMin: number;
    status: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
}
export {};
