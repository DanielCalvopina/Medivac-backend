import { IsDateString, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';
import { FolioResponseDto } from './folio.dto';

// --- INPUTS ---

export class CreateDescargaDto {
  @IsInt()
  @Type(() => Number)
  folId: number;

  @IsOptional() @IsDateString()
  descargaFechEntrega?: string | null;

  @IsOptional() @IsString() @MaxLength(255)
  descargaBole?: string | null;

  @IsOptional() @IsString() @MaxLength(255)
  descargaDensidad?: string | null;

  @IsOptional() @IsString() @MaxLength(255)
  descargaTemperatura?: string | null;
}

export class UpdateDescargaDto {
  @IsOptional() @IsDateString()
  descargaFechEntrega?: string | null;

  @IsOptional() @IsString() @MaxLength(255)
  descargaBole?: string | null;

  @IsOptional() @IsString() @MaxLength(255)
  descargaDensidad?: string | null;

  @IsOptional() @IsString() @MaxLength(255)
  descargaTemperatura?: string | null;
}

// --- OUTPUTS ---

export class DescargaResponseDto {
  descargaId: number;
  descargaFechEntrega: Date | null;
  descargaBole: string | null;
  descargaDensidad: string | null;
  descargaTemperatura: string | null;
  createdAt: Date;
  updatedAt: Date | null;
  
  // Relación con Folio
  folio?: FolioResponseDto | null;
}

// Wrappers
export class DescargaItemsDto {
  items: {
    descargas: DescargaResponseDto[];
  };
}

export class DescargaItemDto {
  items: {
    descarga: DescargaResponseDto;
  };
}