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
exports.Tracto = void 0;
const typeorm_1 = require("typeorm");
const DocTracto_1 = require("./DocTracto");
const Mancuerna_1 = require("./Mancuerna");
let Tracto = class Tracto {
    trPlc;
    trEco;
    trEcoVal;
    trMnSr;
    trMrc;
    trMd;
    trColor;
    trNmMotor;
    trNmTrjCrc;
    trNmDblArt;
    trClcDblArt;
    trOfCer;
    trPermisoSct;
    trPeso;
    trDesc;
    trPolizaSeguro;
    trExpPolizaSeguro;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    docTractos;
    mancuernas;
};
exports.Tracto = Tracto;
__decorate([
    (0, typeorm_1.PrimaryColumn)("character varying", { name: "tr_plc", length: 60 }),
    __metadata("design:type", String)
], Tracto.prototype, "trPlc", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tr_eco", length: 60 }),
    __metadata("design:type", String)
], Tracto.prototype, "trEco", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tr_eco_val", length: 60 }),
    __metadata("design:type", String)
], Tracto.prototype, "trEcoVal", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tr_mn_sr", length: 60 }),
    __metadata("design:type", String)
], Tracto.prototype, "trMnSr", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tr_mrc", length: 60 }),
    __metadata("design:type", String)
], Tracto.prototype, "trMrc", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tr_md", length: 60 }),
    __metadata("design:type", String)
], Tracto.prototype, "trMd", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tr_color", length: 60 }),
    __metadata("design:type", String)
], Tracto.prototype, "trColor", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tr_nm_motor", length: 60 }),
    __metadata("design:type", String)
], Tracto.prototype, "trNmMotor", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tr_nm_trj_crc", length: 60 }),
    __metadata("design:type", String)
], Tracto.prototype, "trNmTrjCrc", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tr_nm_dbl_art", length: 60 }),
    __metadata("design:type", String)
], Tracto.prototype, "trNmDblArt", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tr_clc_dbl_art", length: 60 }),
    __metadata("design:type", String)
], Tracto.prototype, "trClcDblArt", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tr_of_cer", length: 60 }),
    __metadata("design:type", String)
], Tracto.prototype, "trOfCer", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tr_permiso_sct", length: 60 }),
    __metadata("design:type", String)
], Tracto.prototype, "trPermisoSct", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tr_peso", length: 60 }),
    __metadata("design:type", String)
], Tracto.prototype, "trPeso", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tr_desc", length: 60 }),
    __metadata("design:type", String)
], Tracto.prototype, "trDesc", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tr_poliza_seguro", length: 60 }),
    __metadata("design:type", String)
], Tracto.prototype, "trPolizaSeguro", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "tr_exp_poliza_seguro" }),
    __metadata("design:type", String)
], Tracto.prototype, "trExpPolizaSeguro", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "status", default: 1 }),
    __metadata("design:type", Number)
], Tracto.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at", type: "date" }),
    __metadata("design:type", Date)
], Tracto.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at", type: "date", nullable: true }),
    __metadata("design:type", Object)
], Tracto.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: "deleted_at", type: "date", nullable: true }),
    __metadata("design:type", Object)
], Tracto.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DocTracto_1.DocTracto, (docTracto) => docTracto.trPlc2),
    __metadata("design:type", Array)
], Tracto.prototype, "docTractos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Mancuerna_1.Mancuerna, (mancuerna) => mancuerna.tracto),
    __metadata("design:type", Array)
], Tracto.prototype, "mancuernas", void 0);
exports.Tracto = Tracto = __decorate([
    (0, typeorm_1.Entity)("tracto", { schema: "public" })
], Tracto);
//# sourceMappingURL=Tracto.js.map