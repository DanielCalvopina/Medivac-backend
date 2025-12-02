import { EstacionesFolio } from "./EstacionesFolio";
import { EtnsCli } from "./EtnsCli";
export declare class Estaciones {
    etnsId: number;
    etnsNumPl: string;
    ernsNombre: string;
    etnsNombreCorto: string;
    etnsDireccion: string;
    etnsUbicacion: string;
    etnsTipo: string;
    etnsCiudad: string | null;
    status: boolean | null;
    createdAt: string | null;
    updatedAt: string | null;
    deletedAt: string | null;
    estacionesFolios: EstacionesFolio[];
    etnsClis: EtnsCli[];
}
