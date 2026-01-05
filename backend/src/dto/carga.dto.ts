import { IsArray, IsDateString, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

// --- INPUTS ---

export class CreateCargaDto {
  @IsInt()
  @Type(() => Number)
  folId: number;

  @IsOptional() @IsDateString()
  cargaFechEntrega?: string | null;

  @IsOptional() @IsString() @MaxLength(50)
  cargaCargaReal?: string | null;

  @IsOptional() @IsString() @MaxLength(255)
  cargaBole?: string | null;

  @IsOptional() @IsString() @MaxLength(255)
  cargaDensidad?: string | null;

  @IsOptional() @IsString() @MaxLength(255)
  cargaTemperatura?: string | null;

  // Recibimos una lista simple de strings: ["A100", "B200"]
  @IsOptional() @IsArray()
  @IsString({ each: true })
  sellosLista?: string[];
}

export class UpdateCargaDto {
  @IsOptional() @IsDateString()
  cargaFechEntrega?: string | null;

  @IsOptional() @IsString() @MaxLength(50)
  cargaCargaReal?: string | null;

  @IsOptional() @IsString() @MaxLength(255)
  cargaBole?: string | null;

  @IsOptional() @IsString() @MaxLength(255)
  cargaDensidad?: string | null;

  @IsOptional() @IsString() @MaxLength(255)
  cargaTemperatura?: string | null;

  @IsOptional() @IsArray()
  @IsString({ each: true })
  sellosLista?: string[];
}

// --- OUTPUTS ---

export class SelloResponseDto {
  sellosId: number;
  sellosNum: string;
}

export class CargaResponseDto {
  cargaId: number;
  cargaFechEntrega: Date | null;
  cargaCargaReal: string | null;
  cargaBole: string | null;
  cargaDensidad: string | null;
  cargaTemperatura: string | null;
  sellos: SelloResponseDto[]; 
}

// Wrappers
export class CargaItemsDto {
  items: {
    cargas: CargaResponseDto[];
  };
}

export class CargaItemDto {
  items: {
    carga: CargaResponseDto;
  };
}