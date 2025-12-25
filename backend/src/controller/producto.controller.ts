import { 
  Controller, 
  Get, 
  Post, 
  Patch, 
  Delete, 
  Param, 
  Body, 
  ParseIntPipe
} from '@nestjs/common';
import { ProductoService } from '../service/producto.service';
import { CreateProductoDto, UpdateProductoDto, ProductoResponseDto } from '../dto/producto.dto';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Get()
  findAll(): Promise<ProductoResponseDto[]> {
    return this.productoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<ProductoResponseDto> {
    return this.productoService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateProductoDto): Promise<ProductoResponseDto> {
    return this.productoService.create(body);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() body: UpdateProductoDto
  ): Promise<ProductoResponseDto> {
    return this.productoService.update(id, body);
  }

  @Patch(':id/toggle-status')
  toggleStatus(@Param('id', ParseIntPipe) id: number): Promise<ProductoResponseDto> {
    return this.productoService.toggleStatus(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<{ deleted: true }> {
    return this.productoService.remove(id);
  }
}