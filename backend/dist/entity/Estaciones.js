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
exports.Estaciones = void 0;
const typeorm_1 = require("typeorm");
const EstacionesFolio_1 = require("./EstacionesFolio");
const EtnsCli_1 = require("./EtnsCli");
let Estaciones = class Estaciones {
    etnsId;
    etnsNumPl;
    ernsNombre;
    etnsNombreCorto;
    etnsDireccion;
    etnsUbicacion;
    etnsCiudad;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    estacionesFolios;
    etnsClis;
};
exports.Estaciones = Estaciones;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "etns_id" }),
    __metadata("design:type", Number)
], Estaciones.prototype, "etnsId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "etns_num_pl", length: 255 }),
    __metadata("design:type", String)
], Estaciones.prototype, "etnsNumPl", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "erns_nombre", length: 255 }),
    __metadata("design:type", String)
], Estaciones.prototype, "ernsNombre", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "etns_nombre_corto", length: 255 }),
    __metadata("design:type", String)
], Estaciones.prototype, "etnsNombreCorto", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "etns_direccion", length: 1050 }),
    __metadata("design:type", String)
], Estaciones.prototype, "etnsDireccion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "etns_ubicacion", length: 255 }),
    __metadata("design:type", String)
], Estaciones.prototype, "etnsUbicacion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "etns_ciudad", nullable: true, length: 255 }),
    __metadata("design:type", Object)
], Estaciones.prototype, "etnsCiudad", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "status", default: true }),
    __metadata("design:type", Boolean)
], Estaciones.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at", type: 'date' }),
    __metadata("design:type", Date)
], Estaciones.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at", type: 'date', nullable: true }),
    __metadata("design:type", Object)
], Estaciones.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: "deleted_at", type: 'date', nullable: true }),
    __metadata("design:type", Object)
], Estaciones.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EstacionesFolio_1.EstacionesFolio, (estacionesFolio) => estacionesFolio.etns),
    __metadata("design:type", Array)
], Estaciones.prototype, "estacionesFolios", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EtnsCli_1.EtnsCli, (etnsCli) => etnsCli.etns),
    __metadata("design:type", Array)
], Estaciones.prototype, "etnsClis", void 0);
exports.Estaciones = Estaciones = __decorate([
    (0, typeorm_1.Entity)("estaciones", { schema: "public" })
], Estaciones);
//# sourceMappingURL=Estaciones.js.map