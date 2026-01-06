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
exports.DocDescarga = void 0;
const typeorm_1 = require("typeorm");
const Descarga_1 = require("./Descarga");
let DocDescarga = class DocDescarga {
    descargaId;
    docDescId;
    docDescNombre;
    docDescUrl;
    tipoId;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    descarga;
};
exports.DocDescarga = DocDescarga;
__decorate([
    (0, typeorm_1.Column)("integer", { name: "descarga_id" }),
    __metadata("design:type", Number)
], DocDescarga.prototype, "descargaId", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "doc_desc_id" }),
    __metadata("design:type", Number)
], DocDescarga.prototype, "docDescId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "doc_desc_nombre", length: 60 }),
    __metadata("design:type", String)
], DocDescarga.prototype, "docDescNombre", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "doc_desc_url", length: 255 }),
    __metadata("design:type", String)
], DocDescarga.prototype, "docDescUrl", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "tipo_id" }),
    __metadata("design:type", Number)
], DocDescarga.prototype, "tipoId", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "status" }),
    __metadata("design:type", Boolean)
], DocDescarga.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "created_at" }),
    __metadata("design:type", String)
], DocDescarga.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "updated_at", nullable: true }),
    __metadata("design:type", Object)
], DocDescarga.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], DocDescarga.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Descarga_1.Descarga, (descarga) => descarga.docDescargas, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "descarga_id", referencedColumnName: "descargaId" }]),
    __metadata("design:type", Descarga_1.Descarga)
], DocDescarga.prototype, "descarga", void 0);
exports.DocDescarga = DocDescarga = __decorate([
    (0, typeorm_1.Index)("relationship_23_fk", ["descargaId"], {}),
    (0, typeorm_1.Index)("doc_descarga_pk", ["docDescId"], { unique: true }),
    (0, typeorm_1.Index)("pk_doc_descarga", ["docDescId"], { unique: true }),
    (0, typeorm_1.Entity)("doc_descarga", { schema: "public" })
], DocDescarga);
//# sourceMappingURL=DocDescarga.js.map