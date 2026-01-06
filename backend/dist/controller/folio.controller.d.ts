import { FolioService } from '../service/folio.service';
import { CreateFolioDto, UpdateFolioDto, FolioItemDto, FolioItemsDto } from '../dto/folio.dto';
export declare class FolioController {
    private readonly svc;
    constructor(svc: FolioService);
    findAll(): Promise<FolioItemsDto>;
    findOne(id: number): Promise<FolioItemDto>;
    getByViaje(viajeId: number): Promise<FolioItemsDto>;
    create(body: CreateFolioDto): Promise<FolioItemDto>;
    update(id: number, body: UpdateFolioDto): Promise<FolioItemDto>;
    remove(id: number): Promise<{
        deleted: true;
    }>;
}
