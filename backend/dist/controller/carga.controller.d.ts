import { CargaService } from '../service/carga.service';
import { CreateCargaDto, UpdateCargaDto } from '../dto/carga.dto';
export declare class CargaController {
    private readonly svc;
    constructor(svc: CargaService);
    findAll(): Promise<import("../dto/carga.dto").CargaItemsDto>;
    findOne(id: number): Promise<import("../dto/carga.dto").CargaItemDto>;
    getByFolio(folId: number): Promise<import("../dto/carga.dto").CargaItemsDto>;
    create(body: CreateCargaDto): Promise<import("../dto/carga.dto").CargaItemDto>;
    update(id: number, body: UpdateCargaDto): Promise<import("../dto/carga.dto").CargaItemDto>;
    remove(id: number): Promise<{
        deleted: true;
    }>;
}
