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
exports.FolioController = void 0;
const common_1 = require("@nestjs/common");
const folio_service_1 = require("../service/folio.service");
let FolioController = class FolioController {
    folioService;
    constructor(folioService) {
        this.folioService = folioService;
    }
    async create(data) {
        return await this.folioService.create(data);
    }
    async getByViaje(viajeId) {
        return await this.folioService.findByViaje(viajeId);
    }
    async findAll() {
        return await this.folioService.findAll();
    }
    async findOne(id) {
        return await this.folioService.findOne(id);
    }
    async update(id, data) {
        return await this.folioService.update(id, data);
    }
    async remove(id) {
        return await this.folioService.remove(id);
    }
};
exports.FolioController = FolioController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FolioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("viaje/:viajeId"),
    __param(0, (0, common_1.Param)("viajeId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FolioController.prototype, "getByViaje", null);
__decorate([
    (0, common_1.Get)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FolioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FolioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], FolioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FolioController.prototype, "remove", null);
exports.FolioController = FolioController = __decorate([
    (0, common_1.Controller)('folio'),
    __metadata("design:paramtypes", [folio_service_1.FolioService])
], FolioController);
//# sourceMappingURL=folio.controller.js.map