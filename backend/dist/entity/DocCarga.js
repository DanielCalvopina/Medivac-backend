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
exports.DocCarga = void 0;
const typeorm_1 = require("typeorm");
const Carga_1 = require("./Carga");
let DocCarga = class DocCarga {
    docCarId;
    cargaId;
    docCarName;
    docCarUrl;
    tipoId;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    carga;
};
exports.DocCarga = DocCarga;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "doc_car_id" }),
    __metadata("design:type", Number)
], DocCarga.prototype, "docCarId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "carga_id" }),
    __metadata("design:type", Number)
], DocCarga.prototype, "cargaId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "doc_car_name", length: 60 }),
    __metadata("design:type", String)
], DocCarga.prototype, "docCarName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "doc_car_url", length: 255 }),
    __metadata("design:type", String)
], DocCarga.prototype, "docCarUrl", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "tipo_id" }),
    __metadata("design:type", Number)
], DocCarga.prototype, "tipoId", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "status" }),
    __metadata("design:type", Boolean)
], DocCarga.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "created_at" }),
    __metadata("design:type", String)
], DocCarga.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "updated_at", nullable: true }),
    __metadata("design:type", Object)
], DocCarga.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], DocCarga.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Carga_1.Carga, (carga) => carga.docCargas, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "carga_id", referencedColumnName: "cargaId" }]),
    __metadata("design:type", Carga_1.Carga)
], DocCarga.prototype, "carga", void 0);
exports.DocCarga = DocCarga = __decorate([
    (0, typeorm_1.Index)("relationship_22_fk", ["cargaId"], {}),
    (0, typeorm_1.Index)("doc_carga_pk", ["docCarId"], { unique: true }),
    (0, typeorm_1.Index)("pk_doc_carga", ["docCarId"], { unique: true }),
    (0, typeorm_1.Entity)("doc_carga", { schema: "public" })
], DocCarga);
//# sourceMappingURL=DocCarga.js.map