import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class MancTanqResponseDto {
  @Type(() => Number)
  @IsInt()
  mncTanqId: number;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  mncId: number | null;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  tnqId: number | null;
}
