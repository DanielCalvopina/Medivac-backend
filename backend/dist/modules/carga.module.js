"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const carga_controller_1 = require("../controller/carga.controller");
const carga_service_1 = require("../service/carga.service");
const Carga_1 = require("../entity/Carga");
const Sellos_1 = require("../entity/Sellos");
const Folio_1 = require("../entity/Folio");
let CargaModule = class CargaModule {
};
exports.CargaModule = CargaModule;
exports.CargaModule = CargaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Carga_1.Carga, Sellos_1.Sellos, Folio_1.Folio])],
        controllers: [carga_controller_1.CargaController],
        providers: [carga_service_1.CargaService],
        exports: [carga_service_1.CargaService],
    })
], CargaModule);
//# sourceMappingURL=carga.module.js.map