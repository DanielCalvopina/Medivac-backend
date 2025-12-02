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

@Controller('unidades')
export class UnidadesController {
  constructor(private readonly service: UnidadesService) {}

  // ====== TRACTOS ======
  @Get('tractos')
  listTractos() {
    return this.service.listTractos();
  }

  @Get('tractos/:trPlc')
  getTracto(@Param('trPlc') trPlc: string) {
    return this.service.getTracto(trPlc);
  }

  @Post('tractos')
  createTracto(@Body() body: any) {
    return this.service.createTracto(body);
  }

  @Patch('tractos/:trPlc')
  updateTracto(@Param('trPlc') trPlc: string, @Body() body: any) {
    return this.service.updateTracto(trPlc, body);
  }

  @Delete('tractos/:trPlc')
  deleteTracto(@Param('trPlc') trPlc: string) {
    return this.service.deleteTracto(trPlc);
  }

  // ====== TANQUES ======
  @Get('tanques')
  listTanques() {
    return this.service.listTanques();
  }

  // aquí usamos tnqId (number), igual que en el service
  @Get('tanques/:tnqId')
  getTanque(@Param('tnqId', ParseIntPipe) tnqId: number) {
    return this.service.getTanque(tnqId);
  }

  @Post('tanques')
  createTanque(@Body() body: any) {
    return this.service.createTanque(body);
  }

  @Patch('tanques/:tnqId')
  updateTanque(
    @Param('tnqId', ParseIntPipe) tnqId: number,
    @Body() body: any,
  ) {
    return this.service.updateTanque(tnqId, body);
  }

  @Delete('tanques/:tnqId')
  deleteTanque(@Param('tnqId', ParseIntPipe) tnqId: number) {
    return this.service.deleteTanque(tnqId);
  }

  // ====== DOLLIES ======
  @Get('dollies')
  listDollies() {
    return this.service.listDollies();
  }

  @Get('dollies/:id')
  getDolly(@Param('id') id: string) {
    return this.service.getDolly(id);
  }

  @Post('dollies')
  createDolly(@Body() body: any) {
    return this.service.createDolly(body);
  }

  @Patch('dollies/:id')
  updateDolly(@Param('id') id: string, @Body() body: any) {
    return this.service.updateDolly(id, body);
  }

  @Delete('dollies/:id')
  deleteDolly(@Param('id') id: string) {
    return this.service.deleteDolly(id);
  }
}
