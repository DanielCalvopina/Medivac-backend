import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BitacoraService } from 'src/service/bitacora.service';

@Controller('bitacora')
export class BitacoraController {
  constructor(private readonly bitacoraService: BitacoraService) {}

  @Post('create')
  async create(@Body() data: any) {
    return await this.bitacoraService.create(data);
  }

  @Get('list')
  async findAll() {
    return await this.bitacoraService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.bitacoraService.findOne(id);
  }
  @Get('viaje/:viajeId')
  async findByViaje(@Param('viajeId') viajeId: number) {
    return await this.bitacoraService.findByViaje(viajeId);
  }

  @Put('update/:id')
  async update(@Param('id') id: number, @Body() data: any) {
    return await this.bitacoraService.update(id, data);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: number) {
    return await this.bitacoraService.remove(id);
  }
}
