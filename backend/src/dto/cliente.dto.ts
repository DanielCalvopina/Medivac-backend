import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsEmail, IsOptional, IsString, MaxLength } from 'class-validator';

// 1. INPUTS
export class CreateClienteDto {
  @IsString() @MaxLength(60)
  cliNombre: string;

  @IsString() @MaxLength(255)
  cliDesc: string;

  @IsEmail() @MaxLength(255)
  cliCorreo: string;

  @IsString() @MaxLength(30)
  cliNum: string;

  @IsString() @MaxLength(30)
  cliRuc: string;

  @IsOptional() @IsBoolean()
  status?: boolean;
}

export class UpdateClienteDto extends PartialType(CreateClienteDto) {}

// 2. OUTPUT (La pieza faltante)
export class ClienteResponseDto {
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