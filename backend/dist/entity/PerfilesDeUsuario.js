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
exports.PerfilesDeUsuario = void 0;
const typeorm_1 = require("typeorm");
const Usuario_1 = require("./Usuario");
const Perfiles_1 = require("./Perfiles");
let PerfilesDeUsuario = class PerfilesDeUsuario {
    prfId;
    usrRuc;
    prfUsrId;
    usrRuc2;
    prf;
};
exports.PerfilesDeUsuario = PerfilesDeUsuario;
__decorate([
    (0, typeorm_1.Column)("integer", { name: "prf_id" }),
    __metadata("design:type", Number)
], PerfilesDeUsuario.prototype, "prfId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "usr_ruc", length: 30 }),
    __metadata("design:type", String)
], PerfilesDeUsuario.prototype, "usrRuc", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "prf_usr_id" }),
    __metadata("design:type", Number)
], PerfilesDeUsuario.prototype, "prfUsrId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Usuario_1.Usuario, (usuario) => usuario.perfilesDeUsuarios, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "usr_ruc", referencedColumnName: "usrRuc" }]),
    __metadata("design:type", Usuario_1.Usuario)
], PerfilesDeUsuario.prototype, "usrRuc2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Perfiles_1.Perfiles, (perfiles) => perfiles.perfilesDeUsuarios, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "prf_id", referencedColumnName: "prfId" }]),
    __metadata("design:type", Perfiles_1.Perfiles)
], PerfilesDeUsuario.prototype, "prf", void 0);
exports.PerfilesDeUsuario = PerfilesDeUsuario = __decorate([
    (0, typeorm_1.Index)("relationship_49_fk", ["prfId"], {}),
    (0, typeorm_1.Index)("perfiles_de_usuario_pk", ["prfUsrId"], { unique: true }),
    (0, typeorm_1.Index)("pk_perfiles_de_usuario", ["prfUsrId"], { unique: true }),
    (0, typeorm_1.Index)("relationship_48_fk", ["usrRuc"], {}),
    (0, typeorm_1.Entity)("perfiles_de_usuario", { schema: "public" })
], PerfilesDeUsuario);
//# sourceMappingURL=PerfilesDeUsuario.js.map