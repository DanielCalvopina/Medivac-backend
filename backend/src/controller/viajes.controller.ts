import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ViajesService } from 'src/service/viajes.service';

@Controller('viajes')
export class ViajesController {
  constructor(private readonly viajesService: ViajesService) {}

  @Post('create')
  async create(@Body() data: any) {
    return this.viajesService.create(data);
  }

  @Get('list')
  async findAll() {
    return this.viajesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.viajesService.findOne(id);
  }

  @Put('update/:id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.viajesService.update(id, data);
  }

  @Delete('delete/:id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.viajesService.remove(id);
  }
}
