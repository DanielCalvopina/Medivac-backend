import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from '../entity/Cliente';
import { ClienteService } from '../service/cliente.service';
import { ClientesController } from '../controller/cliente.controller';
import { OperadorModule } from './operador.module';
import { UbicacionModule } from './ubicacion.module';
import { AdminModule } from './admin.module';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente]), OperadorModule, UbicacionModule, AdminModule],
  controllers: [ClientesController],
  providers: [ClienteService],
  exports: [ClienteService],
})
export class ClienteModule {}
