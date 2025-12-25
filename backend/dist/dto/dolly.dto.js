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
exports.DollyResponseDto = exports.UpdateDollyDto = exports.CreateDollyDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateDollyDto {
    dollyId;
    dollyNumSer_4Ul;
    dollyNumSer;
    dollyMr;
    dollyMod;
    dollyColor;
    dollyDesc;
    status;
    dollyPolizaSeguro;
    dollyExpPoliza;
}
exports.CreateDollyDto = CreateDollyDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], CreateDollyDto.prototype, "dollyId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], CreateDollyDto.prototype, "dollyNumSer_4Ul", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], CreateDollyDto.prototype, "dollyNumSer", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], CreateDollyDto.prototype, "dollyMr", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], CreateDollyDto.prototype, "dollyMod", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], CreateDollyDto.prototype, "dollyColor", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateDollyDto.prototype, "dollyDesc", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateDollyDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CreateDollyDto.prototype, "dollyPolizaSeguro", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateDollyDto.prototype, "dollyExpPoliza", void 0);
class UpdateDollyDto {
    dollyNumSer_4Ul;
    dollyNumSer;
    dollyMr;
    dollyMod;
    dollyColor;
    dollyDesc;
    status;
    dollyPolizaSeguro;
    dollyExpPoliza;
    dollyId;
}
exports.UpdateDollyDto = UpdateDollyDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], UpdateDollyDto.prototype, "dollyNumSer_4Ul", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], UpdateDollyDto.prototype, "dollyNumSer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], UpdateDollyDto.prototype, "dollyMr", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], UpdateDollyDto.prototype, "dollyMod", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], UpdateDollyDto.prototype, "dollyColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], UpdateDollyDto.prototype, "dollyDesc", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateDollyDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], UpdateDollyDto.prototype, "dollyPolizaSeguro", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateDollyDto.prototype, "dollyExpPoliza", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", void 0)
], UpdateDollyDto.prototype, "dollyId", void 0);
class DollyResponseDto {
    dollyId;
    dollyNumSer_4Ul;
    dollyNumSer;
    dollyMr;
    dollyMod;
    dollyColor;
    dollyDesc;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    dollyPolizaSeguro;
    dollyExpPoliza;
}
exports.DollyResponseDto = DollyResponseDto;
//# sourceMappingURL=dolly.dto.js.map