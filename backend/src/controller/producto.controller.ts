import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductoService } from '../service/producto.service';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post('create')
  create(@Body() body: any) {
    return this.productoService.create(body);
  }

  @Get('list')
  findAll() {
    return this.productoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productoService.findOne(Number(id));
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.productoService.update(Number(id), body);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.productoService.remove(Number(id));
  }
}
