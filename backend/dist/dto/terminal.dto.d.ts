export declare class CreateTerminalDto {
    trmNombre: string;
    trmNombreCorto: string;
    trmDireccion: string;
    trmUbicacion: string;
    trmTipo: string;
    trmCiudad: string;
    status?: boolean;
}
export declare class UpdateTerminalDto {
    trmNombre?: string;
    trmNombreCorto?: string;
    trmDireccion?: string;
    trmUbicacion?: string;
    trmTipo?: string;
    trmCiudad?: string;
    status?: boolean;
    trmId?: never;
}
export declare class TerminalResponseDto {
    trmId: number;
    trmNombre: string;
    trmNombreCorto: string;
    trmDireccion: string;
    trmUbicacion: string;
    trmTipo: string;
    trmCiudad: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
}
