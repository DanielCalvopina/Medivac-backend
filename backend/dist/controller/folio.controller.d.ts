import { FolioService } from 'src/service/folio.service';
export declare class FolioController {
    private readonly folioService;
    constructor(folioService: FolioService);
    create(data: any): Promise<import("../entity/Folio").Folio>;
    getByViaje(viajeId: number): Promise<import("../entity/Folio").Folio[]>;
    findAll(): Promise<import("../entity/Folio").Folio[]>;
    findOne(id: number): Promise<import("../entity/Folio").Folio>;
    update(id: number, data: any): Promise<import("../entity/Folio").Folio>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
