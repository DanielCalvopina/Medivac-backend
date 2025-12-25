import { 
  IsArray, 
  IsBoolean, 
  IsInt, 
  IsOptional, 
  IsString, 
  MaxLength 
} from 'class-validator';
import { Type } from 'class-transformer';

// DTOs auxiliares
import { ProductoResponseDto } from './producto.dto';
import { EstacionesResponseDto } from './estaciones.dto'; 

// DTOs de hijos
import { CargaResponseDto } from './carga.dto';
import { DescargaResponseDto } from './descarga.dto';

// --- INPUTS ---

export class CreateFolioDto {
  @IsInt() @Type(() => Number) viajeId: number;
  @IsInt() @Type(() => Number) prdId: number;
  @IsString() @MaxLength(255) folCod: string;
  @IsString() @MaxLength(255) folName: string;
  @IsString() @MaxLength(255) folDesc: string;
  @IsString() @MaxLength(255) tnqNumse: string;
  @IsOptional() @IsBoolean() status?: boolean;
  @IsOptional() @IsArray() estacionesIds?: number[];
}

export class UpdateFolioDto {
  @IsOptional() @IsInt() prdId?: number;
  @IsOptional() @IsString() @MaxLength(255) folCod?: string;
  @IsOptional() @IsString() @MaxLength(255) folName?: string;
  @IsOptional() @IsString() @MaxLength(255) folDesc?: string;
  @IsOptional() @IsString() @MaxLength(255) tnqNumse?: string;
  @IsOptional() @IsBoolean() status?: boolean;
  @IsOptional() @IsArray() estacionesIds?: number[];
}

// --- OUTPUTS ---

export class FolioResponseDto {
  folId: number;
  folCod: string;
  folName: string;
  folDesc: string;
  tnqNumse: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;

  // Solo sus relaciones hacia abajo
  producto: ProductoResponseDto | null;
  estaciones: EstacionesResponseDto[];
  cargas: CargaResponseDto[];
  descargas: DescargaResponseDto[];
  
  // ELIMINADO: viaje (para evitar ciclo)
}

export class FolioItemsDto {
  items: {
    folios: FolioResponseDto[];
  };
}

export class FolioItemDto {
  items: {
    folio: FolioResponseDto;
  };
}