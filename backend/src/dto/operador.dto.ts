import { PartialType } from '@nestjs/mapped-types';
import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

// 1. INPUT: Crear
export class CreateOperadorDto {
  @IsString() @MaxLength(30)
  opCed: string;

  @IsString() @MaxLength(60)
  opNombre: string;

  @IsString() @MaxLength(60)
  opApellido: string;

  @IsString() @MaxLength(60)
  opTelefono: string;

  @IsEmail() @MaxLength(60)
  opCorreo: string;

  @IsString() @MaxLength(60)
  opNumLicencia: string;

  @IsDateString()
  opFcVencLicencia: string;

  @IsDateString()
  opFcVencDc3: string;

  @IsDateString()
  opFcVenCertMed: string;

  @IsOptional() @IsBoolean()
  status?: boolean;

  @IsOptional() @IsDateString()
  opTimeToExp?: string;
}

// 2. INPUT: Actualizar
export class UpdateOperadorDto extends PartialType(CreateOperadorDto) {}

// 3. OUTPUT: Response Standard
export class OperadorResponseDto {
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
  // Nota: deletedAt normalmente no se envía al front si ya está borrado, 
  // pero lo dejo si lo requieres para auditoría.
  deletedAt: Date | string | null;
}