// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UnidadesModule } from './modules/unidades.module';
import { ClienteModule } from './modules/cliente.module';
import { OperadorModule } from './modules/operador.module';
import { UbicacionModule } from './modules/ubicacion.module';
import { AdminModule } from './modules/admin.module';
import { RutasModule } from './modules/rutas.module';
import { MancuernaModule } from './modules/mancuerna.module';
import { ViajesModule } from './modules/viajes.module';
import { Bitacora } from './entity/Bitacora';
import { FolioModule } from './modules/folio.module';
import { ProductoModule } from './modules/producto.module';
import { FilesModule } from './modules/files.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UnidadesModule,
    ClienteModule,
    OperadorModule,
    UbicacionModule,
    AdminModule,
    RutasModule,
    MancuernaModule,
    ViajesModule,
    Bitacora,
    FolioModule,
    ProductoModule,
    FilesModule

  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
  