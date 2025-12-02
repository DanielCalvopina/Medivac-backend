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
exports.Grupo = void 0;
const typeorm_1 = require("typeorm");
const Operador_1 = require("./Operador");
let Grupo = class Grupo {
    attribute_34;
    opCed;
    grpNombre;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    opCed2;
};
exports.Grupo = Grupo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "attribute_34" }),
    __metadata("design:type", Number)
], Grupo.prototype, "attribute_34", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "op_ced", nullable: true, length: 30 }),
    __metadata("design:type", Object)
], Grupo.prototype, "opCed", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "grp_nombre", length: 60 }),
    __metadata("design:type", String)
], Grupo.prototype, "grpNombre", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "status" }),
    __metadata("design:type", Boolean)
], Grupo.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "created_at" }),
    __metadata("design:type", String)
], Grupo.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "updated_at", nullable: true }),
    __metadata("design:type", Object)
], Grupo.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Grupo.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Operador_1.Operador, (operador) => operador.grupos, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "op_ced", referencedColumnName: "opCed" }]),
    __metadata("design:type", Operador_1.Operador)
], Grupo.prototype, "opCed2", void 0);
exports.Grupo = Grupo = __decorate([
    (0, typeorm_1.Index)("grupo_pk", ["attribute_34"], { unique: true }),
    (0, typeorm_1.Index)("pk_grupo", ["attribute_34"], { unique: true }),
    (0, typeorm_1.Index)("relationship_30_fk", ["opCed"], {}),
    (0, typeorm_1.Entity)("grupo", { schema: "public" })
], Grupo);
//# sourceMappingURL=Grupo.js.map