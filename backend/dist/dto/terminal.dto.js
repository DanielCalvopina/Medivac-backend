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
exports.TerminalResponseDto = exports.UpdateTerminalDto = exports.CreateTerminalDto = void 0;
const class_validator_1 = require("class-validator");
class CreateTerminalDto {
    trmNombre;
    trmNombreCorto;
    trmDireccion;
    trmUbicacion;
    trmTipo;
    trmCiudad;
    status;
}
exports.CreateTerminalDto = CreateTerminalDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateTerminalDto.prototype, "trmNombre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateTerminalDto.prototype, "trmNombreCorto", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateTerminalDto.prototype, "trmDireccion", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1050),
    __metadata("design:type", String)
], CreateTerminalDto.prototype, "trmUbicacion", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateTerminalDto.prototype, "trmTipo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateTerminalDto.prototype, "trmCiudad", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateTerminalDto.prototype, "status", void 0);
class UpdateTerminalDto {
    trmNombre;
    trmNombreCorto;
    trmDireccion;
    trmUbicacion;
    trmTipo;
    trmCiudad;
    status;
    trmId;
}
exports.UpdateTerminalDto = UpdateTerminalDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], UpdateTerminalDto.prototype, "trmNombre", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], UpdateTerminalDto.prototype, "trmNombreCorto", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], UpdateTerminalDto.prototype, "trmDireccion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1050),
    __metadata("design:type", String)
], UpdateTerminalDto.prototype, "trmUbicacion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], UpdateTerminalDto.prototype, "trmTipo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], UpdateTerminalDto.prototype, "trmCiudad", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateTerminalDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", void 0)
], UpdateTerminalDto.prototype, "trmId", void 0);
class TerminalResponseDto {
    trmId;
    trmNombre;
    trmNombreCorto;
    trmDireccion;
    trmUbicacion;
    trmTipo;
    trmCiudad;
    status;
    createdAt;
    updatedAt;
    deletedAt;
}
exports.TerminalResponseDto = TerminalResponseDto;
//# sourceMappingURL=terminal.dto.js.map