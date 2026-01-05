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
    toResponseDto(entity) {
        return { ...entity };
    }
    async findAll() {
        const list = await this.repo.find({ order: { createdAt: 'DESC' } });
        return list.map((item) => this.toResponseDto(item));
    }
    async findOne(opCed) {
        const item = await this.repo.findOne({ where: { opCed } });
        if (!item)
            throw new common_1.NotFoundException(`Operador ${opCed} no encontrado`);
        return this.toResponseDto(item);
    }
    async create(dto) {
        const exists = await this.repo.findOne({
            where: { opCed: dto.opCed },
            withDeleted: true
        });
        if (exists) {
            throw new common_1.ConflictException('El operador con esa cédula ya existe.');
        }
        const entity = this.repo.create({
            ...dto,
            status: dto.status ?? true,
        });
        const saved = await this.repo.save(entity);
        return this.toResponseDto(saved);
    }
    async update(opCed, dto) {
        const entity = await this.repo.preload({
            opCed,
            ...dto,
        });
        if (!entity)
            throw new common_1.NotFoundException('Operador no encontrado');
        const saved = await this.repo.save(entity);
        return this.toResponseDto(saved);
    }
    async toggleStatus(opCed) {
        const operator = await this.repo.findOne({ where: { opCed } });
        if (!operator)
            throw new common_1.NotFoundException('Operador no encontrado');
        operator.status = !operator.status;
        const saved = await this.repo.save(operator);
        return this.toResponseDto(saved);
    }
    async remove(opCed) {
        const result = await this.repo.softDelete(opCed);
        if (result.affected === 0) {
            throw new common_1.NotFoundException('Operador no encontrado');
        }
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