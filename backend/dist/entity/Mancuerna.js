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
exports.Mancuerna = void 0;
const typeorm_1 = require("typeorm");
const MancTanq_1 = require("./MancTanq");
const Dolly_1 = require("./Dolly");
const Operador_1 = require("./Operador");
const Tracto_1 = require("./Tracto");
const Viaje_1 = require("./Viaje");
let Mancuerna = class Mancuerna {
    mncId;
    trPlc;
    dollyId;
    opCed;
    mncNom;
    npmcDesc;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    mancTanqs;
    dolly;
    opCed2;
    trPlc2;
    viajes;
};
exports.Mancuerna = Mancuerna;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "mnc_id" }),
    __metadata("design:type", Number)
], Mancuerna.prototype, "mncId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tr_plc", length: 60 }),
    __metadata("design:type", String)
], Mancuerna.prototype, "trPlc", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "dolly_id", length: 30 }),
    __metadata("design:type", String)
], Mancuerna.prototype, "dollyId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "op_ced", nullable: true, length: 30 }),
    __metadata("design:type", Object)
], Mancuerna.prototype, "opCed", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "mnc_nom", length: 60 }),
    __metadata("design:type", String)
], Mancuerna.prototype, "mncNom", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "npmc_desc", length: 60 }),
    __metadata("design:type", String)
], Mancuerna.prototype, "npmcDesc", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "status" }),
    __metadata("design:type", Number)
], Mancuerna.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "created_at", nullable: true }),
    __metadata("design:type", Object)
], Mancuerna.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "updated_at", nullable: true }),
    __metadata("design:type", Object)
], Mancuerna.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Mancuerna.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MancTanq_1.MancTanq, (mancTanq) => mancTanq.mnc),
    __metadata("design:type", Array)
], Mancuerna.prototype, "mancTanqs", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Dolly_1.Dolly, (dolly) => dolly.mancuernas, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "dolly_id", referencedColumnName: "dollyId" }]),
    __metadata("design:type", Dolly_1.Dolly)
], Mancuerna.prototype, "dolly", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Operador_1.Operador, (operador) => operador.mancuernas, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "op_ced", referencedColumnName: "opCed" }]),
    __metadata("design:type", Operador_1.Operador)
], Mancuerna.prototype, "opCed2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Tracto_1.Tracto, (tracto) => tracto.mancuernas, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "tr_plc", referencedColumnName: "trPlc" }]),
    __metadata("design:type", Tracto_1.Tracto)
], Mancuerna.prototype, "trPlc2", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Viaje_1.Viaje, (viaje) => viaje.mnc),
    __metadata("design:type", Array)
], Mancuerna.prototype, "viajes", void 0);
exports.Mancuerna = Mancuerna = __decorate([
    (0, typeorm_1.Index)("relationship_3_fk", ["dollyId"], {}),
    (0, typeorm_1.Index)("pk_mancuerna", ["mncId"], { unique: true }),
    (0, typeorm_1.Index)("mancuerna_pk", ["mncId"], { unique: true }),
    (0, typeorm_1.Index)("relationship_43_fk", ["opCed"], {}),
    (0, typeorm_1.Index)("relationship_1_fk", ["trPlc"], {}),
    (0, typeorm_1.Entity)("mancuerna", { schema: "public" })
], Mancuerna);
//# sourceMappingURL=Mancuerna.js.map