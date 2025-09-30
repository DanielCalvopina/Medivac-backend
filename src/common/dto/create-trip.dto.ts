import { IsEnum, IsOptional, IsString } from "class-validator";
import { TravelType } from "@prisma/client"; // importa el enum generado por Prisma

export class CreateTripDto {
  @IsString()
  folio!: string;

  @IsEnum(TravelType)
  tipo!: TravelType; // <-- REQUERIDO por el schema

  @IsOptional()
  @IsString()
  clienteId?: string;

  @IsOptional()
  @IsString()
  productoId?: string;
}
