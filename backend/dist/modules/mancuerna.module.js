"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MancuernaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Mancuerna_1 = require("../entity/Mancuerna");
const Tracto_1 = require("../entity/Tracto");
const Tanque_1 = require("../entity/Tanque");
const Dolly_1 = require("../entity/Dolly");
const Operador_1 = require("../entity/Operador");
const MancTanq_1 = require("../entity/MancTanq");
const MancOp_1 = require("../entity/MancOp");
const mancuerna_service_1 = require("../service/mancuerna.service");
const mancuerna_controller_1 = require("../controller/mancuerna.controller");
let MancuernaModule = class MancuernaModule {
};
exports.MancuernaModule = MancuernaModule;
exports.MancuernaModule = MancuernaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                Mancuerna_1.Mancuerna,
                Tracto_1.Tracto,
                Tanque_1.Tanque,
                Dolly_1.Dolly,
                Operador_1.Operador,
                MancOp_1.MancOp,
                MancTanq_1.MancTanq,
            ]),
        ],
        providers: [mancuerna_service_1.MancuernaService],
        controllers: [mancuerna_controller_1.MancuernaController],
        exports: [mancuerna_service_1.MancuernaService],
    })
], MancuernaModule);
//# sourceMappingURL=mancuerna.module.js.map