import { Repository } from 'typeorm';
import { Tracto } from '../entity/Tracto';
import { Tanque } from '../entity/Tanque';
import { Dolly } from '../entity/Dolly';
import { CreateTractoDto, UpdateTractoDto, TractoResponseDto } from '../dto/tracto.dto';
import { CreateTanqueDto, UpdateTanqueDto, TanqueResponseDto } from '../dto/tanque.dto';
import { CreateDollyDto, UpdateDollyDto, DollyResponseDto } from '../dto/dolly.dto';
import { UnidadesItemsDto } from '../dto/unidades.dto';
export declare class UnidadesService {
    private readonly tractoRepo;
    private readonly tanqueRepo;
    private readonly dollyRepo;
    constructor(tractoRepo: Repository<Tracto>, tanqueRepo: Repository<Tanque>, dollyRepo: Repository<Dolly>);
    private tractoToResponse;
    private tanqueToResponse;
    private dollyToResponse;
    getUnidades(): Promise<UnidadesItemsDto>;
    listTractos(): Promise<TractoResponseDto[]>;
    getTracto(trPlc: string): Promise<TractoResponseDto>;
    createTracto(dto: CreateTractoDto): Promise<TractoResponseDto>;
    updateTracto(trPlc: string, dto: UpdateTractoDto): Promise<TractoResponseDto>;
    changeTractoStatus(trPlc: string, newStatus: number): Promise<TractoResponseDto>;
    deleteTracto(trPlc: string): Promise<{
        deleted: true;
    }>;
    listTanques(): Promise<TanqueResponseDto[]>;
    getTanque(tnqId: number): Promise<TanqueResponseDto>;
    createTanque(dto: CreateTanqueDto): Promise<TanqueResponseDto>;
    updateTanque(tnqId: number, dto: UpdateTanqueDto): Promise<TanqueResponseDto>;
    changeTanqueStatus(tnqId: number, newStatus: number): Promise<TanqueResponseDto>;
    deleteTanque(tnqId: number): Promise<{
        deleted: true;
    }>;
    listDollies(): Promise<DollyResponseDto[]>;
    getDolly(dollyId: string): Promise<DollyResponseDto>;
    createDolly(dto: CreateDollyDto): Promise<DollyResponseDto>;
    updateDolly(dollyId: string, dto: UpdateDollyDto): Promise<DollyResponseDto>;
    changeDollyStatus(dollyId: string, newStatus: number): Promise<DollyResponseDto>;
    deleteDolly(dollyId: string): Promise<{
        deleted: true;
    }>;
}
