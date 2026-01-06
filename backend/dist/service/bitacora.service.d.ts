import { Repository } from 'typeorm';
import { Bitacora } from '../entity/Bitacora';
import { Viaje } from '../entity/Viaje';
import { CreateBitacoraDto, UpdateBitacoraDto, BitacoraItemDto, BitacoraItemsDto } from '../dto/bitacora.dto';
export declare class BitacoraService {
    private readonly bitRepo;
    private readonly viajeRepo;
    constructor(bitRepo: Repository<Bitacora>, viajeRepo: Repository<Viaje>);
    private toResponseDto;
    create(dto: CreateBitacoraDto): Promise<BitacoraItemDto>;
    findAll(): Promise<BitacoraItemsDto>;
    findOne(id: number): Promise<BitacoraItemDto>;
    findByViaje(viajeId: number): Promise<BitacoraItemsDto>;
    update(id: number, dto: UpdateBitacoraDto): Promise<BitacoraItemDto>;
    remove(id: number): Promise<{
        deleted: true;
    }>;
}
