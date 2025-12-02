import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RutasService } from 'src/service/rutas.service';

@Controller('rutas')
export class RutasController {
  constructor(private readonly rutasService: RutasService) {}

  @Post('create')
  async create(@Body() data: any) {
    return await this.rutasService.create(data);
  }

  @Get('list')
  async findAll() {
    return await this.rutasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.rutasService.findOne(id);
  }

  @Put('update/:id')
  async update(@Param('id') id: number, @Body() data: any) {
    return await this.rutasService.update(id, data);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: number) {
    return await this.rutasService.remove(id);
  }
}
