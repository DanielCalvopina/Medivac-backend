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
exports.RtFlId = void 0;
const typeorm_1 = require("typeorm");
const Rutas_1 = require("./Rutas");
const Viaje_1 = require("./Viaje");
let RtFlId = class RtFlId {
    rtsVijId;
    viajeId;
    etnsId2;
    etnsId;
    viaje;
};
exports.RtFlId = RtFlId;
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "rts_vij_id" }),
    __metadata("design:type", Number)
], RtFlId.prototype, "rtsVijId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "viaje_id" }),
    __metadata("design:type", Number)
], RtFlId.prototype, "viajeId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "etns_id2" }),
    __metadata("design:type", Number)
], RtFlId.prototype, "etnsId2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Rutas_1.Rutas, (rutas) => rutas.rtFlS, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "etns_id2", referencedColumnName: "etnsId2" }]),
    __metadata("design:type", Rutas_1.Rutas)
], RtFlId.prototype, "etnsId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Viaje_1.Viaje, (viaje) => viaje.rtFlS, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "viaje_id", referencedColumnName: "viajeId" }]),
    __metadata("design:type", Viaje_1.Viaje)
], RtFlId.prototype, "viaje", void 0);
exports.RtFlId = RtFlId = __decorate([
    (0, typeorm_1.Index)("relationship_28_fk", ["etnsId2"], {}),
    (0, typeorm_1.Index)("rt_fl_id_pk", ["rtsVijId"], { unique: true }),
    (0, typeorm_1.Index)("pk_rt_fl_id", ["rtsVijId"], { unique: true }),
    (0, typeorm_1.Index)("relationship_27_fk", ["viajeId"], {}),
    (0, typeorm_1.Entity)("rt_fl_id", { schema: "public" })
], RtFlId);
//# sourceMappingURL=RtFlId.js.map