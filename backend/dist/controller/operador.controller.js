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
exports.OperadorController = void 0;
const common_1 = require("@nestjs/common");
const operador_service_1 = require("../service/operador.service");
const operador_dto_1 = require("../dto/operador.dto");
let OperadorController = class OperadorController {
    service;
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(opCed) {
        return this.service.findOne(opCed);
    }
    create(body) {
        return this.service.create(body);
    }
    update(opCed, body) {
        return this.service.update(opCed, body);
    }
    toggleStatus(opCed) {
        return this.service.toggleStatus(opCed);
    }
    async remove(opCed) {
        await this.service.remove(opCed);
    }
};
exports.OperadorController = OperadorController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OperadorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':opCed'),
    __param(0, (0, common_1.Param)('opCed')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OperadorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [operador_dto_1.CreateOperadorDto]),
    __metadata("design:returntype", Promise)
], OperadorController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':opCed'),
    __param(0, (0, common_1.Param)('opCed')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, operador_dto_1.UpdateOperadorDto]),
    __metadata("design:returntype", Promise)
], OperadorController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':opCed/toggle-status'),
    __param(0, (0, common_1.Param)('opCed')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OperadorController.prototype, "toggleStatus", null);
__decorate([
    (0, common_1.Delete)(':opCed'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('opCed')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OperadorController.prototype, "remove", null);
exports.OperadorController = OperadorController = __decorate([
    (0, common_1.Controller)('operador'),
    __metadata("design:paramtypes", [operador_service_1.OperadorService])
], OperadorController);
//# sourceMappingURL=operador.controller.js.map