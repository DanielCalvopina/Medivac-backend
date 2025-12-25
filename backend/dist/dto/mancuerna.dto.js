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
exports.MancuernaItemsDto = exports.MancuernaItemDto = exports.MancuernaResponseDto = exports.MancOpResponseDto = exports.UpdateMancuernaDto = exports.CreateMancuernaDto = void 0;
const class_validator_1 = require("class-validator");
class CreateMancuernaDto {
    trPlc;
    dollyId;
    opCed;
    mncNom;
    npmcDesc;
    tanquesIds;
}
exports.CreateMancuernaDto = CreateMancuernaDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMancuernaDto.prototype, "trPlc", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMancuernaDto.prototype, "dollyId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMancuernaDto.prototype, "opCed", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CreateMancuernaDto.prototype, "mncNom", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CreateMancuernaDto.prototype, "npmcDesc", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateMancuernaDto.prototype, "tanquesIds", void 0);
class UpdateMancuernaDto {
    opCed;
    mncNom;
    npmcDesc;
}
exports.UpdateMancuernaDto = UpdateMancuernaDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateMancuernaDto.prototype, "opCed", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], UpdateMancuernaDto.prototype, "mncNom", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], UpdateMancuernaDto.prototype, "npmcDesc", void 0);
class MancOpResponseDto {
    mancOpId;
    fechaAsignacion;
    fechaTermino;
    operador;
}
exports.MancOpResponseDto = MancOpResponseDto;
class MancuernaResponseDto {
    mncId;
    mncNom;
    npmcDesc;
    status;
    createdAt;
    updatedAt;
    tracto;
    dolly;
    operadorActual;
    tanques;
    historialOperadores;
}
exports.MancuernaResponseDto = MancuernaResponseDto;
class MancuernaItemDto {
    items;
}
exports.MancuernaItemDto = MancuernaItemDto;
class MancuernaItemsDto {
    items;
}
exports.MancuernaItemsDto = MancuernaItemsDto;
//# sourceMappingURL=mancuerna.dto.js.map