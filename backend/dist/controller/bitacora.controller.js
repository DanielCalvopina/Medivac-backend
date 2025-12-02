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
exports.BitacoraController = void 0;
const common_1 = require("@nestjs/common");
const bitacora_service_1 = require("../service/bitacora.service");
let BitacoraController = class BitacoraController {
    bitacoraService;
    constructor(bitacoraService) {
        this.bitacoraService = bitacoraService;
    }
    async create(data) {
        return await this.bitacoraService.create(data);
    }
    async findAll() {
        return await this.bitacoraService.findAll();
    }
    async findOne(id) {
        return await this.bitacoraService.findOne(id);
    }
    async findByViaje(viajeId) {
        return await this.bitacoraService.findByViaje(viajeId);
    }
    async update(id, data) {
        return await this.bitacoraService.update(id, data);
    }
    async remove(id) {
        return await this.bitacoraService.remove(id);
    }
};
exports.BitacoraController = BitacoraController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BitacoraController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BitacoraController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BitacoraController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('viaje/:viajeId'),
    __param(0, (0, common_1.Param)('viajeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BitacoraController.prototype, "findByViaje", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], BitacoraController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BitacoraController.prototype, "remove", null);
exports.BitacoraController = BitacoraController = __decorate([
    (0, common_1.Controller)('bitacora'),
    __metadata("design:paramtypes", [bitacora_service_1.BitacoraService])
], BitacoraController);
//# sourceMappingURL=bitacora.controller.js.map