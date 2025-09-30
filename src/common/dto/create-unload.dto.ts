import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUnloadDto {
  @IsNotEmpty()
  lecturas!: any; // payload libre del formulario de Descarga

  @IsOptional()
  @IsString()
  createdBy?: string;
}
