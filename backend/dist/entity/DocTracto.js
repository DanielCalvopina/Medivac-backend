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
exports.DocTracto = void 0;
const typeorm_1 = require("typeorm");
const Tracto_1 = require("./Tracto");
let DocTracto = class DocTracto {
    docTractoId;
    trPlc;
    docTractoName;
    docCarlUrl;
    tipoId;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    trPlc2;
};
exports.DocTracto = DocTracto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "doc_tracto_id" }),
    __metadata("design:type", Number)
], DocTracto.prototype, "docTractoId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tr_plc", length: 60 }),
    __metadata("design:type", String)
], DocTracto.prototype, "trPlc", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "doc_tracto_name", length: 60 }),
    __metadata("design:type", String)
], DocTracto.prototype, "docTractoName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "doc_carl_url", length: 255 }),
    __metadata("design:type", String)
], DocTracto.prototype, "docCarlUrl", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "tipo_id" }),
    __metadata("design:type", Number)
], DocTracto.prototype, "tipoId", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "status" }),
    __metadata("design:type", Boolean)
], DocTracto.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "created_at" }),
    __metadata("design:type", String)
], DocTracto.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "updated_at", nullable: true }),
    __metadata("design:type", Object)
], DocTracto.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], DocTracto.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Tracto_1.Tracto, (tracto) => tracto.docTractos, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "tr_plc", referencedColumnName: "trPlc" }]),
    __metadata("design:type", Tracto_1.Tracto)
], DocTracto.prototype, "trPlc2", void 0);
exports.DocTracto = DocTracto = __decorate([
    (0, typeorm_1.Index)("doc_tracto_pk", ["docTractoId"], { unique: true }),
    (0, typeorm_1.Index)("pk_doc_tracto", ["docTractoId"], { unique: true }),
    (0, typeorm_1.Index)("relationship_37_fk", ["trPlc"], {}),
    (0, typeorm_1.Entity)("doc_tracto", { schema: "public" })
], DocTracto);
//# sourceMappingURL=DocTracto.js.map