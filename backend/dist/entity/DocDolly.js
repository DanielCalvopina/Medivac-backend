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
exports.DocDolly = void 0;
const typeorm_1 = require("typeorm");
const Dolly_1 = require("./Dolly");
let DocDolly = class DocDolly {
    docDollyId;
    dollyId;
    docDollyName;
    docUrl;
    tipoId;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    dolly;
};
exports.DocDolly = DocDolly;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "doc_dolly_id" }),
    __metadata("design:type", Number)
], DocDolly.prototype, "docDollyId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "dolly_id", length: 30 }),
    __metadata("design:type", String)
], DocDolly.prototype, "dollyId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "doc_dolly_name", length: 255 }),
    __metadata("design:type", String)
], DocDolly.prototype, "docDollyName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "doc_url", length: 255 }),
    __metadata("design:type", String)
], DocDolly.prototype, "docUrl", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "tipo_id" }),
    __metadata("design:type", Number)
], DocDolly.prototype, "tipoId", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "status" }),
    __metadata("design:type", Boolean)
], DocDolly.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "created_at" }),
    __metadata("design:type", String)
], DocDolly.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "updated_at", nullable: true }),
    __metadata("design:type", Object)
], DocDolly.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], DocDolly.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Dolly_1.Dolly, (dolly) => dolly.docDollies, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "dolly_id", referencedColumnName: "dollyId" }]),
    __metadata("design:type", Dolly_1.Dolly)
], DocDolly.prototype, "dolly", void 0);
exports.DocDolly = DocDolly = __decorate([
    (0, typeorm_1.Index)("pk_doc_dolly", ["docDollyId"], { unique: true }),
    (0, typeorm_1.Index)("doc_dolly_pk", ["docDollyId"], { unique: true }),
    (0, typeorm_1.Index)("relationship_25_fk", ["dollyId"], {}),
    (0, typeorm_1.Entity)("doc_dolly", { schema: "public" })
], DocDolly);
//# sourceMappingURL=DocDolly.js.map