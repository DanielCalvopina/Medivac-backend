import { EtnsCli } from "./EtnsCli";
import { TmnCli } from "./TmnCli";
import { Viaje } from "./Viaje";
export declare class Cliente {
    cliId: number;
    cliNombre: string;
    cliDesc: string;
    cliCorreo: string;
    cliNum: string;
    cliRuc: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    etnsClis: EtnsCli[];
    tmnClis: TmnCli[];
    viajes: Viaje[];
}
