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
exports.Tanque = void 0;
const typeorm_1 = require("typeorm");
const DocTanque_1 = require("./DocTanque");
const MancTanq_1 = require("./MancTanq");
let Tanque = class Tanque {
    tnqId;
    tnqPlacas;
    tnqEco;
    tnqEcoVal;
    tnqNumSer;
    tnqMrc;
    tnqMod;
    tnqColor;
    tnqNmCrc;
    tnqNmDblArt;
    tnqClcDblArt;
    tnqNoOfiCre;
    tnqPermisoSct;
    tnqCapacidad;
    tnqDesc;
    tnqPolizaSeguro;
    tnqExpPoliza;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    docTanques;
    mancTanqs;
};
exports.Tanque = Tanque;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "tnq_id" }),
    __metadata("design:type", Number)
], Tanque.prototype, "tnqId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tnq_placas", length: 60 }),
    __metadata("design:type", String)
], Tanque.prototype, "tnqPlacas", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tnq_eco", length: 60 }),
    __metadata("design:type", String)
], Tanque.prototype, "tnqEco", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tnq_eco_val", length: 60 }),
    __metadata("design:type", String)
], Tanque.prototype, "tnqEcoVal", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tnq_num_ser", length: 60 }),
    __metadata("design:type", String)
], Tanque.prototype, "tnqNumSer", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tnq_mrc", length: 60 }),
    __metadata("design:type", String)
], Tanque.prototype, "tnqMrc", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tnq_mod", length: 60 }),
    __metadata("design:type", String)
], Tanque.prototype, "tnqMod", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tnq_color", length: 60 }),
    __metadata("design:type", String)
], Tanque.prototype, "tnqColor", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tnq_nm_crc", length: 60 }),
    __metadata("design:type", String)
], Tanque.prototype, "tnqNmCrc", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tnq_nm_dbl_art", length: 60 }),
    __metadata("design:type", String)
], Tanque.prototype, "tnqNmDblArt", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tnq_clc_dbl_art", length: 60 }),
    __metadata("design:type", String)
], Tanque.prototype, "tnqClcDblArt", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tnq_no_ofi_cre", length: 60 }),
    __metadata("design:type", String)
], Tanque.prototype, "tnqNoOfiCre", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tnq_permiso_sct", length: 60 }),
    __metadata("design:type", String)
], Tanque.prototype, "tnqPermisoSct", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tnq_capacidad", length: 60 }),
    __metadata("design:type", String)
], Tanque.prototype, "tnqCapacidad", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tnq_desc", length: 255 }),
    __metadata("design:type", String)
], Tanque.prototype, "tnqDesc", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tnq_poliza_seguro", length: 60 }),
    __metadata("design:type", String)
], Tanque.prototype, "tnqPolizaSeguro", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "tnq_exp_poliza" }),
    __metadata("design:type", String)
], Tanque.prototype, "tnqExpPoliza", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "status", default: 1 }),
    __metadata("design:type", Number)
], Tanque.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at", type: "date" }),
    __metadata("design:type", Date)
], Tanque.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at", type: "date", nullable: true }),
    __metadata("design:type", Object)
], Tanque.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: "deleted_at", type: "date", nullable: true }),
    __metadata("design:type", Object)
], Tanque.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DocTanque_1.DocTanque, (docTanque) => docTanque.tnq),
    __metadata("design:type", Array)
], Tanque.prototype, "docTanques", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MancTanq_1.MancTanq, (mancTanq) => mancTanq.tnq),
    __metadata("design:type", Array)
], Tanque.prototype, "mancTanqs", void 0);
exports.Tanque = Tanque = __decorate([
    (0, typeorm_1.Entity)("tanque", { schema: "public" })
], Tanque);
//# sourceMappingURL=Tanque.js.map