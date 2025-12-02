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
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Cliente_1 = require("../entity/Cliente");
let ClienteService = class ClienteService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    findAll() {
        return this.repo.find();
    }
    async findOne(cliId) {
        const cliente = await this.repo.findOne({ where: { cliId } });
        if (!cliente)
            throw new common_1.NotFoundException('Cliente no encontrado');
        return cliente;
    }
    async create(data) {
        if (data.status === undefined || data.status === null) {
            data.status = true;
        }
        const now = new Date().toISOString().split('T')[0];
        const nuevo = this.repo.create({
            ...data,
            createdAt: now,
            updatedAt: now,
        });
        return await this.repo.save(nuevo);
    }
    async update(cliId, data) {
        const cliente = await this.findOne(cliId);
        if (!cliente)
            throw new common_1.NotFoundException('Cliente no encontrado');
        const now = new Date().toISOString().split('T')[0];
        await this.repo.update(cliId, { ...data, updatedAt: now });
        return this.findOne(cliId);
    }
    async remove(cliId) {
        const res = await this.repo.delete(cliId);
        if (!res.affected)
            throw new common_1.NotFoundException('Cliente no encontrado');
        return { deleted: true };
    }
};
exports.ClienteService = ClienteService;
exports.ClienteService = ClienteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Cliente_1.Cliente)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClienteService);
//# sourceMappingURL=cliente.service.js.map