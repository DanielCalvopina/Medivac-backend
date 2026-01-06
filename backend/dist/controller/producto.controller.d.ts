import { ProductoService } from '../service/producto.service';
import { CreateProductoDto, UpdateProductoDto, ProductoResponseDto } from '../dto/producto.dto';
export declare class ProductoController {
    private readonly productoService;
    constructor(productoService: ProductoService);
    findAll(): Promise<ProductoResponseDto[]>;
    findOne(id: number): Promise<ProductoResponseDto>;
    create(body: CreateProductoDto): Promise<ProductoResponseDto>;
    update(id: number, body: UpdateProductoDto): Promise<ProductoResponseDto>;
    toggleStatus(id: number): Promise<ProductoResponseDto>;
    remove(id: number): Promise<{
        deleted: true;
    }>;
}
