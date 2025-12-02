import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Operador } from '../entity/Operador';
import { OperadorService } from '../service/operador.service';
import { OperadorController } from '../controller/operador.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Operador])],
  controllers: [OperadorController],
  providers: [OperadorService],
  exports: [OperadorService],
})
export class OperadorModule {}
