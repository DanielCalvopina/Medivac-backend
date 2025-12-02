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
exports.EtnsCli = void 0;
const typeorm_1 = require("typeorm");
const Cliente_1 = require("./Cliente");
const Estaciones_1 = require("./Estaciones");
let EtnsCli = class EtnsCli {
    etnsCliId;
    cliId;
    etnsId;
    cli;
    etns;
};
exports.EtnsCli = EtnsCli;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "etns_cli_id" }),
    __metadata("design:type", Number)
], EtnsCli.prototype, "etnsCliId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "cli_id", nullable: true }),
    __metadata("design:type", Object)
], EtnsCli.prototype, "cliId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "etns_id", nullable: true }),
    __metadata("design:type", Object)
], EtnsCli.prototype, "etnsId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Cliente_1.Cliente, (cliente) => cliente.etnsClis, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "cli_id", referencedColumnName: "cliId" }]),
    __metadata("design:type", Cliente_1.Cliente)
], EtnsCli.prototype, "cli", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Estaciones_1.Estaciones, (estaciones) => estaciones.etnsClis, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "etns_id", referencedColumnName: "etnsId" }]),
    __metadata("design:type", Estaciones_1.Estaciones)
], EtnsCli.prototype, "etns", void 0);
exports.EtnsCli = EtnsCli = __decorate([
    (0, typeorm_1.Index)("relationship_40_fk", ["cliId"], {}),
    (0, typeorm_1.Index)("etns_cli_pk", ["etnsCliId"], { unique: true }),
    (0, typeorm_1.Index)("pk_etns_cli", ["etnsCliId"], { unique: true }),
    (0, typeorm_1.Index)("relationship_41_fk", ["etnsId"], {}),
    (0, typeorm_1.Entity)("etns_cli", { schema: "public" })
], EtnsCli);
//# sourceMappingURL=EtnsCli.js.map