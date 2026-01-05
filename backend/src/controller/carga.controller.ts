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
import { CargaService } from '../service/carga.service';
import { CreateCargaDto, UpdateCargaDto } from '../dto/carga.dto';

@Controller('carga')
export class CargaController {
  constructor(private readonly svc: CargaService) {}

  @Get()
  findAll() {
    return this.svc.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.svc.findOne(id);
  }

  @Get('folio/:folId')
  getByFolio(@Param('folId', ParseIntPipe) folId: number) {
    return this.svc.findByFolio(folId);
  }

  @Post()
  create(@Body() body: CreateCargaDto) {
    return this.svc.create(body);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() body: UpdateCargaDto
  ) {
    return this.svc.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.svc.remove(id);
  }
}