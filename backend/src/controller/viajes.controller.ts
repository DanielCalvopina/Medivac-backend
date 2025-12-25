import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ViajesService } from '../service/viajes.service';
import { CreateViajeDto, UpdateViajeDto, ViajeItemDto, ViajeItemsDto } from '../dto/viaje.dto';

@Controller('viajes')
export class ViajesController {
  constructor(private readonly svc: ViajesService) {}

  // =================================================================
  //                       CONSULTAS
  // =================================================================

  // Obtiene el historial completo de viajes ordenados por fecha (del más reciente al más antiguo).
  // Incluye relaciones básicas para listados.
  @Get()
  findAll(): Promise<ViajeItemsDto> {
    return this.svc.findAll();
  }

  // Busca un viaje específico por ID.
  // Carga TODA la información detallada: Cliente, Mancuerna, Rutas, Terminales, Folios y Bitácoras.
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<ViajeItemDto> {
    return this.svc.findOne(id);
  }

  // =================================================================
  //                  GESTIÓN DE CICLO DE VIDA (CRÍTICO)
  // =================================================================

  // Crea un viaje en estado 'Pendiente' (Status 1).
  // Vincula las rutas y terminales iniciales definidas en el DTO.
  @Post()
  create(@Body() body: CreateViajeDto): Promise<ViajeItemDto> {
    return this.svc.create(body);
  }

  // Cambia el estado a 'En Curso' (Status 2).
  // Registra la fecha/hora exacta de inicio (viajeInicio).
  // Solo funciona si el viaje está en estado 'Pendiente'.
  @Patch(':id/iniciar')
  iniciar(@Param('id', ParseIntPipe) id: number): Promise<ViajeItemDto> {
    return this.svc.iniciarViaje(id);
  }

  // Cambia el estado a 'Finalizado' (Status 3).
  // Registra la fecha/hora de fin (viajeFin) y CALCULA AUTOMÁTICAMENTE la duración.
  // Solo funciona si el viaje está 'En Curso'.
  @Patch(':id/finalizar')
  finalizar(@Param('id', ParseIntPipe) id: number): Promise<ViajeItemDto> {
    return this.svc.finalizarViaje(id);
  }

  // =================================================================
  //                       EDICIÓN Y BORRADO
  // =================================================================

  // Actualiza datos generales del viaje.
  // IMPORTANTE: Si envías 'rutasIds' o 'terminalesIds', se borrarán las anteriores y se pondrán las nuevas.
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() body: UpdateViajeDto
  ): Promise<ViajeItemDto> {
    return this.svc.update(id, body);
  }

  // Elimina el viaje de forma lógica (Soft Delete) y borra físicamente sus vínculos
  // en las tablas intermedias (Rutas-Viaje y Terminal-Viaje) para mantener la limpieza.
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.svc.remove(id);
  }
}