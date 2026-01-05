export declare class CreateOperadorDto {
    opCed: string;
    opNombre: string;
    opApellido: string;
    opTelefono: string;
    opCorreo: string;
    opNumLicencia: string;
    opFcVencLicencia: string;
    opFcVencDc3: string;
    opFcVenCertMed: string;
    status?: boolean;
    opTimeToExp?: string;
}
declare const UpdateOperadorDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateOperadorDto>>;
export declare class UpdateOperadorDto extends UpdateOperadorDto_base {
}
export declare class OperadorResponseDto {
    opCed: string;
    opNombre: string;
    opApellido: string;
    opTelefono: string;
    opCorreo: string;
    opNumLicencia: string;
    opFcVencLicencia: Date | string;
    opFcVencDc3: Date | string;
    opFcVenCertMed: Date | string;
    opTimeToExp: Date | string | null;
    status: boolean;
    createdAt: Date | string;
    updatedAt: Date | string | null;
    deletedAt: Date | string | null;
}
export {};
