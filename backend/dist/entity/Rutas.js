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
exports.Rutas = void 0;
const typeorm_1 = require("typeorm");
const RtFlId_1 = require("./RtFlId");
let Rutas = class Rutas {
    etnsId2;
    rtsNombre;
    rtsDesc;
    rtsMpas;
    rtsOrigen;
    rtsDestino;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    rtFlS;
};
exports.Rutas = Rutas;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "etns_id2" }),
    __metadata("design:type", Number)
], Rutas.prototype, "etnsId2", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "rts_nombre", length: 60 }),
    __metadata("design:type", String)
], Rutas.prototype, "rtsNombre", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "rts_desc", length: 60 }),
    __metadata("design:type", String)
], Rutas.prototype, "rtsDesc", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "rts_mpas", length: 552 }),
    __metadata("design:type", Object)
], Rutas.prototype, "rtsMpas", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "rts_origen", length: 260 }),
    __metadata("design:type", String)
], Rutas.prototype, "rtsOrigen", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "rts_destino", length: 260 }),
    __metadata("design:type", String)
], Rutas.prototype, "rtsDestino", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "status" }),
    __metadata("design:type", Boolean)
], Rutas.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "created_at" }),
    __metadata("design:type", String)
], Rutas.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "updated_at", nullable: true }),
    __metadata("design:type", Object)
], Rutas.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Rutas.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RtFlId_1.RtFlId, (rtFlId) => rtFlId.etnsId),
    __metadata("design:type", Array)
], Rutas.prototype, "rtFlS", void 0);
exports.Rutas = Rutas = __decorate([
    (0, typeorm_1.Index)("rutas_pk", ["etnsId2"], { unique: true }),
    (0, typeorm_1.Index)("pk_rutas", ["etnsId2"], { unique: true }),
    (0, typeorm_1.Entity)("rutas", { schema: "public" })
], Rutas);
//# sourceMappingURL=Rutas.js.map