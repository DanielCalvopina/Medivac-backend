"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViajesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const viajes_controller_1 = require("../controller/viajes.controller");
const viajes_service_1 = require("../service/viajes.service");
const Viaje_1 = require("../entity/Viaje");
const Cliente_1 = require("../entity/Cliente");
const Mancuerna_1 = require("../entity/Mancuerna");
const Terminal_1 = require("../entity/Terminal");
const TerminalViaje_1 = require("../entity/TerminalViaje");
const Rutas_1 = require("../entity/Rutas");
const RtFlId_1 = require("../entity/RtFlId");
const ubicacion_module_1 = require("./ubicacion.module");
let ViajesModule = class ViajesModule {
};
exports.ViajesModule = ViajesModule;
exports.ViajesModule = ViajesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([Viaje_1.Viaje, Cliente_1.Cliente, Mancuerna_1.Mancuerna, Terminal_1.Terminal, TerminalViaje_1.TerminalViaje, Rutas_1.Rutas, RtFlId_1.RtFlId]),
            ubicacion_module_1.UbicacionModule,
        ],
        controllers: [viajes_controller_1.ViajesController],
        providers: [viajes_service_1.ViajesService],
    })
], ViajesModule);
//# sourceMappingURL=viajes.module.js.map