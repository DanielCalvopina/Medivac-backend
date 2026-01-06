import { Repository } from 'typeorm';
import { Carga } from '../entity/Carga';
import { Sellos } from '../entity/Sellos';
import { Folio } from '../entity/Folio';
import { CreateCargaDto, UpdateCargaDto, CargaItemDto, CargaItemsDto } from '../dto/carga.dto';
export declare class CargaService {
    private readonly cargaRepo;
    private readonly sellosRepo;
    private readonly folioRepo;
    constructor(cargaRepo: Repository<Carga>, sellosRepo: Repository<Sellos>, folioRepo: Repository<Folio>);
    private toResponseDto;
    findAll(): Promise<CargaItemsDto>;
    findOne(id: number): Promise<CargaItemDto>;
    findByFolio(folId: number): Promise<CargaItemsDto>;
    create(dto: CreateCargaDto): Promise<CargaItemDto>;
    update(id: number, dto: UpdateCargaDto): Promise<CargaItemDto>;
    remove(id: number): Promise<{
        deleted: true;
    }>;
}
