import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RutasController } from 'src/controller/rutas.controller';
import { RutasService } from 'src/service/rutas.service';
import { Rutas } from 'src/entity/Rutas';

@Module({
  imports: [TypeOrmModule.forFeature([Rutas])],
  controllers: [RutasController],
  providers: [RutasService],
})
export class RutasModule {}
