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
exports.Operador = void 0;
const typeorm_1 = require("typeorm");
const DocOp_1 = require("./DocOp");
const Grupo_1 = require("./Grupo");
const MancOp_1 = require("./MancOp");
let Operador = class Operador {
    opCed;
    opNombre;
    opApellido;
    opTelefono;
    opCorreo;
    opNumLicencia;
    opFcVencLicencia;
    opFcVencDc3;
    opFcVenCertMed;
    status;
    opTimeToExp;
    createdAt;
    updatedAt;
    deletedAt;
    docOps;
    grupos;
    mancOps;
};
exports.Operador = Operador;
__decorate([
    (0, typeorm_1.Column)("character varying", { primary: true, name: "op_ced", length: 30 }),
    __metadata("design:type", String)
], Operador.prototype, "opCed", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "op_nombre", length: 60 }),
    __metadata("design:type", String)
], Operador.prototype, "opNombre", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "op_apellido", length: 60 }),
    __metadata("design:type", String)
], Operador.prototype, "opApellido", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "op_telefono", length: 60 }),
    __metadata("design:type", String)
], Operador.prototype, "opTelefono", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "op_correo", length: 60 }),
    __metadata("design:type", String)
], Operador.prototype, "opCorreo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "op_num_licencia", length: 60 }),
    __metadata("design:type", String)
], Operador.prototype, "opNumLicencia", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "op_fc_venc_licencia" }),
    __metadata("design:type", Object)
], Operador.prototype, "opFcVencLicencia", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "op_fc_venc_dc3" }),
    __metadata("design:type", Object)
], Operador.prototype, "opFcVencDc3", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "op_fc_ven_cert_med" }),
    __metadata("design:type", Object)
], Operador.prototype, "opFcVenCertMed", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "status", default: true }),
    __metadata("design:type", Boolean)
], Operador.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "op_time_to_exp", nullable: true }),
    __metadata("design:type", Object)
], Operador.prototype, "opTimeToExp", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at", type: 'date' }),
    __metadata("design:type", Date)
], Operador.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at", type: 'date', nullable: true }),
    __metadata("design:type", Object)
], Operador.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: "deleted_at", type: 'date', nullable: true }),
    __metadata("design:type", Object)
], Operador.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DocOp_1.DocOp, (docOp) => docOp.opCed),
    __metadata("design:type", Array)
], Operador.prototype, "docOps", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Grupo_1.Grupo, (grupo) => grupo.opCed),
    __metadata("design:type", Array)
], Operador.prototype, "grupos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MancOp_1.MancOp, (mancOp) => mancOp.opCed),
    __metadata("design:type", Array)
], Operador.prototype, "mancOps", void 0);
exports.Operador = Operador = __decorate([
    (0, typeorm_1.Index)("pk_operador", ["opCed"], { unique: true }),
    (0, typeorm_1.Entity)("operador", { schema: "public" })
], Operador);
//# sourceMappingURL=Operador.js.map