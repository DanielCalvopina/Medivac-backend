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
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
const PerfilesDeUsuario_1 = require("./PerfilesDeUsuario");
let Usuario = class Usuario {
    usrRuc;
    usrNombre;
    usrApellido;
    usrIsVerf;
    usrCodeVerf;
    usrPassword;
    usrStatus;
    createdAt;
    updatedAt;
    deletedAt;
    usrTelefono;
    usrCorreo;
    perfilesDeUsuarios;
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.Column)("character varying", { primary: true, name: "usr_ruc", length: 30 }),
    __metadata("design:type", String)
], Usuario.prototype, "usrRuc", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "usr_nombre", length: 60 }),
    __metadata("design:type", String)
], Usuario.prototype, "usrNombre", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "usr_apellido", length: 60 }),
    __metadata("design:type", String)
], Usuario.prototype, "usrApellido", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "usr_is_verf", nullable: true }),
    __metadata("design:type", Object)
], Usuario.prototype, "usrIsVerf", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "usr_code_verf",
        nullable: true,
        length: 60,
    }),
    __metadata("design:type", Object)
], Usuario.prototype, "usrCodeVerf", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "usr_password", length: 60 }),
    __metadata("design:type", String)
], Usuario.prototype, "usrPassword", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "usr_status" }),
    __metadata("design:type", Boolean)
], Usuario.prototype, "usrStatus", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "created_at" }),
    __metadata("design:type", String)
], Usuario.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "updated_at" }),
    __metadata("design:type", String)
], Usuario.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Usuario.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "usr_telefono",
        nullable: true,
        length: 15,
    }),
    __metadata("design:type", Object)
], Usuario.prototype, "usrTelefono", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "usr_correo",
        nullable: true,
        length: 60,
    }),
    __metadata("design:type", Object)
], Usuario.prototype, "usrCorreo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PerfilesDeUsuario_1.PerfilesDeUsuario, (perfilesDeUsuario) => perfilesDeUsuario.usrRuc2),
    __metadata("design:type", Array)
], Usuario.prototype, "perfilesDeUsuarios", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Index)("usuario_pk", ["usrRuc"], { unique: true }),
    (0, typeorm_1.Index)("pk_usuario", ["usrRuc"], { unique: true }),
    (0, typeorm_1.Entity)("usuario", { schema: "public" })
], Usuario);
//# sourceMappingURL=Usuario.js.map