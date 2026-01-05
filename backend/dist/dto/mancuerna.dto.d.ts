import { TractoResponseDto } from './tracto.dto';
import { TanqueResponseDto } from './tanque.dto';
import { DollyResponseDto } from './dolly.dto';
import { OperadorResponseDto } from './operador.dto';
export declare class CreateMancuernaDto {
    trPlc: string;
    dollyId: string;
    opCed: string;
    mncNom?: string;
    npmcDesc?: string;
    tanquesIds?: number[];
}
export declare class UpdateMancuernaDto {
    opCed?: string;
    mncNom?: string;
    npmcDesc?: string;
}
export declare class MancOpResponseDto {
    mancOpId: number;
    fechaAsignacion: Date;
    fechaTermino: Date | null;
    operador: OperadorResponseDto;
}
export declare class MancuernaResponseDto {
    mncId: number;
    mncNom: string | null;
    npmcDesc: string | null;
    status: number;
    createdAt: Date;
    updatedAt: Date | null;
    tracto: TractoResponseDto | null;
    dolly: DollyResponseDto | null;
    operadorActual: OperadorResponseDto | null;
    tanques: TanqueResponseDto[];
    historialOperadores: MancOpResponseDto[];
}
export declare class MancuernaItemDto {
    items: {
        mancuerna: MancuernaResponseDto;
    };
}
export declare class MancuernaItemsDto {
    items: {
        mancuernas: MancuernaResponseDto[];
    };
}
