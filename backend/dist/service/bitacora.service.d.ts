import { Repository } from 'typeorm';
import { Bitacora } from 'src/entity/Bitacora';
import { Viaje } from 'src/entity/Viaje';
export declare class BitacoraService {
    private readonly bitacoraRepository;
    private readonly viajeRepository;
    constructor(bitacoraRepository: Repository<Bitacora>, viajeRepository: Repository<Viaje>);
    private todayStr;
    create(data: any): Promise<Bitacora[]>;
    findAll(): Promise<Bitacora[]>;
    findOne(id: number): Promise<Bitacora>;
    findByViaje(viajeId: number): Promise<Bitacora[]>;
    update(id: number, data: any): Promise<Bitacora>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
