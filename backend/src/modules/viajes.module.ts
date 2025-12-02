import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ViajesController } from 'src/controller/viajes.controller';
import { ViajesService } from 'src/service/viajes.service';
import { Viaje } from 'src/entity/Viaje';
import { Cliente } from 'src/entity/Cliente';
import { Mancuerna } from 'src/entity/Mancuerna';
import { Terminal } from 'src/entity/Terminal';
import { TerminalViaje } from 'src/entity/TerminalViaje';
// Si usas Ubicacion, mantenlo:
import { Rutas } from 'src/entity/Rutas';
import { RtFlId } from 'src/entity/RtFlId';
import { UbicacionModule } from './ubicacion.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Viaje, Cliente, Mancuerna, Terminal, TerminalViaje,Rutas,RtFlId]),
    UbicacionModule,
  ],
  controllers: [ViajesController],
  providers: [ViajesService],
})
export class ViajesModule {}
