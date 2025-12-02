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
exports.DocFolio = void 0;
const typeorm_1 = require("typeorm");
const Folio_1 = require("./Folio");
let DocFolio = class DocFolio {
    docFolioId;
    folId;
    docFolioName;
    docFolioUrl;
    tipoId;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    fol;
};
exports.DocFolio = DocFolio;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "doc_folio_id" }),
    __metadata("design:type", Number)
], DocFolio.prototype, "docFolioId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "fol_id" }),
    __metadata("design:type", Number)
], DocFolio.prototype, "folId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "doc_folio_name", length: 60 }),
    __metadata("design:type", String)
], DocFolio.prototype, "docFolioName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "doc_folio_url", length: 255 }),
    __metadata("design:type", String)
], DocFolio.prototype, "docFolioUrl", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "tipo_id" }),
    __metadata("design:type", Number)
], DocFolio.prototype, "tipoId", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "status" }),
    __metadata("design:type", Boolean)
], DocFolio.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "created_at" }),
    __metadata("design:type", String)
], DocFolio.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "updated_at", nullable: true }),
    __metadata("design:type", Object)
], DocFolio.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], DocFolio.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Folio_1.Folio, (folio) => folio.docFolios, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "fol_id", referencedColumnName: "folId" }]),
    __metadata("design:type", Folio_1.Folio)
], DocFolio.prototype, "fol", void 0);
exports.DocFolio = DocFolio = __decorate([
    (0, typeorm_1.Index)("pk_doc_folio", ["docFolioId"], { unique: true }),
    (0, typeorm_1.Index)("doc_folio_pk2", ["docFolioId"], { unique: true }),
    (0, typeorm_1.Index)("relationship_31_fk", ["folId"], {}),
    (0, typeorm_1.Entity)("doc_folio", { schema: "public" })
], DocFolio);
//# sourceMappingURL=DocFolio.js.map