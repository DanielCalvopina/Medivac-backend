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
exports.Dolly = void 0;
const typeorm_1 = require("typeorm");
const DocDolly_1 = require("./DocDolly");
const Mancuerna_1 = require("./Mancuerna");
let Dolly = class Dolly {
    dollyId;
    dollyNumSer_4Ul;
    dollyNumSer;
    dollyMr;
    dollyMod;
    dollyColor;
    dollyDesc;
    dollyPolizaSeguro;
    dollyExpPoliza;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    docDollies;
    mancuernas;
};
exports.Dolly = Dolly;
__decorate([
    (0, typeorm_1.Column)("character varying", { primary: true, name: "dolly_id", length: 30 }),
    __metadata("design:type", String)
], Dolly.prototype, "dollyId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "dolly_num_ser_4_ul", length: 30 }),
    __metadata("design:type", String)
], Dolly.prototype, "dollyNumSer_4Ul", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "dolly_num_ser", length: 30 }),
    __metadata("design:type", String)
], Dolly.prototype, "dollyNumSer", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "dolly_mr", length: 30 }),
    __metadata("design:type", String)
], Dolly.prototype, "dollyMr", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "dolly_mod", length: 30 }),
    __metadata("design:type", String)
], Dolly.prototype, "dollyMod", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "dolly_color", length: 30 }),
    __metadata("design:type", String)
], Dolly.prototype, "dollyColor", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "dolly_desc", length: 255 }),
    __metadata("design:type", String)
], Dolly.prototype, "dollyDesc", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "dolly_poliza_seguro", length: 60, nullable: true }),
    __metadata("design:type", Object)
], Dolly.prototype, "dollyPolizaSeguro", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "dolly_exp_poliza", nullable: true }),
    __metadata("design:type", Object)
], Dolly.prototype, "dollyExpPoliza", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "status" }),
    __metadata("design:type", Number)
], Dolly.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "created_at" }),
    __metadata("design:type", String)
], Dolly.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "updated_at", nullable: true }),
    __metadata("design:type", Object)
], Dolly.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Dolly.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DocDolly_1.DocDolly, (docDolly) => docDolly.dolly),
    __metadata("design:type", Array)
], Dolly.prototype, "docDollies", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Mancuerna_1.Mancuerna, (mancuerna) => mancuerna.dolly),
    __metadata("design:type", Array)
], Dolly.prototype, "mancuernas", void 0);
exports.Dolly = Dolly = __decorate([
    (0, typeorm_1.Index)("pk_dolly", ["dollyId"], { unique: true }),
    (0, typeorm_1.Index)("dolly_pk", ["dollyId"], { unique: true }),
    (0, typeorm_1.Entity)("dolly", { schema: "public" })
], Dolly);
//# sourceMappingURL=Dolly.js.map