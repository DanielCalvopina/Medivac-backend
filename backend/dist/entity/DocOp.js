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
exports.DocOp = void 0;
const typeorm_1 = require("typeorm");
const Operador_1 = require("./Operador");
let DocOp = class DocOp {
    docOpId;
    opCed;
    docOpName;
    docOpUrl;
    tipoId;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    opCed2;
};
exports.DocOp = DocOp;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "doc_op_id" }),
    __metadata("design:type", Number)
], DocOp.prototype, "docOpId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "op_ced", length: 30 }),
    __metadata("design:type", String)
], DocOp.prototype, "opCed", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "doc_op_name", length: 60 }),
    __metadata("design:type", String)
], DocOp.prototype, "docOpName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "doc_op_url", length: 255 }),
    __metadata("design:type", String)
], DocOp.prototype, "docOpUrl", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "tipo_id" }),
    __metadata("design:type", Number)
], DocOp.prototype, "tipoId", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "status" }),
    __metadata("design:type", Boolean)
], DocOp.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "created_at" }),
    __metadata("design:type", String)
], DocOp.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "updated_at", nullable: true }),
    __metadata("design:type", Object)
], DocOp.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], DocOp.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Operador_1.Operador, (operador) => operador.docOps, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "op_ced", referencedColumnName: "opCed" }]),
    __metadata("design:type", Operador_1.Operador)
], DocOp.prototype, "opCed2", void 0);
exports.DocOp = DocOp = __decorate([
    (0, typeorm_1.Index)("doc_op_pk", ["docOpId"], { unique: true }),
    (0, typeorm_1.Index)("pk_doc_op", ["docOpId"], { unique: true }),
    (0, typeorm_1.Index)("relationship_21_fk", ["opCed"], {}),
    (0, typeorm_1.Entity)("doc_op", { schema: "public" })
], DocOp);
//# sourceMappingURL=DocOp.js.map