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
exports.MancuernaController = void 0;
const common_1 = require("@nestjs/common");
const mancuerna_service_1 = require("../service/mancuerna.service");
const mancuerna_dto_1 = require("../dto/mancuerna.dto");
let MancuernaController = class MancuernaController {
    svc;
    constructor(svc) {
        this.svc = svc;
    }
    findAll() {
        return this.svc.findAll();
    }
    findOne(id) {
        return this.svc.findOne(id);
    }
    create(body) {
        return this.svc.create(body);
    }
    desarmar(id) {
        return this.svc.desarmar(id);
    }
    update(id, body) {
        return null;
    }
};
exports.MancuernaController = MancuernaController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MancuernaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MancuernaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mancuerna_dto_1.CreateMancuernaDto]),
    __metadata("design:returntype", void 0)
], MancuernaController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id/desarmar'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MancuernaController.prototype, "desarmar", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, mancuerna_dto_1.UpdateMancuernaDto]),
    __metadata("design:returntype", void 0)
], MancuernaController.prototype, "update", null);
exports.MancuernaController = MancuernaController = __decorate([
    (0, common_1.Controller)('mancuernas'),
    __metadata("design:paramtypes", [mancuerna_service_1.MancuernaService])
], MancuernaController);
//# sourceMappingURL=mancuerna.controller.js.map