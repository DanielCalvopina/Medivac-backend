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
exports.Acciones = void 0;
const typeorm_1 = require("typeorm");
const Permisos_1 = require("./Permisos");
let Acciones = class Acciones {
    accionId;
    accionEnd;
    accionTipo;
    accionDesc;
    accionStatus;
    permisos;
};
exports.Acciones = Acciones;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "accion_id" }),
    __metadata("design:type", Number)
], Acciones.prototype, "accionId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "accion_end", length: 255 }),
    __metadata("design:type", String)
], Acciones.prototype, "accionEnd", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "accion_tipo" }),
    __metadata("design:type", Number)
], Acciones.prototype, "accionTipo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "accion_desc",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", Object)
], Acciones.prototype, "accionDesc", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "accion_status", nullable: true }),
    __metadata("design:type", Object)
], Acciones.prototype, "accionStatus", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Permisos_1.Permisos, (permisos) => permisos.accion),
    __metadata("design:type", Array)
], Acciones.prototype, "permisos", void 0);
exports.Acciones = Acciones = __decorate([
    (0, typeorm_1.Index)("acciones_pk", ["accionId"], { unique: true }),
    (0, typeorm_1.Index)("pk_acciones", ["accionId"], { unique: true }),
    (0, typeorm_1.Entity)("acciones", { schema: "public" })
], Acciones);
//# sourceMappingURL=Acciones.js.map