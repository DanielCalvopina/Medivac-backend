import { ProductoService } from '../service/producto.service';
export declare class ProductoController {
    private readonly productoService;
    constructor(productoService: ProductoService);
    create(body: any): Promise<import("../entity/Producto").Producto[]>;
    findAll(): Promise<import("../entity/Producto").Producto[]>;
    findOne(id: string): Promise<import("../entity/Producto").Producto>;
    update(id: string, body: any): Promise<import("../entity/Producto").Producto>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
