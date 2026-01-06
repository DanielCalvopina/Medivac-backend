import { BitacoraService } from '../service/bitacora.service';
import { CreateBitacoraDto, UpdateBitacoraDto, BitacoraItemDto, BitacoraItemsDto } from '../dto/bitacora.dto';
export declare class BitacoraController {
    private readonly svc;
    constructor(svc: BitacoraService);
    findAll(): Promise<BitacoraItemsDto>;
    findOne(id: number): Promise<BitacoraItemDto>;
    findByViaje(viajeId: number): Promise<BitacoraItemsDto>;
    create(body: CreateBitacoraDto): Promise<BitacoraItemDto>;
    update(id: number, body: UpdateBitacoraDto): Promise<BitacoraItemDto>;
    remove(id: number): Promise<{
        deleted: true;
    }>;
}
