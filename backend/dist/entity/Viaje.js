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
exports.Viaje = void 0;
const typeorm_1 = require("typeorm");
const Bitacora_1 = require("./Bitacora");
const DocViaje_1 = require("./DocViaje");
const Folio_1 = require("./Folio");
const RtFlId_1 = require("./RtFlId");
const TerminalViaje_1 = require("./TerminalViaje");
const Cliente_1 = require("./Cliente");
const Mancuerna_1 = require("./Mancuerna");
let Viaje = class Viaje {
    viajeId;
    mncId;
    cliId;
    viajeCod;
    status;
    viajeInicio;
    viajeFin;
    viajeDuracion;
    createdAt;
    updatedAt;
    deletedAt;
    bitacoras;
    docViajes;
    folios;
    rtFlS;
    terminalViajes;
    cli;
    mnc;
};
exports.Viaje = Viaje;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "viaje_id" }),
    __metadata("design:type", Number)
], Viaje.prototype, "viajeId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "mnc_id" }),
    __metadata("design:type", Number)
], Viaje.prototype, "mncId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "cli_id" }),
    __metadata("design:type", Number)
], Viaje.prototype, "cliId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "viaje_cod", length: 30 }),
    __metadata("design:type", String)
], Viaje.prototype, "viajeCod", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "status", default: 1 }),
    __metadata("design:type", Number)
], Viaje.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "viaje_inicio", nullable: true }),
    __metadata("design:type", Object)
], Viaje.prototype, "viajeInicio", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "viaje_fin", nullable: true }),
    __metadata("design:type", Object)
], Viaje.prototype, "viajeFin", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", { name: "viaje_duracion", nullable: true, precision: 53 }),
    __metadata("design:type", Object)
], Viaje.prototype, "viajeDuracion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], Viaje.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at", nullable: true }),
    __metadata("design:type", Object)
], Viaje.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Viaje.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Bitacora_1.Bitacora, (bitacora) => bitacora.viaje),
    __metadata("design:type", Array)
], Viaje.prototype, "bitacoras", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DocViaje_1.DocViaje, (docViaje) => docViaje.viaje),
    __metadata("design:type", Array)
], Viaje.prototype, "docViajes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Folio_1.Folio, (folio) => folio.viaje),
    __metadata("design:type", Array)
], Viaje.prototype, "folios", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RtFlId_1.RtFlId, (rtFlId) => rtFlId.viaje),
    __metadata("design:type", Array)
], Viaje.prototype, "rtFlS", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TerminalViaje_1.TerminalViaje, (terminalViaje) => terminalViaje.viaje),
    __metadata("design:type", Array)
], Viaje.prototype, "terminalViajes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Cliente_1.Cliente, (cliente) => cliente.viajes),
    (0, typeorm_1.JoinColumn)([{ name: "cli_id", referencedColumnName: "cliId" }]),
    __metadata("design:type", Cliente_1.Cliente)
], Viaje.prototype, "cli", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Mancuerna_1.Mancuerna, (mancuerna) => mancuerna.viajes),
    (0, typeorm_1.JoinColumn)([{ name: "mnc_id", referencedColumnName: "mncId" }]),
    __metadata("design:type", Mancuerna_1.Mancuerna)
], Viaje.prototype, "mnc", void 0);
exports.Viaje = Viaje = __decorate([
    (0, typeorm_1.Entity)("viaje", { schema: "public" })
], Viaje);
//# sourceMappingURL=Viaje.js.map