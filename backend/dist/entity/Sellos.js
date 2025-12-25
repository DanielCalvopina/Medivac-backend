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
exports.Sellos = void 0;
const typeorm_1 = require("typeorm");
const Carga_1 = require("./Carga");
let Sellos = class Sellos {
    sellosId;
    cargaId;
    sellosNum;
    carga;
};
exports.Sellos = Sellos;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "sellos_id" }),
    __metadata("design:type", Number)
], Sellos.prototype, "sellosId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "carga_id" }),
    __metadata("design:type", Number)
], Sellos.prototype, "cargaId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "sellos_num", length: 30 }),
    __metadata("design:type", String)
], Sellos.prototype, "sellosNum", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Carga_1.Carga, (carga) => carga.sellos, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "carga_id", referencedColumnName: "cargaId" }]),
    __metadata("design:type", Carga_1.Carga)
], Sellos.prototype, "carga", void 0);
exports.Sellos = Sellos = __decorate([
    (0, typeorm_1.Entity)("sellos", { schema: "public" })
], Sellos);
//# sourceMappingURL=Sellos.js.map