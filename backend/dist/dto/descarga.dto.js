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
exports.DescargaItemDto = exports.DescargaItemsDto = exports.DescargaResponseDto = exports.UpdateDescargaDto = exports.CreateDescargaDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateDescargaDto {
    folId;
    descargaFechEntrega;
    descargaBole;
    descargaDensidad;
    descargaTemperatura;
}
exports.CreateDescargaDto = CreateDescargaDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateDescargaDto.prototype, "folId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], CreateDescargaDto.prototype, "descargaFechEntrega", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", Object)
], CreateDescargaDto.prototype, "descargaBole", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", Object)
], CreateDescargaDto.prototype, "descargaDensidad", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", Object)
], CreateDescargaDto.prototype, "descargaTemperatura", void 0);
class UpdateDescargaDto {
    descargaFechEntrega;
    descargaBole;
    descargaDensidad;
    descargaTemperatura;
}
exports.UpdateDescargaDto = UpdateDescargaDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], UpdateDescargaDto.prototype, "descargaFechEntrega", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", Object)
], UpdateDescargaDto.prototype, "descargaBole", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", Object)
], UpdateDescargaDto.prototype, "descargaDensidad", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", Object)
], UpdateDescargaDto.prototype, "descargaTemperatura", void 0);
class DescargaResponseDto {
    descargaId;
    descargaFechEntrega;
    descargaBole;
    descargaDensidad;
    descargaTemperatura;
    createdAt;
    updatedAt;
    folio;
}
exports.DescargaResponseDto = DescargaResponseDto;
class DescargaItemsDto {
    items;
}
exports.DescargaItemsDto = DescargaItemsDto;
class DescargaItemDto {
    items;
}
exports.DescargaItemDto = DescargaItemDto;
//# sourceMappingURL=descarga.dto.js.map