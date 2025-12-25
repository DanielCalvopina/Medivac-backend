import { Repository } from 'typeorm';
import { Descarga } from '../entity/Descarga';
import { Folio } from '../entity/Folio';
import { CreateDescargaDto, UpdateDescargaDto, DescargaItemDto, DescargaItemsDto } from '../dto/descarga.dto';
export declare class DescargaService {
    private readonly descargaRepo;
    private readonly folioRepo;
    constructor(descargaRepo: Repository<Descarga>, folioRepo: Repository<Folio>);
    private toResponseDto;
    findAll(): Promise<DescargaItemsDto>;
    findOne(id: number): Promise<DescargaItemDto>;
    findByFolio(folId: number): Promise<DescargaItemsDto>;
    create(dto: CreateDescargaDto): Promise<DescargaItemDto>;
    update(id: number, dto: UpdateDescargaDto): Promise<DescargaItemDto>;
    remove(id: number): Promise<{
        deleted: true;
    }>;
}
