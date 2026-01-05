import { Type } from 'class-transformer';
import { IsDateString, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateTanqueDto {
  @IsString() @MaxLength(60) tnqPlacas: string;
  @IsString() @MaxLength(60) tnqEco: string;
  @IsString() @MaxLength(60) tnqEcoVal: string;
  @IsString() @MaxLength(60) tnqNumSer: string;
  @IsString() @MaxLength(60) tnqMrc: string;
  @IsString() @MaxLength(60) tnqMod: string;
  @IsString() @MaxLength(60) tnqColor: string;
  @IsString() @MaxLength(60) tnqNmCrc: string;
  @IsString() @MaxLength(60) tnqNmDblArt: string;
  @IsString() @MaxLength(60) tnqClcDblArt: string;
  @IsString() @MaxLength(60) tnqNoOfiCre: string;
  @IsString() @MaxLength(60) tnqPermisoSct: string;
  @IsString() @MaxLength(60) tnqCapacidad: string;
  @IsString() @MaxLength(255) tnqDesc: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  status?: number;

  @IsString() @MaxLength(60) tnqPolizaSeguro: string;

  @IsDateString()
  tnqExpPoliza: string;
}

export class UpdateTanqueDto {
  @IsOptional() @IsString() @MaxLength(60) tnqPlacas?: string;
  @IsOptional() @IsString() @MaxLength(60) tnqEco?: string;
  @IsOptional() @IsString() @MaxLength(60) tnqEcoVal?: string;
  @IsOptional() @IsString() @MaxLength(60) tnqNumSer?: string;
  @IsOptional() @IsString() @MaxLength(60) tnqMrc?: string;
  @IsOptional() @IsString() @MaxLength(60) tnqMod?: string;
  @IsOptional() @IsString() @MaxLength(60) tnqColor?: string;
  @IsOptional() @IsString() @MaxLength(60) tnqNmCrc?: string;
  @IsOptional() @IsString() @MaxLength(60) tnqNmDblArt?: string;
  @IsOptional() @IsString() @MaxLength(60) tnqClcDblArt?: string;
  @IsOptional() @IsString() @MaxLength(60) tnqNoOfiCre?: string;
  @IsOptional() @IsString() @MaxLength(60) tnqPermisoSct?: string;
  @IsOptional() @IsString() @MaxLength(60) tnqCapacidad?: string;
  @IsOptional() @IsString() @MaxLength(255) tnqDesc?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  status?: number;

  @IsOptional() @IsString() @MaxLength(60) tnqPolizaSeguro?: string;
  @IsOptional() @IsDateString() tnqExpPoliza?: string;
}

export class TanqueResponseDto {
  tnqId: number;
  tnqPlacas: string;
  tnqEco: string;
  tnqEcoVal: string;
  tnqNumSer: string;
  tnqMrc: string;
  tnqMod: string;
  tnqColor: string;
  tnqNmCrc: string;
  tnqNmDblArt: string;
  tnqClcDblArt: string;
  tnqNoOfiCre: string;
  tnqPermisoSct: string;
  tnqCapacidad: string;
  tnqDesc: string;
  status: number;
  
  // Actualizado a Date
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
  
  tnqPolizaSeguro: string;
  tnqExpPoliza: string;
}