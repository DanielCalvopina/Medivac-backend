import { Repository } from 'typeorm';
import { Producto } from '../entity/Producto';
import { CreateProductoDto, UpdateProductoDto, ProductoResponseDto } from '../dto/producto.dto';
export declare class ProductoService {
    private readonly productoRepo;
    constructor(productoRepo: Repository<Producto>);
    private toResponseDto;
    findAll(): Promise<ProductoResponseDto[]>;
    findOne(id: number): Promise<ProductoResponseDto>;
    create(dto: CreateProductoDto): Promise<ProductoResponseDto>;
    update(id: number, dto: UpdateProductoDto): Promise<ProductoResponseDto>;
    toggleStatus(id: number): Promise<ProductoResponseDto>;
    remove(id: number): Promise<{
        deleted: true;
    }>;
}
