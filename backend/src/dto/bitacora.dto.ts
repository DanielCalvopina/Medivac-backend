import { IsDateString, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

// --- INPUTS ---
export class CreateBitacoraDto {
  @IsInt()
  @Type(() => Number)
  viajeId: number;

  @IsDateString()
  bitFecIni: string;

  @IsOptional() @IsDateString()
  bitFecFin?: string | null;

  @IsOptional() @IsInt()
  bitTmpTotal?: number | null;

  @IsString() @MaxLength(255)
  bitDesc: string;

  @IsOptional() @IsInt()
  status?: number;
}

export class UpdateBitacoraDto {
  @IsOptional() @IsDateString()
  bitFecIni?: string;

  @IsOptional() @IsDateString()
  bitFecFin?: string | null;

  @IsOptional() @IsInt()
  bitTmpTotal?: number | null;

  @IsOptional() @IsString() @MaxLength(255)
  bitDesc?: string;

  @IsOptional() @IsInt()
  status?: number;
}

// --- OUTPUTS ---
export class BitacoraResponseDto {
  bitId: number;
  // Agregamos solo el ID para referencia, sin el objeto completo
  viajeId: number; 
  
  bitFecIni: Date;
  bitFecFin: Date | null;
  bitTmpTotal: number | null;
  bitDesc: string;
  status: number;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
  
  // ELIMINADO: viaje (Objeto)
}

export class BitacoraItemsDto {
  items: {
    bitacoras: BitacoraResponseDto[];
  };
}

export class BitacoraItemDto {
  items: {
    bitacora: BitacoraResponseDto;
  };
}