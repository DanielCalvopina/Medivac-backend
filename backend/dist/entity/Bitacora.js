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
exports.Bitacora = void 0;
const typeorm_1 = require("typeorm");
const Viaje_1 = require("./Viaje");
let Bitacora = class Bitacora {
    bitId;
    bitFecIni;
    bitFecFin;
    bitTmpTotal;
    bitDesc;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    viaje;
};
exports.Bitacora = Bitacora;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "bit_id" }),
    __metadata("design:type", Number)
], Bitacora.prototype, "bitId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "bit_fec_ini" }),
    __metadata("design:type", Date)
], Bitacora.prototype, "bitFecIni", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "bit_fec_fin" }),
    __metadata("design:type", Date)
], Bitacora.prototype, "bitFecFin", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "bit_tmp_total" }),
    __metadata("design:type", Number)
], Bitacora.prototype, "bitTmpTotal", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "bit_desc", length: 255 }),
    __metadata("design:type", String)
], Bitacora.prototype, "bitDesc", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "status" }),
    __metadata("design:type", Number)
], Bitacora.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "created_at" }),
    __metadata("design:type", Date)
], Bitacora.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "updated_at", nullable: true }),
    __metadata("design:type", Object)
], Bitacora.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Bitacora.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Viaje_1.Viaje, (viaje) => viaje.bitacoras, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "viaje_id", referencedColumnName: "viajeId" }]),
    __metadata("design:type", Viaje_1.Viaje)
], Bitacora.prototype, "viaje", void 0);
exports.Bitacora = Bitacora = __decorate([
    (0, typeorm_1.Index)("pk_bitacora", ["bitId"], { unique: true }),
    (0, typeorm_1.Index)("bitacora_pk", ["bitId"], { unique: true }),
    (0, typeorm_1.Entity)("bitacora", { schema: "public" })
], Bitacora);
//# sourceMappingURL=Bitacora.js.map