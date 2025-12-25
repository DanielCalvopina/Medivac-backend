"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalViaje = void 0;
const typeorm_1 = require("typeorm");
const Terminal_1 = require("./Terminal");
const Viaje_1 = require("./Viaje");
let TerminalViaje = class TerminalViaje {
    etnsId6;
    viajeId;
    trmId;
    trm;
    viaje;
};
exports.TerminalViaje = TerminalViaje;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "etns_id6" }),
    __metadata("design:type", Number)
], TerminalViaje.prototype, "etnsId6", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "viaje_id" }),
    __metadata("design:type", Number)
], TerminalViaje.prototype, "viajeId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "trm_id" }),
    __metadata("design:type", Number)
], TerminalViaje.prototype, "trmId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Terminal_1.Terminal, (terminal) => terminal.terminalViajes),
    (0, typeorm_1.JoinColumn)([{ name: "trm_id", referencedColumnName: "trmId" }]),
    __metadata("design:type", Terminal_1.Terminal)
], TerminalViaje.prototype, "trm", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Viaje_1.Viaje, (viaje) => viaje.terminalViajes),
    (0, typeorm_1.JoinColumn)([{ name: "viaje_id", referencedColumnName: "viajeId" }]),
    __metadata("design:type", Viaje_1.Viaje)
], TerminalViaje.prototype, "viaje", void 0);
exports.TerminalViaje = TerminalViaje = __decorate([
    (0, typeorm_1.Entity)("terminal_viaje", { schema: "public" })
], TerminalViaje);
//# sourceMappingURL=TerminalViaje.js.map