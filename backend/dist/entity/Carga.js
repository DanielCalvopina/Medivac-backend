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
exports.Carga = void 0;
const typeorm_1 = require("typeorm");
const Folio_1 = require("./Folio");
const DocCarga_1 = require("./DocCarga");
let Carga = class Carga {
    cargaId;
    folId;
    fol;
    docCargas;
};
exports.Carga = Carga;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "carga_id" }),
    __metadata("design:type", Number)
], Carga.prototype, "cargaId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "fol_id", nullable: true }),
    __metadata("design:type", Object)
], Carga.prototype, "folId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Folio_1.Folio, (folio) => folio.cargas, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "fol_id", referencedColumnName: "folId" }]),
    __metadata("design:type", Folio_1.Folio)
], Carga.prototype, "fol", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DocCarga_1.DocCarga, (docCarga) => docCarga.carga),
    __metadata("design:type", Array)
], Carga.prototype, "docCargas", void 0);
exports.Carga = Carga = __decorate([
    (0, typeorm_1.Index)("carga_pk", ["cargaId"], { unique: true }),
    (0, typeorm_1.Index)("pk_carga", ["cargaId"], { unique: true }),
    (0, typeorm_1.Index)("relationship_34_fk", ["folId"], {}),
    (0, typeorm_1.Entity)("carga", { schema: "public" })
], Carga);
//# sourceMappingURL=Carga.js.map