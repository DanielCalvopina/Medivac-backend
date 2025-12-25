import { UnidadesService } from '../service/unidades.service';
import { CreateTractoDto, UpdateTractoDto, TractoResponseDto } from '../dto/tracto.dto';
import { CreateTanqueDto, UpdateTanqueDto, TanqueResponseDto } from '../dto/tanque.dto';
import { CreateDollyDto, UpdateDollyDto, DollyResponseDto } from '../dto/dolly.dto';
import { UnidadesItemsDto } from '../dto/unidades.dto';
import { ChangeStatusDto } from '../dto/change-status.dto';
export declare class UnidadesController {
    private readonly service;
    constructor(service: UnidadesService);
    getUnidades(): Promise<UnidadesItemsDto>;
    listTractos(): Promise<TractoResponseDto[]>;
    getTracto(trPlc: string): Promise<TractoResponseDto>;
    createTracto(body: CreateTractoDto): Promise<TractoResponseDto>;
    updateTracto(trPlc: string, body: UpdateTractoDto): Promise<TractoResponseDto>;
    changeTractoStatus(trPlc: string, body: ChangeStatusDto): Promise<TractoResponseDto>;
    deleteTracto(trPlc: string): Promise<{
        deleted: true;
    }>;
    listTanques(): Promise<TanqueResponseDto[]>;
    getTanque(tnqId: number): Promise<TanqueResponseDto>;
    createTanque(body: CreateTanqueDto): Promise<TanqueResponseDto>;
    updateTanque(tnqId: number, body: UpdateTanqueDto): Promise<TanqueResponseDto>;
    changeTanqueStatus(tnqId: number, body: ChangeStatusDto): Promise<TanqueResponseDto>;
    deleteTanque(tnqId: number): Promise<{
        deleted: true;
    }>;
    listDollies(): Promise<DollyResponseDto[]>;
    getDolly(id: string): Promise<DollyResponseDto>;
    createDolly(body: CreateDollyDto): Promise<DollyResponseDto>;
    updateDolly(id: string, body: UpdateDollyDto): Promise<DollyResponseDto>;
    changeDollyStatus(id: string, body: ChangeStatusDto): Promise<DollyResponseDto>;
    deleteDolly(id: string): Promise<{
        deleted: true;
    }>;
}
