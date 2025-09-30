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
const bitacora_service_1 = require("./bitacora.service");
const create_bitacora_dto_1 = require("../common/dto/create-bitacora.dto");
let BitacoraController = class BitacoraController {
    constructor(service) {
        this.service = service;
    }
    add(dto) {
        return this.service.add(dto);
    }
    listByTrip(tripId) {
        return this.service.listByTrip(tripId);
    }
};
exports.BitacoraController = BitacoraController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bitacora_dto_1.CreateBitacoraDto]),
    __metadata("design:returntype", void 0)
], BitacoraController.prototype, "add", null);
__decorate([
    (0, common_1.Get)("trip/:tripId"),
    __param(0, (0, common_1.Param)("tripId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BitacoraController.prototype, "listByTrip", null);
exports.BitacoraController = BitacoraController = __decorate([
    (0, common_1.Controller)("bitacora"),
    __metadata("design:paramtypes", [bitacora_service_1.BitacoraService])
], BitacoraController);
