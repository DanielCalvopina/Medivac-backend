import { DescargaService } from '../service/descarga.service';
import { CreateDescargaDto, UpdateDescargaDto, DescargaItemDto, DescargaItemsDto } from '../dto/descarga.dto';
export declare class DescargaController {
    private readonly svc;
    constructor(svc: DescargaService);
    findAll(): Promise<DescargaItemsDto>;
    findOne(id: number): Promise<DescargaItemDto>;
    getByFolio(folId: number): Promise<DescargaItemsDto>;
    create(body: CreateDescargaDto): Promise<DescargaItemDto>;
    update(id: number, body: UpdateDescargaDto): Promise<DescargaItemDto>;
    remove(id: number): Promise<{
        deleted: true;
    }>;
}
