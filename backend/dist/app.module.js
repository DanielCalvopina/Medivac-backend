"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("./config/typeorm.config");
const unidades_module_1 = require("./modules/unidades.module");
const cliente_module_1 = require("./modules/cliente.module");
const operador_module_1 = require("./modules/operador.module");
const ubicacion_module_1 = require("./modules/ubicacion.module");
const rutas_module_1 = require("./modules/rutas.module");
const mancuerna_module_1 = require("./modules/mancuerna.module");
const viajes_module_1 = require("./modules/viajes.module");
const Bitacora_1 = require("./entity/Bitacora");
const folio_module_1 = require("./modules/folio.module");
const producto_module_1 = require("./modules/producto.module");
const files_module_1 = require("./modules/files.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeOrmConfig),
            unidades_module_1.UnidadesModule,
            cliente_module_1.ClienteModule,
            operador_module_1.OperadorModule,
            ubicacion_module_1.UbicacionModule,
            rutas_module_1.RutasModule,
            mancuerna_module_1.MancuernaModule,
            viajes_module_1.ViajesModule,
            Bitacora_1.Bitacora,
            folio_module_1.FolioModule,
            producto_module_1.ProductoModule,
            files_module_1.FilesModule
        ],
        providers: [],
        controllers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map