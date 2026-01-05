import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateTerminalDto {
  @IsString() @MaxLength(255) trmNombre: string;
  @IsString() @MaxLength(255) trmNombreCorto: string;
  @IsString() @MaxLength(1050) trmDireccion: string;
  @IsString() @MaxLength(1050) trmUbicacion: string;
  @IsString() @MaxLength(255) trmTipo: string;
  @IsString() @MaxLength(255) trmCiudad: string;

  @IsOptional() @IsBoolean()
  status?: boolean;
}

export class UpdateTerminalDto {
  @IsOptional() @IsString() @MaxLength(255) trmNombre?: string;
  @IsOptional() @IsString() @MaxLength(255) trmNombreCorto?: string;
  @IsOptional() @IsString() @MaxLength(255) trmDireccion?: string;
  @IsOptional() @IsString() @MaxLength(1050) trmUbicacion?: string;
  @IsOptional() @IsString() @MaxLength(1050) trmTipo?: string;
  @IsOptional() @IsString() @MaxLength(255) trmCiudad?: string;
  @IsOptional() @IsBoolean() status?: boolean;
  
  @IsOptional()
  trmId?: never;
}

export class TerminalResponseDto {
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