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
exports.UbicacionController = void 0;
const common_1 = require("@nestjs/common");
const ubicacion_service_1 = require("../service/ubicacion.service");
let UbicacionController = class UbicacionController {
    svc;
    constructor(svc) {
        this.svc = svc;
    }
    listEstaciones() { return this.svc.listEstaciones(); }
    getEstacion(etnsId) { return this.svc.getEstacion(etnsId); }
    createEstacion(body) { return this.svc.createEstacion(body); }
    updateEstacion(etnsId, body) {
        return this.svc.updateEstacion(etnsId, body);
    }
    deleteEstacion(etnsId) { return this.svc.deleteEstacion(etnsId); }
    listTerminales() { return this.svc.listTerminales(); }
    getTerminal(trmId) { return this.svc.getTerminal(trmId); }
    createTerminal(body) { return this.svc.createTerminal(body); }
    updateTerminal(trmId, body) {
        return this.svc.updateTerminal(trmId, body);
    }
    deleteTerminal(trmId) { return this.svc.deleteTerminal(trmId); }
    vincularEstacionCliente(body) {
        return this.svc.vincularEstacionCliente(Number(body.etnsId), Number(body.cliId));
    }
    vincularTerminalCliente(body) {
        return this.svc.vincularTerminalCliente(Number(body.trmId), Number(body.cliId));
    }
    estacionesPorCliente(cliId) {
        return this.svc.estacionesPorCliente(cliId);
    }
    terminalesPorCliente(cliId) {
        return this.svc.terminalesPorCliente(cliId);
    }
    clientesPorEstacion(etnsId) {
        return this.svc.clientesPorEstacion(etnsId);
    }
    clientesPorTerminal(trmId) {
        return this.svc.clientesPorTerminal(trmId);
    }
};
exports.UbicacionController = UbicacionController;
__decorate([
    (0, common_1.Get)('estaciones'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "listEstaciones", null);
__decorate([
    (0, common_1.Get)('estaciones/:etnsId'),
    __param(0, (0, common_1.Param)('etnsId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "getEstacion", null);
__decorate([
    (0, common_1.Post)('estaciones'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "createEstacion", null);
__decorate([
    (0, common_1.Patch)('estaciones/:etnsId'),
    __param(0, (0, common_1.Param)('etnsId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "updateEstacion", null);
__decorate([
    (0, common_1.Delete)('estaciones/:etnsId'),
    __param(0, (0, common_1.Param)('etnsId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "deleteEstacion", null);
__decorate([
    (0, common_1.Get)('terminales'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "listTerminales", null);
__decorate([
    (0, common_1.Get)('terminales/:trmId'),
    __param(0, (0, common_1.Param)('trmId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "getTerminal", null);
__decorate([
    (0, common_1.Post)('terminales'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "createTerminal", null);
__decorate([
    (0, common_1.Patch)('terminales/:trmId'),
    __param(0, (0, common_1.Param)('trmId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "updateTerminal", null);
__decorate([
    (0, common_1.Delete)('terminales/:trmId'),
    __param(0, (0, common_1.Param)('trmId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "deleteTerminal", null);
__decorate([
    (0, common_1.Post)('vinculos/estacion-cliente'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "vincularEstacionCliente", null);
__decorate([
    (0, common_1.Post)('vinculos/terminal-cliente'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "vincularTerminalCliente", null);
__decorate([
    (0, common_1.Get)('clientes/:cliId/estaciones'),
    __param(0, (0, common_1.Param)('cliId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "estacionesPorCliente", null);
__decorate([
    (0, common_1.Get)('clientes/:cliId/terminales'),
    __param(0, (0, common_1.Param)('cliId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "terminalesPorCliente", null);
__decorate([
    (0, common_1.Get)('estaciones/:etnsId/clientes'),
    __param(0, (0, common_1.Param)('etnsId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "clientesPorEstacion", null);
__decorate([
    (0, common_1.Get)('terminales/:trmId/clientes'),
    __param(0, (0, common_1.Param)('trmId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UbicacionController.prototype, "clientesPorTerminal", null);
exports.UbicacionController = UbicacionController = __decorate([
    (0, common_1.Controller)('ubicaciones'),
    __metadata("design:paramtypes", [ubicacion_service_1.UbicacionService])
], UbicacionController);
//# sourceMappingURL=ubicacion.controller.js.map