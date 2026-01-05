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
exports.EstacionesResponseDto = exports.UpdateEstacionesDto = exports.CreateEstacionesDto = void 0;
const class_validator_1 = require("class-validator");
class CreateEstacionesDto {
    etnsNumPl;
    ernsNombre;
    etnsNombreCorto;
    etnsDireccion;
    etnsUbicacion;
    etnsCiudad;
    status;
}
exports.CreateEstacionesDto = CreateEstacionesDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateEstacionesDto.prototype, "etnsNumPl", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateEstacionesDto.prototype, "ernsNombre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateEstacionesDto.prototype, "etnsNombreCorto", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1050),
    __metadata("design:type", String)
], CreateEstacionesDto.prototype, "etnsDireccion", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1050),
    __metadata("design:type", String)
], CreateEstacionesDto.prototype, "etnsUbicacion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", Object)
], CreateEstacionesDto.prototype, "etnsCiudad", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateEstacionesDto.prototype, "status", void 0);
class UpdateEstacionesDto {
    etnsNumPl;
    ernsNombre;
    etnsNombreCorto;
    etnsDireccion;
    etnsUbicacion;
    etnsCiudad;
    status;
    etnsId;
}
exports.UpdateEstacionesDto = UpdateEstacionesDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], UpdateEstacionesDto.prototype, "etnsNumPl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], UpdateEstacionesDto.prototype, "ernsNombre", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], UpdateEstacionesDto.prototype, "etnsNombreCorto", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1050),
    __metadata("design:type", String)
], UpdateEstacionesDto.prototype, "etnsDireccion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1050),
    __metadata("design:type", String)
], UpdateEstacionesDto.prototype, "etnsUbicacion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", Object)
], UpdateEstacionesDto.prototype, "etnsCiudad", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateEstacionesDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", void 0)
], UpdateEstacionesDto.prototype, "etnsId", void 0);
class EstacionesResponseDto {
    etnsId;
    etnsNumPl;
    ernsNombre;
    etnsNombreCorto;
    etnsDireccion;
    etnsUbicacion;
    etnsCiudad;
    status;
    createdAt;
    updatedAt;
    deletedAt;
}
exports.EstacionesResponseDto = EstacionesResponseDto;
//# sourceMappingURL=estaciones.dto.js.map