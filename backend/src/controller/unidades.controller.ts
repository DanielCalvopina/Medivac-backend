import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { UnidadesService } from '../service/unidades.service';

import { CreateTractoDto, UpdateTractoDto, TractoResponseDto } from '../dto/tracto.dto';
import { CreateTanqueDto, UpdateTanqueDto, TanqueResponseDto } from '../dto/tanque.dto';
import { CreateDollyDto, UpdateDollyDto, DollyResponseDto } from '../dto/dolly.dto';
import { UnidadesItemsDto } from '../dto/unidades.dto';
// Ajusta esta ruta a donde tengas tu DTO de status
import { ChangeStatusDto } from '../dto/change-status.dto'; 

@Controller('unidades')
export class UnidadesController {
  constructor(private readonly service: UnidadesService) {}

  // =================================================================
  //                       ENDPOINT PRINCIPAL
  // =================================================================
  
  // Obtiene TODAS las unidades (Tractos, Tanques y Dollies) en una sola petición.
  // Ideal para cargar el inventario completo o dashboards iniciales.
  @Get('getUnidades')
  getUnidades(): Promise<UnidadesItemsDto> {
    return this.service.getUnidades();
  }

  // =================================================================
  //                            TRACTOS
  // =================================================================

  // Lista solo los tractos registrados.
  @Get('tractos')
  listTractos(): Promise<TractoResponseDto[]> {
    return this.service.listTractos();
  }

  // Busca un tracto específico por su placa.
  @Get('tractos/:trPlc')
  getTracto(@Param('trPlc') trPlc: string): Promise<TractoResponseDto> {
    return this.service.getTracto(trPlc);
  }

  // Crea un nuevo tracto en la base de datos.
  @Post('tractos')
  createTracto(@Body() body: CreateTractoDto): Promise<TractoResponseDto> {
    return this.service.createTracto(body);
  }

  // Actualiza los datos generales de un tracto existente (excepto el estatus).
  @Patch('tractos/:trPlc')
  updateTracto(
    @Param('trPlc') trPlc: string,
    @Body() body: UpdateTractoDto,
  ): Promise<TractoResponseDto> {
    return this.service.updateTracto(trPlc, body);
  }

  // Actualiza únicamente el status del tracto (recibe un número personalizado).
  @Patch('tractos/:trPlc/status')
  changeTractoStatus(
    @Param('trPlc') trPlc: string,
    @Body() body: ChangeStatusDto,
  ): Promise<TractoResponseDto> {
    return this.service.changeTractoStatus(trPlc, body.status);
  }

  // Elimina un tracto de forma lógica (Soft Delete).
  @Delete('tractos/:trPlc')
  deleteTracto(@Param('trPlc') trPlc: string): Promise<{ deleted: true }> {
    return this.service.deleteTracto(trPlc);
  }

  // =================================================================
  //                            TANQUES
  // =================================================================

  // Lista solo los tanques registrados.
  @Get('tanques')
  listTanques(): Promise<TanqueResponseDto[]> {
    return this.service.listTanques();
  }

  // Busca un tanque específico por su ID.
  @Get('tanques/:tnqId')
  getTanque(@Param('tnqId', ParseIntPipe) tnqId: number): Promise<TanqueResponseDto> {
    return this.service.getTanque(tnqId);
  }

  // Crea un nuevo tanque en la base de datos.
  @Post('tanques')
  createTanque(@Body() body: CreateTanqueDto): Promise<TanqueResponseDto> {
    return this.service.createTanque(body);
  }

  // Actualiza los datos generales de un tanque existente.
  @Patch('tanques/:tnqId')
  updateTanque(
    @Param('tnqId', ParseIntPipe) tnqId: number,
    @Body() body: UpdateTanqueDto,
  ): Promise<TanqueResponseDto> {
    return this.service.updateTanque(tnqId, body);
  }

  // Actualiza únicamente el status del tanque.
  @Patch('tanques/:tnqId/status')
  changeTanqueStatus(
    @Param('tnqId', ParseIntPipe) tnqId: number,
    @Body() body: ChangeStatusDto,
  ): Promise<TanqueResponseDto> {
    return this.service.changeTanqueStatus(tnqId, body.status);
  }

  // Elimina un tanque de forma lógica (Soft Delete).
  @Delete('tanques/:tnqId')
  deleteTanque(
    @Param('tnqId', ParseIntPipe) tnqId: number,
  ): Promise<{ deleted: true }> {
    return this.service.deleteTanque(tnqId);
  }

  // =================================================================
  //                            DOLLIES
  // =================================================================

  // Lista solo los dollies registrados.
  @Get('dollies')
  listDollies(): Promise<DollyResponseDto[]> {
    return this.service.listDollies();
  }

  // Busca un dolly específico por su ID.
  @Get('dollies/:id')
  getDolly(@Param('id') id: string): Promise<DollyResponseDto> {
    return this.service.getDolly(id);
  }

  // Crea un nuevo dolly en la base de datos.
  @Post('dollies')
  createDolly(@Body() body: CreateDollyDto): Promise<DollyResponseDto> {
    return this.service.createDolly(body);
  }

  // Actualiza los datos generales de un dolly existente.
  @Patch('dollies/:id')
  updateDolly(
    @Param('id') id: string,
    @Body() body: UpdateDollyDto,
  ): Promise<DollyResponseDto> {
    return this.service.updateDolly(id, body);
  }

  // Actualiza únicamente el status del dolly.
  @Patch('dollies/:id/status')
  changeDollyStatus(
    @Param('id') id: string,
    @Body() body: ChangeStatusDto,
  ): Promise<DollyResponseDto> {
    return this.service.changeDollyStatus(id, body.status);
  }

  // Elimina un dolly de forma lógica (Soft Delete).
  @Delete('dollies/:id')
  deleteDolly(@Param('id') id: string): Promise<{ deleted: true }> {
    return this.service.deleteDolly(id);
  }
}