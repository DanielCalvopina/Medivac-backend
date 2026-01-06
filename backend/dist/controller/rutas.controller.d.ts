import { RutasService } from '../service/rutas.service';
import { CreateRutasDto, UpdateRutasDto, RutasResponseDto } from '../dto/rutas.dto';
export declare class RutasController {
    private readonly rutasService;
    constructor(rutasService: RutasService);
    findAll(): Promise<RutasResponseDto[]>;
    findOne(id: number): Promise<RutasResponseDto>;
    create(data: CreateRutasDto): Promise<RutasResponseDto>;
    update(id: number, data: UpdateRutasDto): Promise<RutasResponseDto>;
    toggleStatus(id: number): Promise<RutasResponseDto>;
    remove(id: number): Promise<void>;
}
