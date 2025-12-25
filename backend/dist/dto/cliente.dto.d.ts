export declare class CreateClienteDto {
    cliNombre: string;
    cliDesc: string;
    cliCorreo: string;
    cliNum: string;
    cliRuc: string;
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
    status: boolean;
    createdAt: Date | string;
    updatedAt: Date | string | null;
    deletedAt: Date | string | null;
}
export {};
