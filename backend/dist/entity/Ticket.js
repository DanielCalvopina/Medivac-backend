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
exports.Ticket = void 0;
const typeorm_1 = require("typeorm");
let Ticket = class Ticket {
    ticketId;
    opCed;
    ticketDesc;
    status;
    createdAt;
    updatedAt;
    deletedAt;
};
exports.Ticket = Ticket;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "ticket_id" }),
    __metadata("design:type", Number)
], Ticket.prototype, "ticketId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "op_ced", nullable: true, length: 30 }),
    __metadata("design:type", Object)
], Ticket.prototype, "opCed", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "ticket_desc",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", Object)
], Ticket.prototype, "ticketDesc", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "status", nullable: true, length: 60 }),
    __metadata("design:type", Object)
], Ticket.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "created_at", nullable: true }),
    __metadata("design:type", Object)
], Ticket.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "updated_at", nullable: true }),
    __metadata("design:type", Object)
], Ticket.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "deleted_at", nullable: true }),
    __metadata("design:type", Object)
], Ticket.prototype, "deletedAt", void 0);
exports.Ticket = Ticket = __decorate([
    (0, typeorm_1.Index)("pk_ticket", ["ticketId"], { unique: true }),
    (0, typeorm_1.Index)("ticket_pk", ["ticketId"], { unique: true }),
    (0, typeorm_1.Entity)("ticket", { schema: "public" })
], Ticket);
//# sourceMappingURL=Ticket.js.map