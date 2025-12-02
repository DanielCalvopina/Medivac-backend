import { UnidadesService } from '../service/unidades.service';
export declare class UnidadesController {
    private readonly service;
    constructor(service: UnidadesService);
    listTractos(): Promise<import("../entity/Tracto").Tracto[]>;
    getTracto(trPlc: string): Promise<import("../entity/Tracto").Tracto>;
    createTracto(body: any): Promise<import("../entity/Tracto").Tracto>;
    updateTracto(trPlc: string, body: any): Promise<import("../entity/Tracto").Tracto>;
    deleteTracto(trPlc: string): Promise<{
        deleted: boolean;
    }>;
    listTanques(): Promise<import("../entity/Tanque").Tanque[]>;
    getTanque(tnqId: number): Promise<import("../entity/Tanque").Tanque>;
    createTanque(body: any): Promise<import("../entity/Tanque").Tanque>;
    updateTanque(tnqId: number, body: any): Promise<import("../entity/Tanque").Tanque>;
    deleteTanque(tnqId: number): Promise<{
        deleted: boolean;
    }>;
    listDollies(): Promise<import("../entity/Dolly").Dolly[]>;
    getDolly(id: string): Promise<import("../entity/Dolly").Dolly>;
    createDolly(body: any): Promise<import("../entity/Dolly").Dolly>;
    updateDolly(id: string, body: any): Promise<import("../entity/Dolly").Dolly>;
    deleteDolly(id: string): Promise<{
        deleted: boolean;
    }>;
}
