import { Repository } from 'typeorm';
import { Tracto } from '../entity/Tracto';
import { Tanque } from '../entity/Tanque';
import { Dolly } from '../entity/Dolly';
export declare class UnidadesService {
    private readonly tractoRepo;
    private readonly tanqueRepo;
    private readonly dollyRepo;
    constructor(tractoRepo: Repository<Tracto>, tanqueRepo: Repository<Tanque>, dollyRepo: Repository<Dolly>);
    listTractos(): Promise<Tracto[]>;
    getTracto(trPlc: string): Promise<Tracto>;
    createTracto(data: Partial<Tracto>): Promise<Tracto>;
    updateTracto(trPlc: string, data: Partial<Tracto>): Promise<Tracto>;
    deleteTracto(trPlc: string): Promise<{
        deleted: boolean;
    }>;
    listTanques(): Promise<Tanque[]>;
    getTanque(tnqId: number): Promise<Tanque>;
    createTanque(data: Partial<Tanque>): Promise<Tanque>;
    updateTanque(tnqId: number, data: Partial<Tanque>): Promise<Tanque>;
    deleteTanque(tnqId: number): Promise<{
        deleted: boolean;
    }>;
    listDollies(): Promise<Dolly[]>;
    getDolly(dollyId: string): Promise<Dolly>;
    createDolly(data: Partial<Dolly>): Promise<Dolly>;
    updateDolly(dollyId: string, data: Partial<Dolly>): Promise<Dolly>;
    deleteDolly(dollyId: string): Promise<{
        deleted: boolean;
    }>;
}
