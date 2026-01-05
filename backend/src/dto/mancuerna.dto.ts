import { IsArray, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
import { TractoResponseDto } from './tracto.dto';
import { TanqueResponseDto } from './tanque.dto';
import { DollyResponseDto } from './dolly.dto';
import { OperadorResponseDto } from './operador.dto';

export class CreateMancuernaDto {
  @IsString() trPlc: string;
  @IsString() dollyId: string;
  @IsString() opCed: string; // Operador es obligatorio al armar

  @IsOptional() @IsString() @MaxLength(60) mncNom?: string;
  @IsOptional() @IsString() @MaxLength(60) npmcDesc?: string;
  
  // Array de IDs de tanques  
  @IsOptional() @IsArray() tanquesIds?: number[];
}

export class UpdateMancuernaDto {
  // Para actualizar datos simples o cambiar chofer sin desarmar (si fuera necesario)
  @IsOptional() @IsString() opCed?: string;
  @IsOptional() @IsString() @MaxLength(60) mncNom?: string;
  @IsOptional() @IsString() @MaxLength(60) npmcDesc?: string;
}

// DTO para el historial dentro de la respuesta
export class MancOpResponseDto {
  mancOpId: number;
  fechaAsignacion: Date;
  fechaTermino: Date | null; // Será el deletedAt
  operador: OperadorResponseDto;
}

export class MancuernaResponseDto {
  mncId: number;
  mncNom: string | null;
  npmcDesc: string | null;
  status: number; // 1: Disp, 2: Viaje, 3: Desarmado
  createdAt: Date;
  updatedAt: Date | null;

  tracto: TractoResponseDto | null;
  dolly: DollyResponseDto | null;
  
  // Operador ACTUAL (el activo)
  operadorActual: OperadorResponseDto | null;

  // Lista de tanques
  tanques: TanqueResponseDto[];

  // Historial completo de operadores
  historialOperadores: MancOpResponseDto[];
}

export class MancuernaItemDto {
  items: {
    mancuerna: MancuernaResponseDto;
  };
}

export class MancuernaItemsDto {
  items: {
    mancuernas: MancuernaResponseDto[];
  };
}