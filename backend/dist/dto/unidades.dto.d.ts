import { TractoResponseDto } from './tracto.dto';
import { TanqueResponseDto } from './tanque.dto';
import { DollyResponseDto } from './dolly.dto';
export declare class UnidadesItemsDto {
    items: {
        tractos: TractoResponseDto[];
        tanques: TanqueResponseDto[];
        dollies: DollyResponseDto[];
    };
}
