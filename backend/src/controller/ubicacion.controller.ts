import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UbicacionService } from '../service/ubicacion.service';

@Controller('ubicaciones')
export class UbicacionController {
  constructor(private readonly svc: UbicacionService) {}

  // ====== ESTACIONES ======
  @Get('estaciones')
  listEstaciones() { return this.svc.listEstaciones(); }

  @Get('estaciones/:etnsId')
  getEstacion(@Param('etnsId', ParseIntPipe) etnsId: number) { return this.svc.getEstacion(etnsId); }

  @Post('estaciones')
  createEstacion(@Body() body: any) { return this.svc.createEstacion(body); }

  @Patch('estaciones/:etnsId')
  updateEstacion(@Param('etnsId', ParseIntPipe) etnsId: number, @Body() body: any) {
    return this.svc.updateEstacion(etnsId, body);
  }

  @Delete('estaciones/:etnsId')
  deleteEstacion(@Param('etnsId', ParseIntPipe) etnsId: number) { return this.svc.deleteEstacion(etnsId); }

  // ====== TERMINALES ======
  @Get('terminales')
  listTerminales() { return this.svc.listTerminales(); }

  @Get('terminales/:trmId')
  getTerminal(@Param('trmId', ParseIntPipe) trmId: number) { return this.svc.getTerminal(trmId); }

  @Post('terminales')
  createTerminal(@Body() body: any) { return this.svc.createTerminal(body); }

  @Patch('terminales/:trmId')
  updateTerminal(@Param('trmId', ParseIntPipe) trmId: number, @Body() body: any) {
    return this.svc.updateTerminal(trmId, body);
  }

  @Delete('terminales/:trmId')
  deleteTerminal(@Param('trmId', ParseIntPipe) trmId: number) { return this.svc.deleteTerminal(trmId); }

  // ====== VÍNCULOS ======
  @Post('vinculos/estacion-cliente')
  vincularEstacionCliente(@Body() body: { etnsId: number; cliId: number }) {
    return this.svc.vincularEstacionCliente(Number(body.etnsId), Number(body.cliId));
  }

  @Post('vinculos/terminal-cliente')
  vincularTerminalCliente(@Body() body: { trmId: number; cliId: number }) {
    return this.svc.vincularTerminalCliente(Number(body.trmId), Number(body.cliId));
  }
    // ====== GET por cliente ======
  @Get('clientes/:cliId/estaciones')
  estacionesPorCliente(@Param('cliId', ParseIntPipe) cliId: number) {
    return this.svc.estacionesPorCliente(cliId);
  }

  @Get('clientes/:cliId/terminales')
  terminalesPorCliente(@Param('cliId', ParseIntPipe) cliId: number) {
    return this.svc.terminalesPorCliente(cliId);
  }
// ====== CLIENTES POR ESTACIÓN ======
  @Get('estaciones/:etnsId/clientes')
  clientesPorEstacion(@Param('etnsId', ParseIntPipe) etnsId: number) {
    return this.svc.clientesPorEstacion(etnsId);
  }

  // ====== CLIENTES POR TERMINAL ======
  @Get('terminales/:trmId/clientes')
  clientesPorTerminal(@Param('trmId', ParseIntPipe) trmId: number) {
    return this.svc.clientesPorTerminal(trmId);
  }

}
