import {
  Controller,
  Post,
  Get,
  UseInterceptors,
  UploadedFile,
  Body,
  Param,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from '../service/files.service';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  // ---------------------- CARGA -----------------------
  @Post('carga/upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadCarga(@UploadedFile() file: any, @Body() body: any) {
    return this.filesService.handleUpload({
      file,
      entity: 'carga',
      entityId: body.entityId,
      type: body.type,
    });
  }

  @Get('carga/:id')
  getCarga(@Param('id') id: string) {
    return this.filesService.getDocs('carga', id);
  }

  // ---------------------- DESCARGA -----------------------
  @Post('descarga/upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadDescarga(@UploadedFile() file: any, @Body() body: any) {
    return this.filesService.handleUpload({
      file,
      entity: 'descarga',
      entityId: body.entityId,
      type: body.type,
    });
  }

  @Get('descarga/:id')
  getDescarga(@Param('id') id: string) {
    return this.filesService.getDocs('descarga', id);
  }

  // ---------------------- VIAJE -----------------------
  @Post('viaje/upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadViaje(@UploadedFile() file: any, @Body() body: any) {
    return this.filesService.handleUpload({
      file,
      entity: 'viaje',
      entityId: body.entityId,
      type: body.type,
    });
  }

  @Get('viaje/:id')
  getViaje(@Param('id') id: string) {
    return this.filesService.getDocs('viaje', id);
  }

  // ---------------------- FOLIO -----------------------
  @Post('folio/upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFolio(@UploadedFile() file: any, @Body() body: any) {
    return this.filesService.handleUpload({
      file,
      entity: 'folio',
      entityId: body.entityId,
      type: body.type,
    });
  }

  @Get('folio/:id')
  getFolio(@Param('id') id: string) {
    return this.filesService.getDocs('folio', id);
  }

  // ---------------------- OPERADOR -----------------------
  @Post('op/upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadOp(@UploadedFile() file: any, @Body() body: any) {
    return this.filesService.handleUpload({
      file,
      entity: 'op',
      entityId: body.entityId,
      type: body.type,
    });
  }

  @Get('op/:id')
  getOp(@Param('id') id: string) {
    return this.filesService.getDocs('op', id);
  }

  // ---------------------- TRACTO -----------------------
  @Post('tracto/upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadTracto(@UploadedFile() file: any, @Body() body: any) {
    return this.filesService.handleUpload({
      file,
      entity: 'tracto',
      entityId: body.entityId,
      type: body.type,
    });
  }

  @Get('tracto/:id')
  getTracto(@Param('id') id: string) {
    return this.filesService.getDocs('tracto', id);
  }

  // ---------------------- TANQUE -----------------------
  @Post('tanque/upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadTanque(@UploadedFile() file: any, @Body() body: any) {
    return this.filesService.handleUpload({
      file,
      entity: 'tanque',
      entityId: body.entityId,
      type: body.type,
    });
  }

  @Get('tanque/:id')
  getTanque(@Param('id') id: string) {
    return this.filesService.getDocs('tanque', id);
  }

  // ---------------------- DOLLY -----------------------
  @Post('dolly/upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadDolly(@UploadedFile() file: any, @Body() body: any) {
    return this.filesService.handleUpload({
      file,
      entity: 'dolly',
      entityId: body.entityId,
      type: body.type,
    });
  }

  @Get('dolly/:id')
  getDolly(@Param('id') id: string) {
    return this.filesService.getDocs('dolly', id);
  }
}
