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
import { FolioService } from '../service/folio.service';
import { CreateFolioDto, UpdateFolioDto, FolioItemDto, FolioItemsDto } from '../dto/folio.dto';

@Controller('folio')
export class FolioController {
  constructor(private readonly svc: FolioService) {}

  // =================================================================
  //                       CONSULTAS (GET)
  // =================================================================

  /**
   * 1. OBTENER TODOS LOS FOLIOS
   * Endpoint: GET /folio
   * * Descripción: 
   * Recupera el listado completo de folios registrados en el sistema.
   * Ideal para reportes generales o tablas administrativas.
   * * Respuesta (FolioItemsDto):
   * Retorna un objeto { items: { folios: [...] } } donde cada folio incluye 
   * sus relaciones básicas (producto, viaje y estaciones).
   */
  @Get()
  findAll(): Promise<FolioItemsDto> {
    return this.svc.findAll();
  }

  /**
   * 2. OBTENER UN FOLIO POR ID
   * Endpoint: GET /folio/:id
   * * Descripción:
   * Busca un folio específico. Se usa cuando haces clic en "Ver Detalle" 
   * en el frontend.
   * * Parámetros:
   * - id (URL): El ID numérico del folio.
   * * Respuesta (FolioItemDto):
   * Retorna { items: { folio: { ...datos, estaciones: [...] } } }.
   * Si no existe, devuelve error 404 (Not Found).
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<FolioItemDto> {
    return this.svc.findOne(id);
  }

  /**
   * 3. OBTENER FOLIOS DE UN VIAJE ESPECÍFICO
   * Endpoint: GET /folio/viaje/:viajeId
   * * Descripción:
   * Este es crucial. Obtiene todos los folios asociados a un Viaje en particular.
   * Se usa en la pantalla de "Detalle del Viaje" para mostrar qué cargas/folios
   * lleva ese viaje.
   * * Parámetros:
   * - viajeId (URL): El ID del viaje padre.
   * * Respuesta (FolioItemsDto):
   * Lista de folios filtrados por ese viaje.
   */
  @Get('viaje/:viajeId')
  getByViaje(@Param('viajeId', ParseIntPipe) viajeId: number): Promise<FolioItemsDto> {
    return this.svc.findByViaje(viajeId);
  }

  // =================================================================
  //                       CREACIÓN (POST)
  // =================================================================

  /**
   * 4. CREAR UN NUEVO FOLIO
   * Endpoint: POST /folio
   * * Descripción:
   * Genera un nuevo folio de carga.
   * * Validaciones Clave (en el servicio):
   * - Verifica que el Viaje exista.
   * - Verifica que el Tanque (por número de serie) exista.
   * - (Opcional) Advierte si el tanque no pertenece a la mancuerna del viaje.
   * - Verifica que el Producto exista.
   * * Body (CreateFolioDto):
   * {
   * "viajeId": 10,
   * "prdId": 5,
   * "folCod": "FOL-001",
   * "tnqNumse": "T-9988",
   * "estacionesIds": [1, 2] // IDs de las estaciones por las que pasará
   * ... otros campos de texto
   * }
   */
  @Post()
  create(@Body() body: CreateFolioDto): Promise<FolioItemDto> {
    return this.svc.create(body);
  }

  // =================================================================
  //                       EDICIÓN (PATCH)
  // =================================================================

  /**
   * 5. ACTUALIZAR FOLIO
   * Endpoint: PATCH /folio/:id
   * * Descripción:
   * Modifica datos de un folio existente. Usamos PATCH para actualizaciones parciales
   * (puedes enviar solo el campo que cambió).
   * * Lógica Especial:
   * - Si cambias 'tnqNumse', el sistema vuelve a validar que el nuevo tanque exista.
   * - Si envías 'estacionesIds', el sistema BORRA las estaciones anteriores de este folio
   * y vincula las nuevas (reemplazo total de relaciones).
   * * Parámetros:
   * - id (URL): ID del folio.
   * - Body (UpdateFolioDto): Campos a cambiar.
   */
  @Patch(':id') 
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() body: UpdateFolioDto
  ): Promise<FolioItemDto> {
    return this.svc.update(id, body);
  }

  // =================================================================
  //                       ELIMINACIÓN (DELETE)
  // =================================================================

  /**
   * 6. ELIMINAR FOLIO
   * Endpoint: DELETE /folio/:id
   * * Descripción:
   * Realiza un borrado lógico (Soft Delete) del folio.
   * * Acciones en Cascada (Manuales en servicio):
   * 1. Elimina físicamente los vínculos en 'estaciones_folio' (limpieza).
   * 2. Marca el folio como eliminado (deletedAt) en la BD.
   * * Respuesta:
   * { "deleted": true }
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<{ deleted: true }> {
    return this.svc.remove(id);
  }
}