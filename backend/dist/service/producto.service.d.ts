import { Repository } from 'typeorm';
import { Producto } from 'src/entity/Producto';
export declare class ProductoService {
    private readonly productoRepo;
    constructor(productoRepo: Repository<Producto>);
    private today;
    create(data: any): Promise<Producto[]>;
    findAll(): Promise<Producto[]>;
    findOne(id: number): Promise<Producto>;
    update(id: number, data: any): Promise<Producto>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
