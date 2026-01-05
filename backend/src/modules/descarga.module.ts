// src/module/descarga.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DescargaController } from '../controller/descarga.controller';
import { DescargaService } from '../service/descarga.service';

import { Descarga } from '../entity/Descarga';
import { Folio } from '../entity/Folio';

@Module({
  imports: [TypeOrmModule.forFeature([Descarga, Folio])],
  controllers: [DescargaController],
  providers: [DescargaService],
  exports: [DescargaService],
})
export class DescargaModule {}
