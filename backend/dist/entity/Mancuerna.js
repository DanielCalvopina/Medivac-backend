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
const MancOp_1 = require("./MancOp");
const MancTanq_1 = require("./MancTanq");
const Dolly_1 = require("./Dolly");
const Tracto_1 = require("./Tracto");
const Viaje_1 = require("./Viaje");
let Mancuerna = class Mancuerna {
    mncId;
    trPlc;
    dollyId;
    mncNom;
    npmcDesc;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    mancOps;
    mancTanqs;
    dolly;
    tracto;
    viajes;
};
exports.Mancuerna = Mancuerna;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "mnc_id" }),
    __metadata("design:type", Number)
], Mancuerna.prototype, "mncId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tr_plc", length: 60, nullable: true }),
    __metadata("design:type", Object)
], Mancuerna.prototype, "trPlc", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "dolly_id", length: 30, nullable: true }),
    __metadata("design:type", Object)
], Mancuerna.prototype, "dollyId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "mnc_nom", length: 60, nullable: true }),
    __metadata("design:type", Object)
], Mancuerna.prototype, "mncNom", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "npmc_desc", length: 60, nullable: true }),
    __metadata("design:type", Object)
], Mancuerna.prototype, "npmcDesc", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "status", default: 1 }),
    __metadata("design:type", Number)
], Mancuerna.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at", type: 'date' }),
    __metadata("design:type", Date)
], Mancuerna.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at", type: 'date', nullable: true }),
    __metadata("design:type", Object)
], Mancuerna.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: "deleted_at", type: 'date', nullable: true }),
    __metadata("design:type", Object)
], Mancuerna.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MancOp_1.MancOp, (mancOp) => mancOp.mnc),
    __metadata("design:type", Array)
], Mancuerna.prototype, "mancOps", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MancTanq_1.MancTanq, (mancTanq) => mancTanq.mnc),
    __metadata("design:type", Array)
], Mancuerna.prototype, "mancTanqs", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Dolly_1.Dolly, (dolly) => dolly.mancuernas),
    (0, typeorm_1.JoinColumn)([{ name: "dolly_id", referencedColumnName: "dollyId" }]),
    __metadata("design:type", Dolly_1.Dolly)
], Mancuerna.prototype, "dolly", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Tracto_1.Tracto, (tracto) => tracto.mancuernas),
    (0, typeorm_1.JoinColumn)([{ name: "tr_plc", referencedColumnName: "trPlc" }]),
    __metadata("design:type", Tracto_1.Tracto)
], Mancuerna.prototype, "tracto", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Viaje_1.Viaje, (viaje) => viaje.mnc),
    __metadata("design:type", Array)
], Mancuerna.prototype, "viajes", void 0);
exports.Mancuerna = Mancuerna = __decorate([
    (0, typeorm_1.Entity)("mancuerna", { schema: "public" })
], Mancuerna);
//# sourceMappingURL=Mancuerna.js.map