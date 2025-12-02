import { Repository } from 'typeorm';
import { Rutas } from '../entity/Rutas';
export declare class RutasService {
    private readonly rutasRepo;
    constructor(rutasRepo: Repository<Rutas>);
    findAll(): Promise<Rutas[]>;
    findOne(etnsId2: number): Promise<Rutas>;
    create(data: Partial<Rutas>): Promise<Rutas>;
    update(etnsId2: number, data: Partial<Rutas>): Promise<Rutas>;
    remove(etnsId2: number): Promise<{
        deleted: boolean;
    }>;
}
