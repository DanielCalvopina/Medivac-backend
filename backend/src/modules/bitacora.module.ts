import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BitacoraController } from 'src/controller/bitacora.controller';
import { BitacoraService } from 'src/service/bitacora.service';
import { Bitacora } from 'src/entity/Bitacora';
import { Viaje } from 'src/entity/Viaje';

@Module({
  imports: [TypeOrmModule.forFeature([Bitacora, Viaje])],
  controllers: [BitacoraController],
  providers: [BitacoraService],
})
export class BitacoraModule {}
