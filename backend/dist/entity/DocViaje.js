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
exports.DocViaje = void 0;
const typeorm_1 = require("typeorm");
const Viaje_1 = require("./Viaje");
let DocViaje = class DocViaje {
    docViajeId;
    viajeId;
    docViajeName;
    docUrl;
    tipoId;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    viaje;
};
exports.DocViaje = DocViaje;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "doc_viaje_id" }),
    __metadata("design:type", Number)
], DocViaje.prototype, "docViajeId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "viaje_id" }),
    __metadata("design:type", Number)
], DocViaje.prototype, "viajeId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "doc_viaje_name", length: 60 }),
    __metadata("design:type", String)
], DocViaje.prototype, "docViajeName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "doc_url", length: 255 }),
    __metadata("design:type", String)
], DocViaje.prototype, "docUrl", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "tipo_id" }),
    __metadata("design:type", Number)
], DocViaje.prototype, "tipoId", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "status" }),
    __metadata("design:type", Boolean)
], DocViaje.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "created_at" }),
    __metadata("design:type", String)
], DocViaje.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "updated_at", nullable: true }),
    __metadata("design:type", Object)
], DocViaje.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], DocViaje.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Viaje_1.Viaje, (viaje) => viaje.docViajes, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "viaje_id", referencedColumnName: "viajeId" }]),
    __metadata("design:type", Viaje_1.Viaje)
], DocViaje.prototype, "viaje", void 0);
exports.DocViaje = DocViaje = __decorate([
    (0, typeorm_1.Index)("pk_doc_viaje", ["docViajeId"], { unique: true }),
    (0, typeorm_1.Index)("doc_folio_pk", ["docViajeId"], { unique: true }),
    (0, typeorm_1.Index)("relationship_20_fk", ["viajeId"], {}),
    (0, typeorm_1.Entity)("doc_viaje", { schema: "public" })
], DocViaje);
//# sourceMappingURL=DocViaje.js.map