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
import { BitacoraService } from '../service/bitacora.service';
import { 
  CreateBitacoraDto, 
  UpdateBitacoraDto, 
  BitacoraItemDto, 
  BitacoraItemsDto 
} from '../dto/bitacora.dto';

@Controller('bitacora')
export class BitacoraController {
  constructor(private readonly svc: BitacoraService) {}

  // =================================================================
  //                       CONSULTAS (GET)
  // =================================================================

  /**
   * Obtener todas las bitácoras del sistema.
   * Útil para reportes generales o auditoría.
   * @returns {BitacoraItemsDto} Lista completa ordenada por fecha.
   */
  @Get()
  findAll(): Promise<BitacoraItemsDto> {
    return this.svc.findAll();
  }

  /**
   * Obtener una bitácora específica por su ID.
   * Incluye la relación con el Viaje al que pertenece.
   * @param {number} id - ID de la bitácora.
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<BitacoraItemDto> {
    return this.svc.findOne(id);
  }

  /**
   * Obtener todas las bitácoras pertenecientes a un VIAJE específico.
   * Este es el endpoint más usado para mostrar el "Historial de eventos"
   * dentro de la pantalla de detalle de un viaje.
   * @param {number} viajeId - ID del viaje padre.
   */
  @Get('viaje/:viajeId')
  findByViaje(@Param('viajeId', ParseIntPipe) viajeId: number): Promise<BitacoraItemsDto> {
    return this.svc.findByViaje(viajeId);
  }

  // =================================================================
  //                       CREACIÓN (POST)
  // =================================================================

  /**
   * Registrar un nuevo evento o bitácora.
   * Valida que el 'viajeId' exista antes de guardar.
   * @param {CreateBitacoraDto} body - Datos del evento (fecha, descripción, etc.)
   */
  @Post()
  create(@Body() body: CreateBitacoraDto): Promise<BitacoraItemDto> {
    return this.svc.create(body);
  }

  // =================================================================
  //                       EDICIÓN (PATCH)
  // =================================================================

  /**
   * Actualizar una bitácora existente.
   * Se usa PATCH para permitir actualización parcial (solo descripción, o solo fechas).
   * @param {number} id - ID de la bitácora a editar.
   * @param {UpdateBitacoraDto} body - Campos a modificar.
   */
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() body: UpdateBitacoraDto
  ): Promise<BitacoraItemDto> {
    return this.svc.update(id, body);
  }

  // =================================================================
  //                       ELIMINACIÓN (DELETE)
  // =================================================================

  /**
   * Eliminar una bitácora (Borrado Lógico).
   * No borra el registro de la BD, solo llena el campo 'deletedAt'.
   * @param {number} id - ID de la bitácora.
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<{ deleted: true }> {
    return this.svc.remove(id);
  }
}