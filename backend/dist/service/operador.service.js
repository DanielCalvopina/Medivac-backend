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
exports.OperadorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Operador_1 = require("../entity/Operador");
let OperadorService = class OperadorService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    findAll() {
        return this.repo.find();
    }
    async findOne(opCed) {
        const item = await this.repo.findOne({ where: { opCed } });
        if (!item)
            throw new common_1.NotFoundException('Operador no encontrado');
        return item;
    }
    async create(data) {
        if (data.status === undefined || data.status === null)
            data.status = true;
        const now = new Date();
        data.createdAt = now;
        data.updatedAt = now;
        if (!data.opVerificate || data.opVerificate.trim() === '') {
            data.opVerificate = 'pendiente';
        }
        const entity = this.repo.create(data);
        return this.repo.save(entity);
    }
    async update(opCed, data) {
        await this.findOne(opCed);
        data.updatedAt = new Date();
        await this.repo.update({ opCed }, data);
        return this.findOne(opCed);
    }
    async remove(opCed) {
        const res = await this.repo.delete({ opCed });
        if (!res.affected)
            throw new common_1.NotFoundException('Operador no encontrado');
        return { deleted: true };
    }
};
exports.OperadorService = OperadorService;
exports.OperadorService = OperadorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Operador_1.Operador)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OperadorService);
//# sourceMappingURL=operador.service.js.map