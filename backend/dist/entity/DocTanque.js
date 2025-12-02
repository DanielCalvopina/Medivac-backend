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
exports.DocTanque = void 0;
const typeorm_1 = require("typeorm");
const Tanque_1 = require("./Tanque");
let DocTanque = class DocTanque {
    docTaqId;
    tnqId;
    docTaqName;
    docTaqUrl;
    tipoId;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    tnq;
};
exports.DocTanque = DocTanque;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "doc_taq_id" }),
    __metadata("design:type", Number)
], DocTanque.prototype, "docTaqId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "tnq_id", nullable: true }),
    __metadata("design:type", Object)
], DocTanque.prototype, "tnqId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "doc_taq_name", length: 255 }),
    __metadata("design:type", String)
], DocTanque.prototype, "docTaqName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "doc_taq_url", length: 255 }),
    __metadata("design:type", String)
], DocTanque.prototype, "docTaqUrl", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "tipo_id" }),
    __metadata("design:type", Number)
], DocTanque.prototype, "tipoId", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "status" }),
    __metadata("design:type", Boolean)
], DocTanque.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "created_at" }),
    __metadata("design:type", String)
], DocTanque.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "updated_at", nullable: true }),
    __metadata("design:type", Object)
], DocTanque.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], DocTanque.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Tanque_1.Tanque, (tanque) => tanque.docTanques, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "tnq_id", referencedColumnName: "tnqId" }]),
    __metadata("design:type", Tanque_1.Tanque)
], DocTanque.prototype, "tnq", void 0);
exports.DocTanque = DocTanque = __decorate([
    (0, typeorm_1.Index)("doc_tanque_pk", ["docTaqId"], { unique: true }),
    (0, typeorm_1.Index)("pk_doc_tanque", ["docTaqId"], { unique: true }),
    (0, typeorm_1.Index)("relationship_26_fk", ["tnqId"], {}),
    (0, typeorm_1.Entity)("doc_tanque", { schema: "public" })
], DocTanque);
//# sourceMappingURL=DocTanque.js.map