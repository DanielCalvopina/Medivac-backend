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
exports.Descarga = void 0;
const typeorm_1 = require("typeorm");
const Folio_1 = require("./Folio");
const DocDescarga_1 = require("./DocDescarga");
let Descarga = class Descarga {
    descargaId;
    folId;
    fol;
    docDescargas;
};
exports.Descarga = Descarga;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "descarga_id" }),
    __metadata("design:type", Number)
], Descarga.prototype, "descargaId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "fol_id", nullable: true }),
    __metadata("design:type", Object)
], Descarga.prototype, "folId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Folio_1.Folio, (folio) => folio.descargas, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "fol_id", referencedColumnName: "folId" }]),
    __metadata("design:type", Folio_1.Folio)
], Descarga.prototype, "fol", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DocDescarga_1.DocDescarga, (docDescarga) => docDescarga.descarga),
    __metadata("design:type", Array)
], Descarga.prototype, "docDescargas", void 0);
exports.Descarga = Descarga = __decorate([
    (0, typeorm_1.Index)("pk_descarga", ["descargaId"], { unique: true }),
    (0, typeorm_1.Index)("descarga_pk", ["descargaId"], { unique: true }),
    (0, typeorm_1.Index)("relationship_33_fk", ["folId"], {}),
    (0, typeorm_1.Entity)("descarga", { schema: "public" })
], Descarga);
//# sourceMappingURL=Descarga.js.map