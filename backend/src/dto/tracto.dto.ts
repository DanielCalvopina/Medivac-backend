import { Type } from 'class-transformer';
import { IsDateString, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateTractoDto {
  @IsString() @MaxLength(60) trPlc: string;

  @IsString() @MaxLength(60) trEco: string;
  @IsString() @MaxLength(60) trEcoVal: string;
  @IsString() @MaxLength(60) trMnSr: string;
  @IsString() @MaxLength(60) trMrc: string;
  @IsString() @MaxLength(60) trMd: string;
  @IsString() @MaxLength(60) trColor: string;
  @IsString() @MaxLength(60) trNmMotor: string;
  @IsString() @MaxLength(60) trNmTrjCrc: string;
  @IsString() @MaxLength(60) trNmDblArt: string;
  @IsString() @MaxLength(60) trClcDblArt: string;
  @IsString() @MaxLength(60) trOfCer: string;
  @IsString() @MaxLength(60) trPermisoSct: string;
  @IsString() @MaxLength(60) trPeso: string;
  @IsString() @MaxLength(60) trDesc: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  status?: number; // 1 activo, 0 inactivo

  @IsString() @MaxLength(60) trPolizaSeguro: string;

  @IsDateString()
  trExpPolizaSeguro: string;
}

export class UpdateTractoDto {
  @IsOptional() @IsString() @MaxLength(60) trEco?: string;
  @IsOptional() @IsString() @MaxLength(60) trEcoVal?: string;
  @IsOptional() @IsString() @MaxLength(60) trMnSr?: string;
  @IsOptional() @IsString() @MaxLength(60) trMrc?: string;
  @IsOptional() @IsString() @MaxLength(60) trMd?: string;
  @IsOptional() @IsString() @MaxLength(60) trColor?: string;
  @IsOptional() @IsString() @MaxLength(60) trNmMotor?: string;
  @IsOptional() @IsString() @MaxLength(60) trNmTrjCrc?: string;
  @IsOptional() @IsString() @MaxLength(60) trNmDblArt?: string;
  @IsOptional() @IsString() @MaxLength(60) trClcDblArt?: string;
  @IsOptional() @IsString() @MaxLength(60) trOfCer?: string;
  @IsOptional() @IsString() @MaxLength(60) trPermisoSct?: string;
  @IsOptional() @IsString() @MaxLength(60) trPeso?: string;
  @IsOptional() @IsString() @MaxLength(60) trDesc?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  status?: number;

  @IsOptional() @IsString() @MaxLength(60) trPolizaSeguro?: string;
  @IsOptional() @IsDateString() trExpPolizaSeguro?: string;

  @IsOptional()
  trPlc?: never; // No permitir cambiar PK
}

export class TractoResponseDto {
  trPlc: string;
  trEco: string;
  trEcoVal: string;
  trMnSr: string;
  trMrc: string;
  trMd: string;
  trColor: string;
  trNmMotor: string;
  trNmTrjCrc: string;
  trNmDblArt: string;
  trClcDblArt: string;
  trOfCer: string;
  trPermisoSct: string;
  trPeso: string;
  trDesc: string;
  status: number;
  
  // Actualizado a Date para coincidir con la entidad
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
  
  trPolizaSeguro: string;
  trExpPolizaSeguro: string;
}