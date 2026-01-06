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
exports.BitacoraService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Bitacora_1 = require("../entity/Bitacora");
const Viaje_1 = require("../entity/Viaje");
let BitacoraService = class BitacoraService {
    bitRepo;
    viajeRepo;
    constructor(bitRepo, viajeRepo) {
        this.bitRepo = bitRepo;
        this.viajeRepo = viajeRepo;
    }
    toResponseDto(entity) {
        return {
            bitId: entity.bitId,
            viajeId: entity.viajeId,
            bitFecIni: entity.bitFecIni,
            bitFecFin: entity.bitFecFin,
            bitTmpTotal: entity.bitTmpTotal,
            bitDesc: entity.bitDesc,
            status: entity.status,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
            deletedAt: entity.deletedAt,
        };
    }
    async create(dto) {
        const viaje = await this.viajeRepo.findOne({ where: { viajeId: dto.viajeId } });
        if (!viaje)
            throw new common_1.NotFoundException(`El viaje con ID ${dto.viajeId} no existe`);
        const entity = this.bitRepo.create({
            ...dto,
            status: dto.status ?? 1,
        });
        const saved = await this.bitRepo.save(entity);
        return this.findOne(saved.bitId);
    }
    async findAll() {
        const list = await this.bitRepo.find({
            order: { createdAt: 'DESC' },
        });
        return { items: { bitacoras: list.map(b => this.toResponseDto(b)) } };
    }
    async findOne(id) {
        const bitacora = await this.bitRepo.findOne({
            where: { bitId: id },
        });
        if (!bitacora)
            throw new common_1.NotFoundException(`Bitácora ${id} no encontrada`);
        return { items: { bitacora: this.toResponseDto(bitacora) } };
    }
    async findByViaje(viajeId) {
        const list = await this.bitRepo.find({
            where: { viajeId },
            order: { createdAt: 'DESC' },
        });
        return { items: { bitacoras: list.map(b => this.toResponseDto(b)) } };
    }
    async update(id, dto) {
        const entity = await this.bitRepo.preload({
            bitId: id,
            ...dto,
        });
        if (!entity)
            throw new common_1.NotFoundException(`Bitácora ${id} no encontrada`);
        await this.bitRepo.save(entity);
        return this.findOne(id);
    }
    async remove(id) {
        const res = await this.bitRepo.softDelete(id);
        if (!res.affected)
            throw new common_1.NotFoundException(`Bitácora ${id} no encontrada`);
        return { deleted: true };
    }
};
exports.BitacoraService = BitacoraService;
exports.BitacoraService = BitacoraService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Bitacora_1.Bitacora)),
    __param(1, (0, typeorm_1.InjectRepository)(Viaje_1.Viaje)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BitacoraService);
//# sourceMappingURL=bitacora.service.js.map