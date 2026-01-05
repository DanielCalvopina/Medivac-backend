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
exports.Perfiles = void 0;
const typeorm_1 = require("typeorm");
const Permisos_1 = require("./Permisos");
const PerfilesDeUsuario_1 = require("./PerfilesDeUsuario");
let Perfiles = class Perfiles {
    attribute_2;
    prfId;
    prfDesc;
    prfStatus;
    createdAt;
    deletedAt;
    updatedAt;
    attribute;
    perfilesDeUsuarios;
};
exports.Perfiles = Perfiles;
__decorate([
    (0, typeorm_1.Column)("integer", { name: "attribute_2" }),
    __metadata("design:type", Number)
], Perfiles.prototype, "attribute_2", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "prf_id" }),
    __metadata("design:type", Number)
], Perfiles.prototype, "prfId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "prf_desc", nullable: true, length: 60 }),
    __metadata("design:type", Object)
], Perfiles.prototype, "prfDesc", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "prf_status", nullable: true }),
    __metadata("design:type", Object)
], Perfiles.prototype, "prfStatus", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "created_at", nullable: true }),
    __metadata("design:type", Object)
], Perfiles.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Perfiles.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "updated_at", nullable: true }),
    __metadata("design:type", Object)
], Perfiles.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Permisos_1.Permisos, (permisos) => permisos.perfiles, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "attribute_2", referencedColumnName: "attribute_2" }]),
    __metadata("design:type", Permisos_1.Permisos)
], Perfiles.prototype, "attribute", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PerfilesDeUsuario_1.PerfilesDeUsuario, (perfilesDeUsuario) => perfilesDeUsuario.prf),
    __metadata("design:type", Array)
], Perfiles.prototype, "perfilesDeUsuarios", void 0);
exports.Perfiles = Perfiles = __decorate([
    (0, typeorm_1.Index)("relationship_50_fk", ["attribute_2"], {}),
    (0, typeorm_1.Index)("pk_perfiles", ["prfId"], { unique: true }),
    (0, typeorm_1.Index)("perfiles_pk", ["prfId"], { unique: true }),
    (0, typeorm_1.Entity)("perfiles", { schema: "public" })
], Perfiles);
//# sourceMappingURL=Perfiles.js.map