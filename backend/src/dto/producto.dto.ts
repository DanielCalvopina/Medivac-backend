import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateProductoDto {
  @IsString() @MaxLength(60)
  prdNombre: string;

  @IsString() @MaxLength(255)
  prdDesc: string;

  @IsNumber()
  prdMax: number;

  @IsNumber()
  prdMin: number;

  @IsOptional() @IsBoolean()
  status?: boolean;
}

export class UpdateProductoDto extends PartialType(CreateProductoDto) {}

export class ProductoResponseDto {
  prdId: number;
  prdNombre: string;
  prdDesc: string;
  prdMax: number;
  prdMin: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}