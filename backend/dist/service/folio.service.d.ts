import { Repository } from 'typeorm';
import { Folio } from 'src/entity/Folio';
import { Producto } from 'src/entity/Producto';
import { Viaje } from 'src/entity/Viaje';
import { Tanque } from 'src/entity/Tanque';
import { Mancuerna } from 'src/entity/Mancuerna';
import { MancTanq } from 'src/entity/MancTanq';
import { Estaciones } from 'src/entity/Estaciones';
import { EstacionesFolio } from 'src/entity/EstacionesFolio';
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
    private today;
    create(data: any): Promise<Folio>;
    findAll(): Promise<Folio[]>;
    findByViaje(viajeId: number): Promise<Folio[]>;
    findOne(id: number): Promise<Folio>;
    update(id: number, data: any): Promise<Folio>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
