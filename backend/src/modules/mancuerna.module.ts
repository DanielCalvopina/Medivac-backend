import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Mancuerna } from '../entity/Mancuerna';
import { Tracto } from '../entity/Tracto';
import { Tanque } from '../entity/Tanque';
import { Dolly } from '../entity/Dolly';
import { Operador } from '../entity/Operador';
import { MancTanq } from '../entity/MancTanq';

import { MancuernaService } from 'src/service/mancuerna.service';
import { MancuernaController } from 'src/controller/mancuerna.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Mancuerna,
      Tracto,
      Tanque,
      Dolly,
      Operador,
      MancTanq, // <-- necesario para @InjectRepository(MancTanq)
    ]),
  ],
  providers: [MancuernaService],
  controllers: [MancuernaController],
  exports: [MancuernaService],
})
export class MancuernaModule {}
