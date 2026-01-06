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
exports.EstacionesFolio = void 0;
const typeorm_1 = require("typeorm");
const Estaciones_1 = require("./Estaciones");
const Folio_1 = require("./Folio");
let EstacionesFolio = class EstacionesFolio {
    etnsId6;
    etnsId;
    folId;
    etns;
    fol;
};
exports.EstacionesFolio = EstacionesFolio;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "etns_id6" }),
    __metadata("design:type", Number)
], EstacionesFolio.prototype, "etnsId6", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "etns_id", nullable: true }),
    __metadata("design:type", Object)
], EstacionesFolio.prototype, "etnsId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "fol_id", nullable: true }),
    __metadata("design:type", Object)
], EstacionesFolio.prototype, "folId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Estaciones_1.Estaciones, (estaciones) => estaciones.estacionesFolios, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "etns_id", referencedColumnName: "etnsId" }]),
    __metadata("design:type", Estaciones_1.Estaciones)
], EstacionesFolio.prototype, "etns", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Folio_1.Folio, (folio) => folio.estacionesFolios, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "fol_id", referencedColumnName: "folId" }]),
    __metadata("design:type", Folio_1.Folio)
], EstacionesFolio.prototype, "fol", void 0);
exports.EstacionesFolio = EstacionesFolio = __decorate([
    (0, typeorm_1.Index)("relationship_36_fk", ["etnsId"], {}),
    (0, typeorm_1.Index)("pk_estaciones_folio", ["etnsId6"], { unique: true }),
    (0, typeorm_1.Index)("estaciones_folio_pk", ["etnsId6"], { unique: true }),
    (0, typeorm_1.Index)("relationship_29_fk", ["folId"], {}),
    (0, typeorm_1.Entity)("estaciones_folio", { schema: "public" })
], EstacionesFolio);
//# sourceMappingURL=EstacionesFolio.js.map