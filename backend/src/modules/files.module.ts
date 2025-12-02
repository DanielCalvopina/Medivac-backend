// files.module.ts
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import * as multer from 'multer';

import { TypeOrmModule } from '@nestjs/typeorm';

// ENTIDADES
import { DocCarga } from '../entity/DocCarga';
import { DocDescarga } from '../entity/DocDescarga';
import { DocViaje } from '../entity/DocViaje';
import { DocFolio } from '../entity/DocFolio';
import { DocOp } from '../entity/DocOp';
import { DocTracto } from '../entity/DocTracto';
import { DocTanque } from '../entity/DocTanque';
import { DocDolly } from '../entity/DocDolly';

import { FilesController } from '../controller/files.controller';
import { FilesService } from '../service/files.service';

@Module({
  imports: [
    MulterModule.register({
      storage: multer.memoryStorage(),
    }),

    // ⬇️ ⬇️ ⬇️ AQUI ESTABA EL PROBLEMA
    TypeOrmModule.forFeature([
      DocCarga,
      DocDescarga,
      DocViaje,
      DocFolio,
      DocOp,
      DocTracto,
      DocTanque,
      DocDolly,
    ]),
  ],
  controllers: [FilesController],
  providers: [FilesService],
  exports: [FilesService],
})
export class FilesModule {}
