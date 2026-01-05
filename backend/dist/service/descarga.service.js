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
exports.DescargaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Descarga_1 = require("../entity/Descarga");
const Folio_1 = require("../entity/Folio");
let DescargaService = class DescargaService {
    descargaRepo;
    folioRepo;
    constructor(descargaRepo, folioRepo) {
        this.descargaRepo = descargaRepo;
        this.folioRepo = folioRepo;
    }
    toResponseDto(entity) {
        return {
            descargaId: entity.descargaId,
            descargaFechEntrega: entity.descargaFechEntrega,
            descargaBole: entity.descargaBole,
            descargaDensidad: entity.descargaDensidad,
            descargaTemperatura: entity.descargaTemperatura,
            folio: entity.fol ? { ...entity.fol } : null,
        };
    }
    async findAll() {
        const list = await this.descargaRepo.find({
            relations: ['fol'],
        });
        return { items: { descargas: list.map(d => this.toResponseDto(d)) } };
    }
    async findOne(id) {
        const descarga = await this.descargaRepo.findOne({
            where: { descargaId: id },
            relations: ['fol']
        });
        if (!descarga)
            throw new common_1.NotFoundException(`Descarga ${id} no encontrada`);
        return { items: { descarga: this.toResponseDto(descarga) } };
    }
    async findByFolio(folId) {
        const list = await this.descargaRepo.find({
            where: { folId },
            relations: ['fol'],
        });
        return { items: { descargas: list.map(d => this.toResponseDto(d)) } };
    }
    async create(dto) {
        const folio = await this.folioRepo.findOne({ where: { folId: dto.folId } });
        if (!folio)
            throw new common_1.NotFoundException(`Folio ${dto.folId} no existe`);
        const entity = this.descargaRepo.create({
            folId: dto.folId,
            descargaFechEntrega: dto.descargaFechEntrega,
            descargaBole: dto.descargaBole,
            descargaDensidad: dto.descargaDensidad,
            descargaTemperatura: dto.descargaTemperatura,
        });
        const saved = await this.descargaRepo.save(entity);
        return this.findOne(saved.descargaId);
    }
    async update(id, dto) {
        const descarga = await this.descargaRepo.preload({
            descargaId: id,
            ...dto
        });
        if (!descarga)
            throw new common_1.NotFoundException(`Descarga ${id} no encontrada`);
        await this.descargaRepo.save(descarga);
        return this.findOne(id);
    }
    async remove(id) {
        const res = await this.descargaRepo.softDelete(id);
        if (!res.affected)
            throw new common_1.NotFoundException(`Descarga ${id} no encontrada`);
        return { deleted: true };
    }
};
exports.DescargaService = DescargaService;
exports.DescargaService = DescargaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Descarga_1.Descarga)),
    __param(1, (0, typeorm_1.InjectRepository)(Folio_1.Folio)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], DescargaService);
//# sourceMappingURL=descarga.service.js.map