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
exports.Admin = void 0;
const typeorm_1 = require("typeorm");
let Admin = class Admin {
    adminCed;
    adminNombre;
    adminApellido;
    adminCorreo;
    adminPassword;
    adminVerificate;
    adminCodeAuth;
    adminTimeToExp;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.Admin = Admin;
__decorate([
    (0, typeorm_1.Column)("character varying", { primary: true, name: "admin_ced", length: 30 }),
    __metadata("design:type", String)
], Admin.prototype, "adminCed", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "admin_nombre", length: 60 }),
    __metadata("design:type", String)
], Admin.prototype, "adminNombre", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "admin_apellido", length: 60 }),
    __metadata("design:type", String)
], Admin.prototype, "adminApellido", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "admin_correo", length: 60 }),
    __metadata("design:type", String)
], Admin.prototype, "adminCorreo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "admin_password", length: 255 }),
    __metadata("design:type", String)
], Admin.prototype, "adminPassword", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "admin_verificate", nullable: true }),
    __metadata("design:type", Object)
], Admin.prototype, "adminVerificate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "admin_code_auth",
        nullable: true,
        length: 60,
    }),
    __metadata("design:type", Object)
], Admin.prototype, "adminCodeAuth", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "admin_time_to_exp", nullable: true }),
    __metadata("design:type", Object)
], Admin.prototype, "adminTimeToExp", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "created_at" }),
    __metadata("design:type", String)
], Admin.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "updated_at", nullable: true }),
    __metadata("design:type", Object)
], Admin.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Admin.prototype, "deletedAt", void 0);
exports.Admin = Admin = __decorate([
    (0, typeorm_1.Index)("pk_admin", ["adminCed"], { unique: true }),
    (0, typeorm_1.Index)("admin_pk", ["adminCed"], { unique: true }),
    (0, typeorm_1.Entity)("admin", { schema: "public" })
], Admin);
//# sourceMappingURL=Admin.js.map