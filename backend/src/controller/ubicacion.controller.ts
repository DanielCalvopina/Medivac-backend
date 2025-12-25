import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UbicacionService } from '../service/ubicacion.service';

import { CreateEstacionesDto, UpdateEstacionesDto } from '../dto/estaciones.dto';
import { CreateTerminalDto, UpdateTerminalDto } from '../dto/terminal.dto';
import { UbicacionesItemsDto, VinculoEstacionClienteDto, VinculoTerminalClienteDto } from '../dto/ubicacion.dto';

@Controller('ubicaciones')
export class UbicacionController {
  constructor(private readonly svc: UbicacionService) {}

  // ==========================================
  //           BUNDLE (TODO EN UNO)
  // ==========================================
  @Get('getUbicaciones')
  getUbicaciones(): Promise<UbicacionesItemsDto> {
    return this.svc.getUbicaciones();
  }

  // ==========================================
  //       VISTAS COMPUESTAS (Relaciones)
  // ==========================================
  @Get('estaciones-con-clientes')
  estacionesConClientes() {
    return this.svc.estacionesConClientes();
  }

  @Get('terminales-con-clientes')
  terminalesConClientes() {
    return this.svc.terminalesConClientes();
  }

  // ==========================================
  //               ESTACIONES
  // ==========================================
  @Get('estaciones')
  listEstaciones() {
    return this.svc.listEstaciones();
  }

  @Get('estaciones/:etnsId')
  getEstacion(@Param('etnsId', ParseIntPipe) etnsId: number) {
    return this.svc.getEstacion(etnsId);
  }

  @Post('estaciones')
  createEstacion(@Body() body: CreateEstacionesDto) {
    return this.svc.createEstacion(body);
  }

  @Patch('estaciones/:etnsId')
  updateEstacion(
    @Param('etnsId', ParseIntPipe) etnsId: number, 
    @Body() body: UpdateEstacionesDto
  ) {
    return this.svc.updateEstacion(etnsId, body);
  }

  @Patch('estaciones/:etnsId/toggle-status')
  toggleEstacionStatus(@Param('etnsId', ParseIntPipe) etnsId: number) {
    return this.svc.toggleEstacionStatus(etnsId);
  }

  @Delete('estaciones/:etnsId')
  deleteEstacion(@Param('etnsId', ParseIntPipe) etnsId: number) {
    return this.svc.deleteEstacion(etnsId);
  }

  // ==========================================
  //               TERMINALES
  // ==========================================
  @Get('terminales')
  listTerminales() {
    return this.svc.listTerminales();
  }

  @Get('terminales/:trmId')
  getTerminal(@Param('trmId', ParseIntPipe) trmId: number) {
    return this.svc.getTerminal(trmId);
  }

  @Post('terminales')
  createTerminal(@Body() body: CreateTerminalDto) {
    return this.svc.createTerminal(body);
  }

  @Patch('terminales/:trmId')
  updateTerminal(
    @Param('trmId', ParseIntPipe) trmId: number, 
    @Body() body: UpdateTerminalDto
  ) {
    return this.svc.updateTerminal(trmId, body);
  }

  @Patch('terminales/:trmId/toggle-status')
  toggleTerminalStatus(@Param('trmId', ParseIntPipe) trmId: number) {
    return this.svc.toggleTerminalStatus(trmId);
  }

  @Delete('terminales/:trmId')
  deleteTerminal(@Param('trmId', ParseIntPipe) trmId: number) {
    return this.svc.deleteTerminal(trmId);
  }

  // ==========================================
  //           VINCULACIÓN (Endpoints)
  // ==========================================
  @Post('vinculos/estacion-cliente')
  vincularEstacionCliente(@Body() body: VinculoEstacionClienteDto) {
    return this.svc.vincularEstacionCliente({
      etnsId: Number(body.etnsId),
      cliId: Number(body.cliId),
    });
  }

  @Post('vinculos/terminal-cliente')
  vincularTerminalCliente(@Body() body: VinculoTerminalClienteDto) {
    return this.svc.vincularTerminalCliente({
      trmId: Number(body.trmId),
      cliId: Number(body.cliId),
    });
  }

  // ==========================================
  //        FILTROS POR CLIENTE (Utils)
  // ==========================================
  @Get('clientes/:cliId/estaciones')
  estacionesPorCliente(@Param('cliId', ParseIntPipe) cliId: number) {
    return this.svc.estacionesPorCliente(cliId);
  }

  @Get('clientes/:cliId/terminales')
  terminalesPorCliente(@Param('cliId', ParseIntPipe) cliId: number) {
    return this.svc.terminalesPorCliente(cliId);
  }
}