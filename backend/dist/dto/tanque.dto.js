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
exports.TanqueResponseDto = exports.UpdateTanqueDto = exports.CreateTanqueDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateTanqueDto {
    tnqPlacas;
    tnqEco;
    tnqEcoVal;
    tnqNumSer;
    tnqMrc;
    tnqMod;
    tnqColor;
    tnqNmCrc;
    tnqNmDblArt;
    tnqClcDblArt;
    tnqNoOfiCre;
    tnqPermisoSct;
    tnqCapacidad;
    tnqDesc;
    status;
    tnqPolizaSeguro;
    tnqExpPoliza;
}
exports.CreateTanqueDto = CreateTanqueDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CreateTanqueDto.prototype, "tnqPlacas", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CreateTanqueDto.prototype, "tnqEco", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CreateTanqueDto.prototype, "tnqEcoVal", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CreateTanqueDto.prototype, "tnqNumSer", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CreateTanqueDto.prototype, "tnqMrc", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CreateTanqueDto.prototype, "tnqMod", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CreateTanqueDto.prototype, "tnqColor", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CreateTanqueDto.prototype, "tnqNmCrc", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CreateTanqueDto.prototype, "tnqNmDblArt", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CreateTanqueDto.prototype, "tnqClcDblArt", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CreateTanqueDto.prototype, "tnqNoOfiCre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CreateTanqueDto.prototype, "tnqPermisoSct", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CreateTanqueDto.prototype, "tnqCapacidad", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateTanqueDto.prototype, "tnqDesc", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateTanqueDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], CreateTanqueDto.prototype, "tnqPolizaSeguro", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateTanqueDto.prototype, "tnqExpPoliza", void 0);
class UpdateTanqueDto {
    tnqPlacas;
    tnqEco;
    tnqEcoVal;
    tnqNumSer;
    tnqMrc;
    tnqMod;
    tnqColor;
    tnqNmCrc;
    tnqNmDblArt;
    tnqClcDblArt;
    tnqNoOfiCre;
    tnqPermisoSct;
    tnqCapacidad;
    tnqDesc;
    status;
    tnqPolizaSeguro;
    tnqExpPoliza;
}
exports.UpdateTanqueDto = UpdateTanqueDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], UpdateTanqueDto.prototype, "tnqPlacas", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], UpdateTanqueDto.prototype, "tnqEco", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], UpdateTanqueDto.prototype, "tnqEcoVal", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], UpdateTanqueDto.prototype, "tnqNumSer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], UpdateTanqueDto.prototype, "tnqMrc", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], UpdateTanqueDto.prototype, "tnqMod", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], UpdateTanqueDto.prototype, "tnqColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], UpdateTanqueDto.prototype, "tnqNmCrc", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], UpdateTanqueDto.prototype, "tnqNmDblArt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], UpdateTanqueDto.prototype, "tnqClcDblArt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], UpdateTanqueDto.prototype, "tnqNoOfiCre", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], UpdateTanqueDto.prototype, "tnqPermisoSct", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], UpdateTanqueDto.prototype, "tnqCapacidad", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], UpdateTanqueDto.prototype, "tnqDesc", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateTanqueDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(60),
    __metadata("design:type", String)
], UpdateTanqueDto.prototype, "tnqPolizaSeguro", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateTanqueDto.prototype, "tnqExpPoliza", void 0);
class TanqueResponseDto {
    tnqId;
    tnqPlacas;
    tnqEco;
    tnqEcoVal;
    tnqNumSer;
    tnqMrc;
    tnqMod;
    tnqColor;
    tnqNmCrc;
    tnqNmDblArt;
    tnqClcDblArt;
    tnqNoOfiCre;
    tnqPermisoSct;
    tnqCapacidad;
    tnqDesc;
    status;
    createdAt;
    updatedAt;
    deletedAt;
    tnqPolizaSeguro;
    tnqExpPoliza;
}
exports.TanqueResponseDto = TanqueResponseDto;
//# sourceMappingURL=tanque.dto.js.map