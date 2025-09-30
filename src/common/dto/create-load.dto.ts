import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateLoadDto {
  @IsNotEmpty()
  lecturas!: any; // payload libre del formulario de Carga

  @IsOptional()
  @IsString()
  createdBy?: string;
}
