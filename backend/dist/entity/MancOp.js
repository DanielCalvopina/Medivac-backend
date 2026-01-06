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
exports.MancOp = void 0;
const typeorm_1 = require("typeorm");
const Mancuerna_1 = require("./Mancuerna");
const Operador_1 = require("./Operador");
let MancOp = class MancOp {
    mancOpId;
    mncId;
    opCed;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    mnc;
    operador;
};
exports.MancOp = MancOp;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "manc_op_id" }),
    __metadata("design:type", Number)
], MancOp.prototype, "mancOpId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "mnc_id" }),
    __metadata("design:type", Number)
], MancOp.prototype, "mncId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "op_ced", length: 30 }),
    __metadata("design:type", String)
], MancOp.prototype, "opCed", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "status", default: true }),
    __metadata("design:type", Boolean)
], MancOp.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at", type: 'date' }),
    __metadata("design:type", Date)
], MancOp.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at", type: 'date', nullable: true }),
    __metadata("design:type", Object)
], MancOp.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: "deleted_at", type: 'date', nullable: true }),
    __metadata("design:type", Object)
], MancOp.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Mancuerna_1.Mancuerna, (mancuerna) => mancuerna.mancOps),
    (0, typeorm_1.JoinColumn)([{ name: "mnc_id", referencedColumnName: "mncId" }]),
    __metadata("design:type", Mancuerna_1.Mancuerna)
], MancOp.prototype, "mnc", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Operador_1.Operador, (operador) => operador.mancOps),
    (0, typeorm_1.JoinColumn)([{ name: "op_ced", referencedColumnName: "opCed" }]),
    __metadata("design:type", Operador_1.Operador)
], MancOp.prototype, "operador", void 0);
exports.MancOp = MancOp = __decorate([
    (0, typeorm_1.Entity)("manc_op", { schema: "public" })
], MancOp);
//# sourceMappingURL=MancOp.js.map