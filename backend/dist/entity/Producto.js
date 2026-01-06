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
exports.Producto = void 0;
const typeorm_1 = require("typeorm");
const Folio_1 = require("./Folio");
let Producto = class Producto {
    prdId;
    prdNombre;
    prdDesc;
    prdMax;
    prdMin;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    folios;
};
exports.Producto = Producto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "prd_id" }),
    __metadata("design:type", Number)
], Producto.prototype, "prdId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "prd_nombre", length: 60 }),
    __metadata("design:type", String)
], Producto.prototype, "prdNombre", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "prd_desc", length: 255 }),
    __metadata("design:type", String)
], Producto.prototype, "prdDesc", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", { name: "prd_max", precision: 53 }),
    __metadata("design:type", Number)
], Producto.prototype, "prdMax", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", { name: "prd_min", precision: 53 }),
    __metadata("design:type", Number)
], Producto.prototype, "prdMin", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "status", default: true }),
    __metadata("design:type", Boolean)
], Producto.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at", type: 'date' }),
    __metadata("design:type", Date)
], Producto.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at", type: 'date', nullable: true }),
    __metadata("design:type", Object)
], Producto.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: "deleted_at", type: 'date', nullable: true }),
    __metadata("design:type", Object)
], Producto.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Folio_1.Folio, (folio) => folio.prd),
    __metadata("design:type", Array)
], Producto.prototype, "folios", void 0);
exports.Producto = Producto = __decorate([
    (0, typeorm_1.Entity)("producto", { schema: "public" })
], Producto);
//# sourceMappingURL=Producto.js.map