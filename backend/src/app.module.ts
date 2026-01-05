// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UnidadesModule } from './modules/unidades.module';
import { ClienteModule } from './modules/cliente.module';
import { OperadorModule } from './modules/operador.module';
import { UbicacionModule } from './modules/ubicacion.module';
import { RutasModule } from './modules/rutas.module';
import { MancuernaModule } from './modules/mancuerna.module';
import { ViajesModule } from './modules/viajes.module';
import { BitacoraModule } from './modules/bitacora.module';
import { FolioModule } from './modules/folio.module';
import { ProductoModule } from './modules/producto.module';
import { FilesModule } from './modules/files.module';
import { CargaModule } from './modules/carga.module';
import { DescargaModule } from './modules/descarga.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UnidadesModule,
    ClienteModule,
    OperadorModule,
    UbicacionModule,
    RutasModule,
    MancuernaModule,
    ViajesModule,
    BitacoraModule,
    FolioModule,
    ProductoModule,
    FilesModule,
    CargaModule,
    DescargaModule
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
  