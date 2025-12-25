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
exports.Permisos = void 0;
const typeorm_1 = require("typeorm");
const Perfiles_1 = require("./Perfiles");
const Acciones_1 = require("./Acciones");
let Permisos = class Permisos {
    accionId;
    attribute_2;
    prmNombre;
    prmDesc;
    perfiles;
    accion;
};
exports.Permisos = Permisos;
__decorate([
    (0, typeorm_1.Column)("integer", { name: "accion_id" }),
    __metadata("design:type", Number)
], Permisos.prototype, "accionId", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "attribute_2" }),
    __metadata("design:type", Number)
], Permisos.prototype, "attribute_2", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "prm_nombre",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", Object)
], Permisos.prototype, "prmNombre", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "prm_desc",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", Object)
], Permisos.prototype, "prmDesc", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Perfiles_1.Perfiles, (perfiles) => perfiles.attribute),
    __metadata("design:type", Array)
], Permisos.prototype, "perfiles", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Acciones_1.Acciones, (acciones) => acciones.permisos, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "accion_id", referencedColumnName: "accionId" }]),
    __metadata("design:type", Acciones_1.Acciones)
], Permisos.prototype, "accion", void 0);
exports.Permisos = Permisos = __decorate([
    (0, typeorm_1.Index)("relationship_52_fk", ["accionId"], {}),
    (0, typeorm_1.Index)("pk_permisos", ["attribute_2"], { unique: true }),
    (0, typeorm_1.Index)("permisos_pk", ["attribute_2"], { unique: true }),
    (0, typeorm_1.Entity)("permisos", { schema: "public" })
], Permisos);
//# sourceMappingURL=Permisos.js.map