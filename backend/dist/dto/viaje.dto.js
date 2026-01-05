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
exports.ViajeItemDto = exports.ViajeItemsDto = exports.ViajeResponseDto = exports.UpdateViajeDto = exports.CreateViajeDto = void 0;
const class_validator_1 = require("class-validator");
class CreateViajeDto {
    mncId;
    cliId;
    viajeCod;
    rutasIds;
    terminalesIds;
}
exports.CreateViajeDto = CreateViajeDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateViajeDto.prototype, "mncId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateViajeDto.prototype, "cliId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateViajeDto.prototype, "viajeCod", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateViajeDto.prototype, "rutasIds", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateViajeDto.prototype, "terminalesIds", void 0);
class UpdateViajeDto {
    mncId;
    cliId;
    viajeCod;
    status;
    rutasIds;
    terminalesIds;
}
exports.UpdateViajeDto = UpdateViajeDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateViajeDto.prototype, "mncId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateViajeDto.prototype, "cliId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateViajeDto.prototype, "viajeCod", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateViajeDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UpdateViajeDto.prototype, "rutasIds", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UpdateViajeDto.prototype, "terminalesIds", void 0);
class ViajeResponseDto {
    viajeId;
    viajeCod;
    status;
    viajeInicio;
    viajeFin;
    viajeDuracion;
    createdAt;
    updatedAt;
    cliente;
    mancuerna;
    rutas;
    terminales;
    folios;
    bitacoras;
}
exports.ViajeResponseDto = ViajeResponseDto;
class ViajeItemsDto {
    items;
}
exports.ViajeItemsDto = ViajeItemsDto;
class ViajeItemDto {
    items;
}
exports.ViajeItemDto = ViajeItemDto;
//# sourceMappingURL=viaje.dto.js.map