"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnidadesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const unidades_service_1 = require("../service/unidades.service");
const unidades_controller_1 = require("../controller/unidades.controller");
const Tracto_1 = require("../entity/Tracto");
const Tanque_1 = require("../entity/Tanque");
const Dolly_1 = require("../entity/Dolly");
let UnidadesModule = class UnidadesModule {
};
exports.UnidadesModule = UnidadesModule;
exports.UnidadesModule = UnidadesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Tracto_1.Tracto, Tanque_1.Tanque, Dolly_1.Dolly])],
        controllers: [unidades_controller_1.UnidadesController],
        providers: [unidades_service_1.UnidadesService],
        exports: [unidades_service_1.UnidadesService],
    })
], UnidadesModule);
//# sourceMappingURL=unidades.module.js.map