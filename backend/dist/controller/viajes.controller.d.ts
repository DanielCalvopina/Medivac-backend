import { ViajesService } from '../service/viajes.service';
import { CreateViajeDto, UpdateViajeDto, ViajeItemDto, ViajeItemsDto } from '../dto/viaje.dto';
export declare class ViajesController {
    private readonly svc;
    constructor(svc: ViajesService);
    findAll(): Promise<ViajeItemsDto>;
    findOne(id: number): Promise<ViajeItemDto>;
    create(body: CreateViajeDto): Promise<ViajeItemDto>;
    iniciar(id: number): Promise<ViajeItemDto>;
    finalizar(id: number): Promise<ViajeItemDto>;
    update(id: number, body: UpdateViajeDto): Promise<ViajeItemDto>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
