import { TractoResponseDto } from './tracto.dto';
import { TanqueResponseDto } from './tanque.dto';
import { DollyResponseDto } from './dolly.dto';

export class UnidadesItemsDto {
  items: {
    tractos: TractoResponseDto[];
    tanques: TanqueResponseDto[];
    dollies: DollyResponseDto[];
  };
}