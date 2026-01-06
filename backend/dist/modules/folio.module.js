"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolioModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Folio_1 = require("../entity/Folio");
const Producto_1 = require("../entity/Producto");
const Viaje_1 = require("../entity/Viaje");
const Mancuerna_1 = require("../entity/Mancuerna");
const Tanque_1 = require("../entity/Tanque");
const MancTanq_1 = require("../entity/MancTanq");
const Estaciones_1 = require("../entity/Estaciones");
const EstacionesFolio_1 = require("../entity/EstacionesFolio");
const folio_service_1 = require("../service/folio.service");
const folio_controller_1 = require("../controller/folio.controller");
let FolioModule = class FolioModule {
};
exports.FolioModule = FolioModule;
exports.FolioModule = FolioModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                Folio_1.Folio,
                Producto_1.Producto,
                Viaje_1.Viaje,
                Mancuerna_1.Mancuerna,
                Tanque_1.Tanque,
                MancTanq_1.MancTanq,
                Estaciones_1.Estaciones,
                EstacionesFolio_1.EstacionesFolio,
            ]),
        ],
        providers: [folio_service_1.FolioService],
        controllers: [folio_controller_1.FolioController],
    })
], FolioModule);
//# sourceMappingURL=folio.module.js.map