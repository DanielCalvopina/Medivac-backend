export declare class CreateClienteDto {
    cliNombre: string;
    cliDesc: string;
    cliCorreo: string;
    cliNum: string;
    cliRuc: string;
    cliContacto?: string;
    status?: boolean;
}
declare const UpdateClienteDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateClienteDto>>;
export declare class UpdateClienteDto extends UpdateClienteDto_base {
}
export declare class ClienteResponseDto {
    cliId: number;
    cliNombre: string;
    cliDesc: string;
    cliCorreo: string;
    cliNum: string;
    cliRuc: string;
    cliContacto: string | null;
    status: boolean;
    createdAt: Date | string;
    updatedAt: Date | string | null;
    deletedAt: Date | string | null;
}
export {};
