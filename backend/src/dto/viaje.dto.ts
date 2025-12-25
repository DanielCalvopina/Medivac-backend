import { IsArray, IsInt, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

// --- IMPORTACIONES REALES (No re-escribir clases aquí) ---
import { MancuernaResponseDto } from './mancuerna.dto';
import { ClienteResponseDto } from './cliente.dto';
import { RutasResponseDto } from './rutas.dto';
import { TerminalResponseDto } from './terminal.dto';
// Importamos los DTOs completos de los hijos
import { FolioResponseDto } from './folio.dto'; 
import { BitacoraResponseDto } from './bitacora.dto';

// --- INPUTS ---

export class CreateViajeDto {
  @IsInt() mncId: number;
  @IsInt() cliId: number;
  @IsString() viajeCod: string;
  
  @IsOptional() @IsArray() rutasIds?: number[];
  @IsOptional() @IsArray() terminalesIds?: number[];
}

export class UpdateViajeDto {
  @IsOptional() @IsInt() mncId?: number;
  @IsOptional() @IsInt() cliId?: number;
  @IsOptional() @IsString() viajeCod?: string;
  @IsOptional() @IsInt() status?: number;
  @IsOptional() @IsArray() rutasIds?: number[];
  @IsOptional() @IsArray() terminalesIds?: number[];
}

// --- OUTPUTS ---

export class ViajeResponseDto {
  viajeId: number;
  viajeCod: string;
  status: number;
  viajeInicio: Date | null;
  viajeFin: Date | null;
  viajeDuracion: number | null;
  createdAt: Date;
  updatedAt: Date | null;

  // RELACIONES DIRECTAS
  cliente: ClienteResponseDto | null;
  mancuerna: MancuernaResponseDto | null;

  // RELACIONES DE LISTAS
  rutas: RutasResponseDto[];
  terminales: TerminalResponseDto[];
  
  // Aquí usamos los DTOs importados que YA TIENEN la estructura completa (cargas, sellos, etc.)
  folios: FolioResponseDto[];
  bitacoras: BitacoraResponseDto[];
}

// --- BUNDLE RESPONSE ---

export class ViajeItemsDto {
  items: {
    viajes: ViajeResponseDto[];
  };
}

export class ViajeItemDto {
  items: {
    viaje: ViajeResponseDto;
  };
}