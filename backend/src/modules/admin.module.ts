import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from '../entity/Admin';
import { AdminService } from '../service/admin.service';
import { AdminController } from '../controller/admin.controller';
import { RutasModule } from './rutas.module';
import { MancuernaModule } from './mancuerna.module';
import { BitacoraModule } from './bitacora.module';
import { FolioModule } from './folio.module';
import { ProductoModule } from './producto.module';
import { FilesModule } from './files.module';

@Module({
  imports: [TypeOrmModule.forFeature([Admin]), RutasModule, MancuernaModule, BitacoraModule, FolioModule, ProductoModule, FilesModule],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService],
})
export class AdminModule {}
