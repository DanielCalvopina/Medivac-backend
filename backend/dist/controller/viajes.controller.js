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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViajesController = void 0;
const common_1 = require("@nestjs/common");
const viajes_service_1 = require("../service/viajes.service");
const viaje_dto_1 = require("../dto/viaje.dto");
let ViajesController = class ViajesController {
    svc;
    constructor(svc) {
        this.svc = svc;
    }
    findAll() {
        return this.svc.findAll();
    }
    findOne(id) {
        return this.svc.findOne(id);
    }
    create(body) {
        return this.svc.create(body);
    }
    iniciar(id) {
        return this.svc.iniciarViaje(id);
    }
    finalizar(id) {
        return this.svc.finalizarViaje(id);
    }
    update(id, body) {
        return this.svc.update(id, body);
    }
    remove(id) {
        return this.svc.remove(id);
    }
};
exports.ViajesController = ViajesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ViajesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ViajesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [viaje_dto_1.CreateViajeDto]),
    __metadata("design:returntype", Promise)
], ViajesController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id/iniciar'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ViajesController.prototype, "iniciar", null);
__decorate([
    (0, common_1.Patch)(':id/finalizar'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ViajesController.prototype, "finalizar", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, viaje_dto_1.UpdateViajeDto]),
    __metadata("design:returntype", Promise)
], ViajesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ViajesController.prototype, "remove", null);
exports.ViajesController = ViajesController = __decorate([
    (0, common_1.Controller)('viajes'),
    __metadata("design:paramtypes", [viajes_service_1.ViajesService])
], ViajesController);
//# sourceMappingURL=viajes.controller.js.map