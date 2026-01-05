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
exports.RutasResponseDto = exports.UpdateRutasDto = exports.CreateRutasDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const class_validator_1 = require("class-validator");
class CreateRutasDto {
    rtsNombre;
    rtsDesc;
    status;
    rtsMaps;
    rtsOrigen;
    rtsDestino;
}
exports.CreateRutasDto = CreateRutasDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateRutasDto.prototype, "rtsNombre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateRutasDto.prototype, "rtsDesc", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateRutasDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1050),
    __metadata("design:type", String)
], CreateRutasDto.prototype, "rtsMaps", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateRutasDto.prototype, "rtsOrigen", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateRutasDto.prototype, "rtsDestino", void 0);
class UpdateRutasDto extends (0, mapped_types_1.PartialType)(CreateRutasDto) {
}
exports.UpdateRutasDto = UpdateRutasDto;
class RutasResponseDto {
    etnsId2;
    rtsNombre;
    rtsDesc;
    rtsMaps;
    rtsOrigen;
    rtsDestino;
    status;
    createdAt;
    updatedAt;
    deletedAt;
}
exports.RutasResponseDto = RutasResponseDto;
//# sourceMappingURL=rutas.dto.js.map