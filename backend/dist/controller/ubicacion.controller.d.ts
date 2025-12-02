import { UbicacionService } from '../service/ubicacion.service';
export declare class UbicacionController {
    private readonly svc;
    constructor(svc: UbicacionService);
    listEstaciones(): Promise<import("../entity/Estaciones").Estaciones[]>;
    getEstacion(etnsId: number): Promise<import("../entity/Estaciones").Estaciones>;
    createEstacion(body: any): Promise<import("../entity/Estaciones").Estaciones>;
    updateEstacion(etnsId: number, body: any): Promise<import("../entity/Estaciones").Estaciones>;
    deleteEstacion(etnsId: number): Promise<{
        deleted: boolean;
    }>;
    listTerminales(): Promise<import("../entity/Terminal").Terminal[]>;
    getTerminal(trmId: number): Promise<import("../entity/Terminal").Terminal>;
    createTerminal(body: any): Promise<import("../entity/Terminal").Terminal>;
    updateTerminal(trmId: number, body: any): Promise<import("../entity/Terminal").Terminal>;
    deleteTerminal(trmId: number): Promise<{
        deleted: boolean;
    }>;
    vincularEstacionCliente(body: {
        etnsId: number;
        cliId: number;
    }): Promise<import("../entity/EtnsCli").EtnsCli[]>;
    vincularTerminalCliente(body: {
        trmId: number;
        cliId: number;
    }): Promise<import("../entity/TmnCli").TmnCli[]>;
    estacionesPorCliente(cliId: number): Promise<import("../entity/Estaciones").Estaciones[]>;
    terminalesPorCliente(cliId: number): Promise<import("../entity/Terminal").Terminal[]>;
    clientesPorEstacion(etnsId: number): Promise<import("../entity/Cliente").Cliente[]>;
    clientesPorTerminal(trmId: number): Promise<import("../entity/Cliente").Cliente[]>;
}
