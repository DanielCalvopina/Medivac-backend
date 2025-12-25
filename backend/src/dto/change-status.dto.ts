import { IsInt, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class ChangeStatusDto {
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  status: number;
}