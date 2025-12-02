import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ClienteService } from '../service/cliente.service';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly service: ClienteService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':cliId')
  findOne(@Param('cliId', ParseIntPipe) cliId: number) {
    return this.service.findOne(cliId);
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }

  @Patch(':cliId')
  update(@Param('cliId', ParseIntPipe) cliId: number, @Body() body: any) {
    return this.service.update(cliId, body);
  }

  @Delete(':cliId')
  remove(@Param('cliId', ParseIntPipe) cliId: number) {
    return this.service.remove(cliId);
  }
}
