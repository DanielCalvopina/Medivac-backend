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
exports.Folio = void 0;
const typeorm_1 = require("typeorm");
const Carga_1 = require("./Carga");
const Descarga_1 = require("./Descarga");
const DocFolio_1 = require("./DocFolio");
const EstacionesFolio_1 = require("./EstacionesFolio");
const Producto_1 = require("./Producto");
const Viaje_1 = require("./Viaje");
let Folio = class Folio {
    folId;
    prdId;
    viajeId;
    folCod;
    folName;
    folDesc;
    folOv;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    tnqNumse;
    cargas;
    descargas;
    docFolios;
    estacionesFolios;
    prd;
    viaje;
};
exports.Folio = Folio;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "fol_id" }),
    __metadata("design:type", Number)
], Folio.prototype, "folId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "prd_id" }),
    __metadata("design:type", Number)
], Folio.prototype, "prdId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "viaje_id" }),
    __metadata("design:type", Number)
], Folio.prototype, "viajeId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "fol_cod", length: 255 }),
    __metadata("design:type", String)
], Folio.prototype, "folCod", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "fol_name", length: 255 }),
    __metadata("design:type", String)
], Folio.prototype, "folName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "fol_desc", length: 255 }),
    __metadata("design:type", String)
], Folio.prototype, "folDesc", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "fol_ov", length: 255 }),
    __metadata("design:type", String)
], Folio.prototype, "folOv", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "status" }),
    __metadata("design:type", Boolean)
], Folio.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "created_at", nullable: true }),
    __metadata("design:type", Object)
], Folio.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "updated_at", nullable: true }),
    __metadata("design:type", Object)
], Folio.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Folio.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tnq_numse", length: 255 }),
    __metadata("design:type", String)
], Folio.prototype, "tnqNumse", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Carga_1.Carga, (carga) => carga.fol),
    __metadata("design:type", Array)
], Folio.prototype, "cargas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Descarga_1.Descarga, (descarga) => descarga.fol),
    __metadata("design:type", Array)
], Folio.prototype, "descargas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DocFolio_1.DocFolio, (docFolio) => docFolio.fol),
    __metadata("design:type", Array)
], Folio.prototype, "docFolios", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EstacionesFolio_1.EstacionesFolio, (estacionesFolio) => estacionesFolio.fol),
    __metadata("design:type", Array)
], Folio.prototype, "estacionesFolios", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Producto_1.Producto, (producto) => producto.folios, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "prd_id", referencedColumnName: "prdId" }]),
    __metadata("design:type", Producto_1.Producto)
], Folio.prototype, "prd", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Viaje_1.Viaje, (viaje) => viaje.folios, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "viaje_id", referencedColumnName: "viajeId" }]),
    __metadata("design:type", Viaje_1.Viaje)
], Folio.prototype, "viaje", void 0);
exports.Folio = Folio = __decorate([
    (0, typeorm_1.Index)("pk_folio", ["folId"], { unique: true }),
    (0, typeorm_1.Index)("detalle_folio_pk", ["folId"], { unique: true }),
    (0, typeorm_1.Index)("relationship_7_fk", ["prdId"], {}),
    (0, typeorm_1.Index)("relationship_8_fk", ["viajeId"], {}),
    (0, typeorm_1.Entity)("folio", { schema: "public" })
], Folio);
//# sourceMappingURL=Folio.js.map