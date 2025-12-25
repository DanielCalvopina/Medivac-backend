import { 
  Controller, 
  Get, 
  Post, 
  Patch, 
  Delete, 
  Param, 
  Body, 
  ParseIntPipe,
  HttpCode,
  HttpStatus 
} from '@nestjs/common';
import { RutasService } from '../service/rutas.service';
import { CreateRutasDto, UpdateRutasDto, RutasResponseDto } from '../dto/rutas.dto';

@Controller('rutas')
export class RutasController {
  constructor(private readonly rutasService: RutasService) {}

  @Get()
  findAll(): Promise<RutasResponseDto[]> {
    return this.rutasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<RutasResponseDto> {
    return this.rutasService.findOne(id);
  }

  @Post()
  create(@Body() data: CreateRutasDto): Promise<RutasResponseDto> {
    return this.rutasService.create(data);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() data: UpdateRutasDto
  ): Promise<RutasResponseDto> {
    return this.rutasService.update(id, data);
  }

  @Patch(':id/toggle-status')
  toggleStatus(@Param('id', ParseIntPipe) id: number): Promise<RutasResponseDto> {
    return this.rutasService.toggleStatus(id);
  }

  // --- CORRECCIÓN AQUÍ ---
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.rutasService.remove(id);
  }
}