import { MancTanq } from "./MancTanq";
import { Dolly } from "./Dolly";
import { Operador } from "./Operador";
import { Tracto } from "./Tracto";
import { Viaje } from "./Viaje";
export declare class Mancuerna {
    mncId: number;
    trPlc: string;
    dollyId: string;
    opCed: string | null;
    mncNom: string;
    npmcDesc: string;
    status: number;
    createdAt: string | null;
    updatedAt: string | null;
    deletedAt: string | null;
    mancTanqs: MancTanq[];
    dolly: Dolly;
    opCed2: Operador;
    trPlc2: Tracto;
    viajes: Viaje[];
}
