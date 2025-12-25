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
exports.MancTanq = void 0;
const typeorm_1 = require("typeorm");
const Mancuerna_1 = require("./Mancuerna");
const Tanque_1 = require("./Tanque");
let MancTanq = class MancTanq {
    mncTanqId;
    mncId;
    tnqId;
    mnc;
    tnq;
};
exports.MancTanq = MancTanq;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "mnc_tanq_id" }),
    __metadata("design:type", Number)
], MancTanq.prototype, "mncTanqId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "mnc_id", nullable: true }),
    __metadata("design:type", Object)
], MancTanq.prototype, "mncId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "tnq_id", nullable: true }),
    __metadata("design:type", Object)
], MancTanq.prototype, "tnqId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Mancuerna_1.Mancuerna, (mancuerna) => mancuerna.mancTanqs, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "mnc_id", referencedColumnName: "mncId" }]),
    __metadata("design:type", Mancuerna_1.Mancuerna)
], MancTanq.prototype, "mnc", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Tanque_1.Tanque, (tanque) => tanque.mancTanqs, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "tnq_id", referencedColumnName: "tnqId" }]),
    __metadata("design:type", Tanque_1.Tanque)
], MancTanq.prototype, "tnq", void 0);
exports.MancTanq = MancTanq = __decorate([
    (0, typeorm_1.Entity)("manc_tanq", { schema: "public" })
], MancTanq);
//# sourceMappingURL=MancTanq.js.map