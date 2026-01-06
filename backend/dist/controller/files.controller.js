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
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const files_service_1 = require("../service/files.service");
let FilesController = class FilesController {
    filesService;
    constructor(filesService) {
        this.filesService = filesService;
    }
    uploadCarga(file, body) {
        return this.filesService.handleUpload({
            file,
            entity: 'carga',
            entityId: body.entityId,
            type: body.type,
        });
    }
    getCarga(id) {
        return this.filesService.getDocs('carga', id);
    }
    uploadDescarga(file, body) {
        return this.filesService.handleUpload({
            file,
            entity: 'descarga',
            entityId: body.entityId,
            type: body.type,
        });
    }
    getDescarga(id) {
        return this.filesService.getDocs('descarga', id);
    }
    uploadViaje(file, body) {
        return this.filesService.handleUpload({
            file,
            entity: 'viaje',
            entityId: body.entityId,
            type: body.type,
        });
    }
    getViaje(id) {
        return this.filesService.getDocs('viaje', id);
    }
    uploadFolio(file, body) {
        return this.filesService.handleUpload({
            file,
            entity: 'folio',
            entityId: body.entityId,
            type: body.type,
        });
    }
    getFolio(id) {
        return this.filesService.getDocs('folio', id);
    }
    uploadOp(file, body) {
        return this.filesService.handleUpload({
            file,
            entity: 'op',
            entityId: body.entityId,
            type: body.type,
        });
    }
    getOp(id) {
        return this.filesService.getDocs('op', id);
    }
    uploadTracto(file, body) {
        return this.filesService.handleUpload({
            file,
            entity: 'tracto',
            entityId: body.entityId,
            type: body.type,
        });
    }
    getTracto(id) {
        return this.filesService.getDocs('tracto', id);
    }
    uploadTanque(file, body) {
        return this.filesService.handleUpload({
            file,
            entity: 'tanque',
            entityId: body.entityId,
            type: body.type,
        });
    }
    getTanque(id) {
        return this.filesService.getDocs('tanque', id);
    }
    uploadDolly(file, body) {
        return this.filesService.handleUpload({
            file,
            entity: 'dolly',
            entityId: body.entityId,
            type: body.type,
        });
    }
    getDolly(id) {
        return this.filesService.getDocs('dolly', id);
    }
};
exports.FilesController = FilesController;
__decorate([
    (0, common_1.Post)('carga/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "uploadCarga", null);
__decorate([
    (0, common_1.Get)('carga/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "getCarga", null);
__decorate([
    (0, common_1.Post)('descarga/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "uploadDescarga", null);
__decorate([
    (0, common_1.Get)('descarga/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "getDescarga", null);
__decorate([
    (0, common_1.Post)('viaje/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "uploadViaje", null);
__decorate([
    (0, common_1.Get)('viaje/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "getViaje", null);
__decorate([
    (0, common_1.Post)('folio/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "uploadFolio", null);
__decorate([
    (0, common_1.Get)('folio/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "getFolio", null);
__decorate([
    (0, common_1.Post)('op/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "uploadOp", null);
__decorate([
    (0, common_1.Get)('op/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "getOp", null);
__decorate([
    (0, common_1.Post)('tracto/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "uploadTracto", null);
__decorate([
    (0, common_1.Get)('tracto/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "getTracto", null);
__decorate([
    (0, common_1.Post)('tanque/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "uploadTanque", null);
__decorate([
    (0, common_1.Get)('tanque/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "getTanque", null);
__decorate([
    (0, common_1.Post)('dolly/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "uploadDolly", null);
__decorate([
    (0, common_1.Get)('dolly/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "getDolly", null);
exports.FilesController = FilesController = __decorate([
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [files_service_1.FilesService])
], FilesController);
//# sourceMappingURL=files.controller.js.map