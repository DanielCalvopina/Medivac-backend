import { Type } from 'class-transformer';
import { IsDateString, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateDollyDto {
  @IsString() @MaxLength(30) dollyId: string;

  @IsString() @MaxLength(30) dollyNumSer_4Ul: string;
  @IsString() @MaxLength(30) dollyNumSer: string;
  @IsString() @MaxLength(30) dollyMr: string;
  @IsString() @MaxLength(30) dollyMod: string;
  @IsString() @MaxLength(30) dollyColor: string;

  @IsString() @MaxLength(255) dollyDesc: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  status?: number;

  @IsString() @MaxLength(60) dollyPolizaSeguro: string;

  @IsDateString()
  dollyExpPoliza: string;
}

export class UpdateDollyDto {
  @IsOptional() @IsString() @MaxLength(30) dollyNumSer_4Ul?: string;
  @IsOptional() @IsString() @MaxLength(30) dollyNumSer?: string;
  @IsOptional() @IsString() @MaxLength(30) dollyMr?: string;
  @IsOptional() @IsString() @MaxLength(30) dollyMod?: string;
  @IsOptional() @IsString() @MaxLength(30) dollyColor?: string;

  @IsOptional() @IsString() @MaxLength(255) dollyDesc?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  status?: number;

  @IsOptional() @IsString() @MaxLength(60) dollyPolizaSeguro?: string;
  @IsOptional() @IsDateString() dollyExpPoliza?: string;

  @IsOptional()
  dollyId?: never; // No permitir cambiar PK
}

export class DollyResponseDto {
  dollyId: string;
  dollyNumSer_4Ul: string;
  dollyNumSer: string;
  dollyMr: string;
  dollyMod: string;
  dollyColor: string;
  dollyDesc: string;
  status: number;
  
  // Actualizado a Date
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
  
  dollyPolizaSeguro: string;
  dollyExpPoliza: string;
}