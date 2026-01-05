// src/module/carga.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CargaController } from '../controller/carga.controller';
import { CargaService } from '../service/carga.service';

import { Carga } from '../entity/Carga';
import { Sellos } from '../entity/Sellos';
import { Folio } from '../entity/Folio';

@Module({
  imports: [TypeOrmModule.forFeature([Carga, Sellos, Folio])],
  controllers: [CargaController],
  providers: [CargaService],
  exports: [CargaService],
})
export class CargaModule {}
