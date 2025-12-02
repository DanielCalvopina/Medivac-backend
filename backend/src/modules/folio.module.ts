import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Folio } from 'src/entity/Folio';
import { Producto } from 'src/entity/Producto';
import { Viaje } from 'src/entity/Viaje';
import { Mancuerna } from 'src/entity/Mancuerna';
import { Tanque } from 'src/entity/Tanque';
import { MancTanq } from 'src/entity/MancTanq';
import { Estaciones } from 'src/entity/Estaciones';
import { EstacionesFolio } from 'src/entity/EstacionesFolio';

import { FolioService } from '../service/folio.service';
import { FolioController } from '../controller/folio.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Folio,
      Producto,
      Viaje,
      Mancuerna,        // ✅ agregado
      Tanque,           // ✅ agregado
      MancTanq,         // ✅ agregado
      Estaciones,       // ✅ agregado
      EstacionesFolio,  // ✅ agregado
    ]),
  ],
  providers: [FolioService],
  controllers: [FolioController],
})
export class FolioModule {}
