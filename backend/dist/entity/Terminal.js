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
exports.Terminal = void 0;
const typeorm_1 = require("typeorm");
const TerminalViaje_1 = require("./TerminalViaje");
const TmnCli_1 = require("./TmnCli");
let Terminal = class Terminal {
    trmId;
    trmNombre;
    trmNombreCorto;
    trmDireccion;
    trmUbicacion;
    trmTipo;
    trmCiudad;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    terminalViajes;
    tmnClis;
};
exports.Terminal = Terminal;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "trm_id" }),
    __metadata("design:type", Number)
], Terminal.prototype, "trmId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "trm_nombre", length: 255 }),
    __metadata("design:type", String)
], Terminal.prototype, "trmNombre", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "trm_nombre_corto", length: 255 }),
    __metadata("design:type", String)
], Terminal.prototype, "trmNombreCorto", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "trm_direccion", length: 1050 }),
    __metadata("design:type", String)
], Terminal.prototype, "trmDireccion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "trm_ubicacion", length: 1050 }),
    __metadata("design:type", String)
], Terminal.prototype, "trmUbicacion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "trm_tipo", length: 255 }),
    __metadata("design:type", String)
], Terminal.prototype, "trmTipo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "trm_ciudad", length: 255 }),
    __metadata("design:type", String)
], Terminal.prototype, "trmCiudad", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "status", default: true }),
    __metadata("design:type", Boolean)
], Terminal.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at", type: 'date' }),
    __metadata("design:type", Date)
], Terminal.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at", type: 'date', nullable: true }),
    __metadata("design:type", Object)
], Terminal.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: "deleted_at", type: 'date', nullable: true }),
    __metadata("design:type", Object)
], Terminal.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TerminalViaje_1.TerminalViaje, (terminalViaje) => terminalViaje.trm),
    __metadata("design:type", Array)
], Terminal.prototype, "terminalViajes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TmnCli_1.TmnCli, (tmnCli) => tmnCli.trm),
    __metadata("design:type", Array)
], Terminal.prototype, "tmnClis", void 0);
exports.Terminal = Terminal = __decorate([
    (0, typeorm_1.Entity)("terminal", { schema: "public" })
], Terminal);
//# sourceMappingURL=Terminal.js.map