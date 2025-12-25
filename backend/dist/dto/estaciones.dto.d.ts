export declare class CreateEstacionesDto {
    etnsNumPl: string;
    ernsNombre: string;
    etnsNombreCorto: string;
    etnsDireccion: string;
    etnsUbicacion: string;
    etnsCiudad?: string | null;
    status?: boolean;
}
export declare class UpdateEstacionesDto {
    etnsNumPl?: string;
    ernsNombre?: string;
    etnsNombreCorto?: string;
    etnsDireccion?: string;
    etnsUbicacion?: string;
    etnsCiudad?: string | null;
    status?: boolean;
    etnsId?: never;
}
export declare class EstacionesResponseDto {
    etnsId: number;
    etnsNumPl: string;
    ernsNombre: string;
    etnsNombreCorto: string;
    etnsDireccion: string;
    etnsUbicacion: string;
    etnsCiudad: string | null;
    status: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
}
