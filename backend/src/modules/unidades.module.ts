import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnidadesService } from '../service/unidades.service';
import { UnidadesController } from '../controller/unidades.controller';
import { Tracto } from '../entity/Tracto';
import { Tanque } from '../entity/Tanque';
import { Dolly } from '../entity/Dolly'; // ⚠️ si tu clase se llama DocDolly, cámbialo aquí

@Module({
  imports: [TypeOrmModule.forFeature([Tracto, Tanque, Dolly])],
  controllers: [UnidadesController],
  providers: [UnidadesService],
  exports: [UnidadesService],
})
export class UnidadesModule {}
