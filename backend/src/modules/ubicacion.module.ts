import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UbicacionService } from '../service/ubicacion.service';
import { UbicacionController } from '../controller/ubicacion.controller';

import { Estaciones } from '../entity/Estaciones';
import { Terminal } from '../entity/Terminal';
import { Cliente } from '../entity/Cliente';
import { EtnsCli } from '../entity/EtnsCli';
import { TmnCli } from '../entity/TmnCli';

@Module({
  imports: [TypeOrmModule.forFeature([Estaciones, Terminal, Cliente, EtnsCli, TmnCli])],
  controllers: [UbicacionController],
  providers: [UbicacionService],
  exports: [UbicacionService],
})
export class UbicacionModule {}
