import { EstacionesFolio } from "./EstacionesFolio";
import { EtnsCli } from "./EtnsCli";
export declare class Estaciones {
    etnsId: number;
    etnsNumPl: string;
    ernsNombre: string;
    etnsNombreCorto: string;
    etnsDireccion: string;
    etnsUbicacion: string;
    etnsCiudad: string | null;
    status: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    estacionesFolios: EstacionesFolio[];
    etnsClis: EtnsCli[];
}
