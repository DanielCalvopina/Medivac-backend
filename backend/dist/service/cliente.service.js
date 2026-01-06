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
    toResponseDto(entity) {
        return { ...entity };
    }
    async findAll() {
        const list = await this.repo.find({ order: { createdAt: 'DESC' } });
        return list.map((item) => this.toResponseDto(item));
    }
    async findOne(cliId) {
        const cliente = await this.repo.findOne({ where: { cliId } });
        if (!cliente)
            throw new common_1.NotFoundException(`Cliente con ID ${cliId} no encontrado`);
        return this.toResponseDto(cliente);
    }
    async create(dto) {
        const existe = await this.repo.findOne({
            where: [
                { cliRuc: dto.cliRuc },
                { cliCorreo: dto.cliCorreo }
            ],
            withDeleted: true
        });
        if (existe) {
            throw new common_1.ConflictException('Ya existe un cliente con ese RUC o Correo.');
        }
        const entity = this.repo.create({
            ...dto,
            status: dto.status ?? true
        });
        const saved = await this.repo.save(entity);
        return this.toResponseDto(saved);
    }
    async update(cliId, dto) {
        const cliente = await this.repo.preload({
            cliId,
            ...dto,
        });
        if (!cliente)
            throw new common_1.NotFoundException(`Cliente con ID ${cliId} no encontrado`);
        const saved = await this.repo.save(cliente);
        return this.toResponseDto(saved);
    }
    async toggleStatus(cliId) {
        const cliente = await this.repo.findOne({ where: { cliId } });
        if (!cliente)
            throw new common_1.NotFoundException(`Cliente con ID ${cliId} no encontrado`);
        cliente.status = !cliente.status;
        const saved = await this.repo.save(cliente);
        return this.toResponseDto(saved);
    }
    async remove(cliId) {
        const res = await this.repo.softDelete(cliId);
        if (res.affected === 0) {
            throw new common_1.NotFoundException(`Cliente con ID ${cliId} no encontrado`);
        }
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