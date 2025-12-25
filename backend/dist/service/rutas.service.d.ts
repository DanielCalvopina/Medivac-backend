import { Repository } from 'typeorm';
import { Rutas } from '../entity/Rutas';
import { CreateRutasDto, UpdateRutasDto, RutasResponseDto } from '../dto/rutas.dto';
export declare class RutasService {
    private readonly rutasRepo;
    constructor(rutasRepo: Repository<Rutas>);
    private toResponseDto;
    findAll(): Promise<RutasResponseDto[]>;
    findOne(etnsId2: number): Promise<RutasResponseDto>;
    create(dto: CreateRutasDto): Promise<RutasResponseDto>;
    update(etnsId2: number, dto: UpdateRutasDto): Promise<RutasResponseDto>;
    toggleStatus(etnsId2: number): Promise<RutasResponseDto>;
    remove(etnsId2: number): Promise<{
        deleted: true;
    }>;
}
