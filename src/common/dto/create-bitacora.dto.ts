import { IsOptional, IsString } from "class-validator";

export class CreateBitacoraDto {
  @IsString()
  tripId!: string;

  @IsOptional()
  @IsString()
  evento?: string;

  @IsOptional()
  @IsString()
  detalle?: string;

  @IsOptional()
  @IsString()
  categoria?: string;

  @IsOptional()
  @IsString()
  createdBy?: string;
}
