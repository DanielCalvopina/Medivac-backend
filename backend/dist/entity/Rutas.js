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
    status;
    rtsMaps;
    rtsOrigen;
    rtsDestino;
    rtsPlusCode;
    rtsLugarManiobra;
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
    (0, typeorm_1.Column)("character varying", { name: "rts_nombre", length: 255 }),
    __metadata("design:type", String)
], Rutas.prototype, "rtsNombre", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "rts_desc", length: 255 }),
    __metadata("design:type", String)
], Rutas.prototype, "rtsDesc", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "status", default: true }),
    __metadata("design:type", Boolean)
], Rutas.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "rts_maps", nullable: true, length: 1050 }),
    __metadata("design:type", Object)
], Rutas.prototype, "rtsMaps", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "rts_origen", nullable: true, length: 255 }),
    __metadata("design:type", Object)
], Rutas.prototype, "rtsOrigen", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "rts_destino", nullable: true, length: 255 }),
    __metadata("design:type", Object)
], Rutas.prototype, "rtsDestino", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'rts_plus_code', type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", Object)
], Rutas.prototype, "rtsPlusCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'rts_lugar_maniobra', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", Object)
], Rutas.prototype, "rtsLugarManiobra", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at", type: 'date' }),
    __metadata("design:type", Date)
], Rutas.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at", type: 'date', nullable: true }),
    __metadata("design:type", Object)
], Rutas.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: "deleted_at", type: 'date', nullable: true }),
    __metadata("design:type", Object)
], Rutas.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RtFlId_1.RtFlId, (rtFlId) => rtFlId.ruta),
    __metadata("design:type", Array)
], Rutas.prototype, "rtFlS", void 0);
exports.Rutas = Rutas = __decorate([
    (0, typeorm_1.Entity)("rutas", { schema: "public" })
], Rutas);
//# sourceMappingURL=Rutas.js.map