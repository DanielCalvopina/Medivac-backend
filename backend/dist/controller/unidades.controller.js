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
exports.UnidadesController = void 0;
const common_1 = require("@nestjs/common");
const unidades_service_1 = require("../service/unidades.service");
const tracto_dto_1 = require("../dto/tracto.dto");
const tanque_dto_1 = require("../dto/tanque.dto");
const dolly_dto_1 = require("../dto/dolly.dto");
const change_status_dto_1 = require("../dto/change-status.dto");
let UnidadesController = class UnidadesController {
    service;
    constructor(service) {
        this.service = service;
    }
    getUnidades() {
        return this.service.getUnidades();
    }
    listTractos() {
        return this.service.listTractos();
    }
    getTracto(trPlc) {
        return this.service.getTracto(trPlc);
    }
    createTracto(body) {
        return this.service.createTracto(body);
    }
    updateTracto(trPlc, body) {
        return this.service.updateTracto(trPlc, body);
    }
    changeTractoStatus(trPlc, body) {
        return this.service.changeTractoStatus(trPlc, body.status);
    }
    deleteTracto(trPlc) {
        return this.service.deleteTracto(trPlc);
    }
    listTanques() {
        return this.service.listTanques();
    }
    getTanque(tnqId) {
        return this.service.getTanque(tnqId);
    }
    createTanque(body) {
        return this.service.createTanque(body);
    }
    updateTanque(tnqId, body) {
        return this.service.updateTanque(tnqId, body);
    }
    changeTanqueStatus(tnqId, body) {
        return this.service.changeTanqueStatus(tnqId, body.status);
    }
    deleteTanque(tnqId) {
        return this.service.deleteTanque(tnqId);
    }
    listDollies() {
        return this.service.listDollies();
    }
    getDolly(id) {
        return this.service.getDolly(id);
    }
    createDolly(body) {
        return this.service.createDolly(body);
    }
    updateDolly(id, body) {
        return this.service.updateDolly(id, body);
    }
    changeDollyStatus(id, body) {
        return this.service.changeDollyStatus(id, body.status);
    }
    deleteDolly(id) {
        return this.service.deleteDolly(id);
    }
};
exports.UnidadesController = UnidadesController;
__decorate([
    (0, common_1.Get)('getUnidades'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "getUnidades", null);
__decorate([
    (0, common_1.Get)('tractos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "listTractos", null);
__decorate([
    (0, common_1.Get)('tractos/:trPlc'),
    __param(0, (0, common_1.Param)('trPlc')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "getTracto", null);
__decorate([
    (0, common_1.Post)('tractos'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tracto_dto_1.CreateTractoDto]),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "createTracto", null);
__decorate([
    (0, common_1.Patch)('tractos/:trPlc'),
    __param(0, (0, common_1.Param)('trPlc')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, tracto_dto_1.UpdateTractoDto]),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "updateTracto", null);
__decorate([
    (0, common_1.Patch)('tractos/:trPlc/status'),
    __param(0, (0, common_1.Param)('trPlc')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, change_status_dto_1.ChangeStatusDto]),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "changeTractoStatus", null);
__decorate([
    (0, common_1.Delete)('tractos/:trPlc'),
    __param(0, (0, common_1.Param)('trPlc')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "deleteTracto", null);
__decorate([
    (0, common_1.Get)('tanques'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "listTanques", null);
__decorate([
    (0, common_1.Get)('tanques/:tnqId'),
    __param(0, (0, common_1.Param)('tnqId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "getTanque", null);
__decorate([
    (0, common_1.Post)('tanques'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tanque_dto_1.CreateTanqueDto]),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "createTanque", null);
__decorate([
    (0, common_1.Patch)('tanques/:tnqId'),
    __param(0, (0, common_1.Param)('tnqId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, tanque_dto_1.UpdateTanqueDto]),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "updateTanque", null);
__decorate([
    (0, common_1.Patch)('tanques/:tnqId/status'),
    __param(0, (0, common_1.Param)('tnqId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, change_status_dto_1.ChangeStatusDto]),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "changeTanqueStatus", null);
__decorate([
    (0, common_1.Delete)('tanques/:tnqId'),
    __param(0, (0, common_1.Param)('tnqId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "deleteTanque", null);
__decorate([
    (0, common_1.Get)('dollies'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "listDollies", null);
__decorate([
    (0, common_1.Get)('dollies/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "getDolly", null);
__decorate([
    (0, common_1.Post)('dollies'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dolly_dto_1.CreateDollyDto]),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "createDolly", null);
__decorate([
    (0, common_1.Patch)('dollies/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dolly_dto_1.UpdateDollyDto]),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "updateDolly", null);
__decorate([
    (0, common_1.Patch)('dollies/:id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, change_status_dto_1.ChangeStatusDto]),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "changeDollyStatus", null);
__decorate([
    (0, common_1.Delete)('dollies/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UnidadesController.prototype, "deleteDolly", null);
exports.UnidadesController = UnidadesController = __decorate([
    (0, common_1.Controller)('unidades'),
    __metadata("design:paramtypes", [unidades_service_1.UnidadesService])
], UnidadesController);
//# sourceMappingURL=unidades.controller.js.map