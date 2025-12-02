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
let MancuernaController = class MancuernaController {
    mancuernaService;
    constructor(mancuernaService) {
        this.mancuernaService = mancuernaService;
    }
    create(data) {
        return this.mancuernaService.create(data);
    }
    findAll() {
        return this.mancuernaService.findAll();
    }
    findOne(id) {
        return this.mancuernaService.findOne(id);
    }
    update(id, data) {
        return this.mancuernaService.update(id, data);
    }
    remove(id) {
        return this.mancuernaService.remove(id);
    }
};
exports.MancuernaController = MancuernaController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MancuernaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('list'),
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
    (0, common_1.Put)('update/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], MancuernaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MancuernaController.prototype, "remove", null);
exports.MancuernaController = MancuernaController = __decorate([
    (0, common_1.Controller)('mancuerna'),
    __metadata("design:paramtypes", [mancuerna_service_1.MancuernaService])
], MancuernaController);
//# sourceMappingURL=mancuerna.controller.js.map