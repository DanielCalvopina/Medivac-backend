import { Repository } from 'typeorm';
import { Folio } from '../entity/Folio';
import { Producto } from '../entity/Producto';
import { Viaje } from '../entity/Viaje';
import { Tanque } from '../entity/Tanque';
import { Mancuerna } from '../entity/Mancuerna';
import { MancTanq } from '../entity/MancTanq';
import { Estaciones } from '../entity/Estaciones';
import { EstacionesFolio } from '../entity/EstacionesFolio';
import { CreateFolioDto, UpdateFolioDto, FolioItemDto, FolioItemsDto } from '../dto/folio.dto';
export declare class FolioService {
    private readonly folioRepo;
    private readonly productoRepo;
    private readonly viajeRepo;
    private readonly mancuernaRepo;
    private readonly tanqueRepo;
    private readonly mancTanqRepo;
    private readonly estacionesRepo;
    private readonly estacionesFolioRepo;
    constructor(folioRepo: Repository<Folio>, productoRepo: Repository<Producto>, viajeRepo: Repository<Viaje>, mancuernaRepo: Repository<Mancuerna>, tanqueRepo: Repository<Tanque>, mancTanqRepo: Repository<MancTanq>, estacionesRepo: Repository<Estaciones>, estacionesFolioRepo: Repository<EstacionesFolio>);
    private toResponseDto;
    create(dto: CreateFolioDto): Promise<FolioItemDto>;
    findAll(): Promise<FolioItemsDto>;
    findByViaje(viajeId: number): Promise<FolioItemsDto>;
    findOne(id: number): Promise<FolioItemDto>;
    update(id: number, dto: UpdateFolioDto): Promise<FolioItemDto>;
    remove(id: number): Promise<{
        deleted: true;
    }>;
}
