import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { FolioService } from 'src/service/folio.service';

@Controller('folio')
export class FolioController {
  constructor(private readonly folioService: FolioService) {}

  @Post('create')
  async create(@Body() data: any) {
    return await this.folioService.create(data);
  }
  @Get("viaje/:viajeId")
  async getByViaje(@Param("viajeId") viajeId: number) {
    return await this.folioService.findByViaje(viajeId);
  }
  @Get('list')
  async findAll() {
    return await this.folioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.folioService.findOne(id);
  }

  @Put('update/:id')
  async update(@Param('id') id: number, @Body() data: any) {
    return await this.folioService.update(id, data);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: number) {
    return await this.folioService.remove(id);
  }
}
