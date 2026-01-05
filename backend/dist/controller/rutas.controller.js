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
exports.RutasController = void 0;
const common_1 = require("@nestjs/common");
const rutas_service_1 = require("../service/rutas.service");
const rutas_dto_1 = require("../dto/rutas.dto");
let RutasController = class RutasController {
    rutasService;
    constructor(rutasService) {
        this.rutasService = rutasService;
    }
    findAll() {
        return this.rutasService.findAll();
    }
    findOne(id) {
        return this.rutasService.findOne(id);
    }
    create(data) {
        return this.rutasService.create(data);
    }
    update(id, data) {
        return this.rutasService.update(id, data);
    }
    toggleStatus(id) {
        return this.rutasService.toggleStatus(id);
    }
    async remove(id) {
        await this.rutasService.remove(id);
    }
};
exports.RutasController = RutasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RutasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RutasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rutas_dto_1.CreateRutasDto]),
    __metadata("design:returntype", Promise)
], RutasController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, rutas_dto_1.UpdateRutasDto]),
    __metadata("design:returntype", Promise)
], RutasController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/toggle-status'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RutasController.prototype, "toggleStatus", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RutasController.prototype, "remove", null);
exports.RutasController = RutasController = __decorate([
    (0, common_1.Controller)('rutas'),
    __metadata("design:paramtypes", [rutas_service_1.RutasService])
], RutasController);
//# sourceMappingURL=rutas.controller.js.map