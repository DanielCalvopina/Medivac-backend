// src/controller/mancuerna.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { MancuernaService } from '../service/mancuerna.service';

@Controller('mancuerna')
export class MancuernaController {
  constructor(private readonly mancuernaService: MancuernaService) {}

  @Post('create')
  create(@Body() data: any) {
    return this.mancuernaService.create(data);
  }

  @Get('list')
  findAll() {
    return this.mancuernaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.mancuernaService.findOne(id);
  }

  @Put('update/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.mancuernaService.update(id, data);
  }

  @Delete('delete/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.mancuernaService.remove(id);
  }
}
