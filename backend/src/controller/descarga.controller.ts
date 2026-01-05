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
import { DescargaService } from '../service/descarga.service';
import { CreateDescargaDto, UpdateDescargaDto, DescargaItemDto, DescargaItemsDto } from '../dto/descarga.dto';

@Controller('descarga')
export class DescargaController {
  constructor(private readonly svc: DescargaService) {}

  /**
   * Obtener todas las descargas registradas.
   */
  @Get()
  findAll(): Promise<DescargaItemsDto> {
    return this.svc.findAll();
  }

  /**
   * Obtener una descarga por su ID.
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<DescargaItemDto> {
    return this.svc.findOne(id);
  }

  /**
   * Obtener todas las descargas de un folio específico.
   * Útil para ver el detalle completo de un folio (Cargas y Descargas).
   */
  @Get('folio/:folId')
  getByFolio(@Param('folId', ParseIntPipe) folId: number): Promise<DescargaItemsDto> {
    return this.svc.findByFolio(folId);
  }

  /**
   * Registrar una nueva descarga a un folio.
   */
  @Post()
  create(@Body() body: CreateDescargaDto): Promise<DescargaItemDto> {
    return this.svc.create(body);
  }

  /**
   * Actualizar datos de la descarga (temperatura, boleta, etc).
   */
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() body: UpdateDescargaDto
  ): Promise<DescargaItemDto> {
    return this.svc.update(id, body);
  }

  /**
   * Eliminar (Soft Delete) una descarga.
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<{ deleted: true }> {
    return this.svc.remove(id);
  }
}