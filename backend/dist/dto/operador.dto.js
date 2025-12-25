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
exports.OperadorResponseDto = exports.UpdateOperadorDto = exports.CreateOperadorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const class_validator_1 = require("class-validator");
class CreateOperadorDto {
    opCed;
    opNombre;
    opApellido;
    opTelefono;
    opCorreo;
    opNumLicencia;
    opFcVencLicencia;
    opFcVencDc3;
    opFcVenCertMed;
    status;
    opTimeToExp;
}
exports.CreateOperadorDto = CreateOperadorDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], CreateOperadorDto.prototype, "opCed", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CreateOperadorDto.prototype, "opNombre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CreateOperadorDto.prototype, "opApellido", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CreateOperadorDto.prototype, "opTelefono", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CreateOperadorDto.prototype, "opCorreo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CreateOperadorDto.prototype, "opNumLicencia", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateOperadorDto.prototype, "opFcVencLicencia", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateOperadorDto.prototype, "opFcVencDc3", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateOperadorDto.prototype, "opFcVenCertMed", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateOperadorDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateOperadorDto.prototype, "opTimeToExp", void 0);
class UpdateOperadorDto extends (0, mapped_types_1.PartialType)(CreateOperadorDto) {
}
exports.UpdateOperadorDto = UpdateOperadorDto;
class OperadorResponseDto {
    opCed;
    opNombre;
    opApellido;
    opTelefono;
    opCorreo;
    opNumLicencia;
    opFcVencLicencia;
    opFcVencDc3;
    opFcVenCertMed;
    opTimeToExp;
    status;
    createdAt;
    updatedAt;
    deletedAt;
}
exports.OperadorResponseDto = OperadorResponseDto;
//# sourceMappingURL=operador.dto.js.map