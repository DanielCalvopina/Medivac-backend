import { MancOp } from "./MancOp";
import { MancTanq } from "./MancTanq";
import { Dolly } from "./Dolly";
import { Tracto } from "./Tracto";
import { Viaje } from "./Viaje";
export declare class Mancuerna {
    mncId: number;
    trPlc: string | null;
    dollyId: string | null;
    mncNom: string | null;
    npmcDesc: string | null;
    status: number;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    mancOps: MancOp[];
    mancTanqs: MancTanq[];
    dolly: Dolly;
    tracto: Tracto;
    viajes: Viaje[];
}
