import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { MancuernaService } from '../service/mancuerna.service';
import { CreateMancuernaDto, UpdateMancuernaDto } from '../dto/mancuerna.dto';

@Controller('mancuernas')
export class MancuernaController {
  constructor(private readonly svc: MancuernaService) {}

  @Get()
  findAll() {
    return this.svc.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.svc.findOne(id);
  }

  // Crear o Reactivar Mancuerna
  @Post()
  create(@Body() body: CreateMancuernaDto) {
    return this.svc.create(body);
  }

  // Desarmar Mancuerna (Pasa a Status 3 y libera componentes)
  @Patch(':id/desarmar')
  desarmar(@Param('id', ParseIntPipe) id: number) {
    return this.svc.desarmar(id);
  }

  // Update simple (ej. cambiar nombre)
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateMancuernaDto) {
    // Nota: Si necesitas cambiar el operador SIN desarmar, deberías implementar
    // una lógica específica en el update para cerrar el MancOp actual y abrir uno nuevo.
    // El 'create' maneja el ciclo completo de armado.
    return null; // Implementar si es necesario update simple
  }
}