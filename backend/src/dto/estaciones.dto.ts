import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateEstacionesDto {
  @IsString() @MaxLength(255) etnsNumPl: string;
  @IsString() @MaxLength(255) ernsNombre: string;
  @IsString() @MaxLength(255) etnsNombreCorto: string;
  @IsString() @MaxLength(1050) etnsDireccion: string;
  @IsString() @MaxLength(255) etnsUbicacion: string;

  @IsOptional() @IsString() @MaxLength(255)
  etnsCiudad?: string | null;

  @IsOptional() @IsBoolean()
  status?: boolean;
}

export class UpdateEstacionesDto {
  @IsOptional() @IsString() @MaxLength(255) etnsNumPl?: string;
  @IsOptional() @IsString() @MaxLength(255) ernsNombre?: string;
  @IsOptional() @IsString() @MaxLength(255) etnsNombreCorto?: string;
  @IsOptional() @IsString() @MaxLength(1050) etnsDireccion?: string;
  @IsOptional() @IsString() @MaxLength(255) etnsUbicacion?: string;
  @IsOptional() @IsString() @MaxLength(255) etnsCiudad?: string | null;
  @IsOptional() @IsBoolean() status?: boolean;
  
  @IsOptional()
  etnsId?: never;
}

export class EstacionesResponseDto {
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