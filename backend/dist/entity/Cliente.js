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
exports.Cliente = void 0;
const typeorm_1 = require("typeorm");
const EtnsCli_1 = require("./EtnsCli");
const TmnCli_1 = require("./TmnCli");
const Viaje_1 = require("./Viaje");
let Cliente = class Cliente {
    cliId;
    cliNombre;
    cliDesc;
    cliCorreo;
    cliNum;
    cliRuc;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    etnsClis;
    tmnClis;
    viajes;
};
exports.Cliente = Cliente;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "cli_id" }),
    __metadata("design:type", Number)
], Cliente.prototype, "cliId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "cli_nombre", length: 60 }),
    __metadata("design:type", String)
], Cliente.prototype, "cliNombre", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "cli_desc", length: 255 }),
    __metadata("design:type", String)
], Cliente.prototype, "cliDesc", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "cli_correo", length: 255 }),
    __metadata("design:type", String)
], Cliente.prototype, "cliCorreo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "cli_num", length: 30 }),
    __metadata("design:type", String)
], Cliente.prototype, "cliNum", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "cli_ruc", length: 30 }),
    __metadata("design:type", String)
], Cliente.prototype, "cliRuc", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "status" }),
    __metadata("design:type", Boolean)
], Cliente.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "created_at" }),
    __metadata("design:type", String)
], Cliente.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "updated_at", nullable: true }),
    __metadata("design:type", Object)
], Cliente.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Cliente.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EtnsCli_1.EtnsCli, (etnsCli) => etnsCli.cli),
    __metadata("design:type", Array)
], Cliente.prototype, "etnsClis", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TmnCli_1.TmnCli, (tmnCli) => tmnCli.cli),
    __metadata("design:type", Array)
], Cliente.prototype, "tmnClis", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Viaje_1.Viaje, (viaje) => viaje.cli),
    __metadata("design:type", Array)
], Cliente.prototype, "viajes", void 0);
exports.Cliente = Cliente = __decorate([
    (0, typeorm_1.Index)("cliente_pk", ["cliId"], { unique: true }),
    (0, typeorm_1.Index)("pk_cliente", ["cliId"], { unique: true }),
    (0, typeorm_1.Entity)("cliente", { schema: "public" })
], Cliente);
//# sourceMappingURL=Cliente.js.map