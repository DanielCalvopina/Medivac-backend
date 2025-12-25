import { Permisos } from "./Permisos";
export declare class Acciones {
    accionId: number;
    accionEnd: string;
    accionTipo: number;
    accionDesc: string | null;
    accionStatus: boolean | null;
    permisos: Permisos[];
}
