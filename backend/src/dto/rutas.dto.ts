import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

// 1. INPUTS
export class CreateRutasDto {
  @IsString() @MaxLength(255)
  rtsNombre: string;

  @IsString() @MaxLength(255)
  rtsDesc: string;

  @IsOptional() @IsBoolean()
  status?: boolean;

  @IsOptional() @IsString() @MaxLength(1050)
  rtsMaps?: string;

  @IsOptional() @IsString() @MaxLength(255)
  rtsOrigen?: string;

  @IsOptional() @IsString() @MaxLength(255)
  rtsDestino?: string;
}

export class UpdateRutasDto extends PartialType(CreateRutasDto) {}

// 2. OUTPUTS (La pieza que faltaba)
export class RutasResponseDto {
  etnsId2: number; // Mantenemos tu ID específico
  rtsNombre: string;
  rtsDesc: string;
  rtsMaps: string | null;
  rtsOrigen: string | null;
  rtsDestino: string | null;
  status: boolean;
  createdAt: Date | string;
  updatedAt: Date | string | null;
  deletedAt: Date | string | null;
}