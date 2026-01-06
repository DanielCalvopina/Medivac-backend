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
exports.TmnCli = void 0;
const typeorm_1 = require("typeorm");
const Cliente_1 = require("./Cliente");
const Terminal_1 = require("./Terminal");
let TmnCli = class TmnCli {
    trmCliId;
    trmId;
    cliId;
    cli;
    trm;
};
exports.TmnCli = TmnCli;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "trm_cli_id" }),
    __metadata("design:type", Number)
], TmnCli.prototype, "trmCliId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "trm_id", nullable: true }),
    __metadata("design:type", Object)
], TmnCli.prototype, "trmId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "cli_id", nullable: true }),
    __metadata("design:type", Object)
], TmnCli.prototype, "cliId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Cliente_1.Cliente, (cliente) => cliente.tmnClis, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "cli_id", referencedColumnName: "cliId" }]),
    __metadata("design:type", Cliente_1.Cliente)
], TmnCli.prototype, "cli", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Terminal_1.Terminal, (terminal) => terminal.tmnClis, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "trm_id", referencedColumnName: "trmId" }]),
    __metadata("design:type", Terminal_1.Terminal)
], TmnCli.prototype, "trm", void 0);
exports.TmnCli = TmnCli = __decorate([
    (0, typeorm_1.Index)("relationship_39_fk", ["cliId"], {}),
    (0, typeorm_1.Index)("pk_tmn_cli", ["trmCliId"], { unique: true }),
    (0, typeorm_1.Index)("tmn_cli_pk", ["trmCliId"], { unique: true }),
    (0, typeorm_1.Index)("relationship_38_fk", ["trmId"], {}),
    (0, typeorm_1.Entity)("tmn_cli", { schema: "public" })
], TmnCli);
//# sourceMappingURL=TmnCli.js.map