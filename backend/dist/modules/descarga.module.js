"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescargaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const descarga_controller_1 = require("../controller/descarga.controller");
const descarga_service_1 = require("../service/descarga.service");
const Descarga_1 = require("../entity/Descarga");
const Folio_1 = require("../entity/Folio");
let DescargaModule = class DescargaModule {
};
exports.DescargaModule = DescargaModule;
exports.DescargaModule = DescargaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Descarga_1.Descarga, Folio_1.Folio])],
        controllers: [descarga_controller_1.DescargaController],
        providers: [descarga_service_1.DescargaService],
        exports: [descarga_service_1.DescargaService],
    })
], DescargaModule);
//# sourceMappingURL=descarga.module.js.map