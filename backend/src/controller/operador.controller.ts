import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { OperadorService } from '../service/operador.service';

@Controller('operador')
export class OperadorController {
  constructor(private readonly service: OperadorService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':opCed')
  findOne(@Param('opCed') opCed: string) {
    return this.service.findOne(opCed);
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }

  @Patch(':opCed')
  update(@Param('opCed') opCed: string, @Body() body: any) {
    return this.service.update(opCed, body);
  }

  @Delete(':opCed')
  remove(@Param('opCed') opCed: string) {
    return this.service.remove(opCed);
  }
}
