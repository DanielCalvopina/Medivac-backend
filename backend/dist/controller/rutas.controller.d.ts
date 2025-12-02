import { RutasService } from 'src/service/rutas.service';
export declare class RutasController {
    private readonly rutasService;
    constructor(rutasService: RutasService);
    create(data: any): Promise<import("../entity/Rutas").Rutas>;
    findAll(): Promise<import("../entity/Rutas").Rutas[]>;
    findOne(id: number): Promise<import("../entity/Rutas").Rutas>;
    update(id: number, data: any): Promise<import("../entity/Rutas").Rutas>;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
}
