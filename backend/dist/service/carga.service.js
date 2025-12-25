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
exports.CargaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Carga_1 = require("../entity/Carga");
const Sellos_1 = require("../entity/Sellos");
const Folio_1 = require("../entity/Folio");
let CargaService = class CargaService {
    cargaRepo;
    sellosRepo;
    folioRepo;
    constructor(cargaRepo, sellosRepo, folioRepo) {
        this.cargaRepo = cargaRepo;
        this.sellosRepo = sellosRepo;
        this.folioRepo = folioRepo;
    }
    toResponseDto(entity) {
        const sellosDto = (entity.sellos || []).map(s => ({
            sellosId: s.sellosId,
            sellosNum: s.sellosNum
        }));
        return {
            cargaId: entity.cargaId,
            cargaFechEntrega: entity.cargaFechEntrega,
            cargaCargaReal: entity.cargaCargaReal,
            cargaBole: entity.cargaBole,
            cargaDensidad: entity.cargaDensidad,
            cargaTemperatura: entity.cargaTemperatura,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
            sellos: sellosDto
        };
    }
    async findAll() {
        const list = await this.cargaRepo.find({
            relations: ['sellos'],
            order: { createdAt: 'DESC' }
        });
        return { items: { cargas: list.map(c => this.toResponseDto(c)) } };
    }
    async findOne(id) {
        const carga = await this.cargaRepo.findOne({
            where: { cargaId: id },
            relations: ['sellos']
        });
        if (!carga)
            throw new common_1.NotFoundException(`Carga ${id} no encontrada`);
        return { items: { carga: this.toResponseDto(carga) } };
    }
    async findByFolio(folId) {
        const list = await this.cargaRepo.find({
            where: { folId },
            relations: ['sellos'],
            order: { createdAt: 'DESC' }
        });
        return { items: { cargas: list.map(c => this.toResponseDto(c)) } };
    }
    async create(dto) {
        const folio = await this.folioRepo.findOne({ where: { folId: dto.folId } });
        if (!folio)
            throw new common_1.NotFoundException(`Folio ${dto.folId} no existe`);
        const carga = this.cargaRepo.create({
            folId: dto.folId,
            cargaFechEntrega: dto.cargaFechEntrega,
            cargaCargaReal: dto.cargaCargaReal,
            cargaBole: dto.cargaBole,
            cargaDensidad: dto.cargaDensidad,
            cargaTemperatura: dto.cargaTemperatura,
        });
        const savedCarga = await this.cargaRepo.save(carga);
        if (dto.sellosLista && dto.sellosLista.length > 0) {
            const sellosEntities = dto.sellosLista.map(num => this.sellosRepo.create({
                cargaId: savedCarga.cargaId,
                sellosNum: num
            }));
            await this.sellosRepo.save(sellosEntities);
        }
        return this.findOne(savedCarga.cargaId);
    }
    async update(id, dto) {
        const carga = await this.cargaRepo.findOne({ where: { cargaId: id } });
        if (!carga)
            throw new common_1.NotFoundException(`Carga ${id} no encontrada`);
        const updated = await this.cargaRepo.preload({
            cargaId: id,
            ...dto
        });
        await this.cargaRepo.save(updated);
        if (dto.sellosLista !== undefined) {
            await this.sellosRepo.delete({ cargaId: id });
            if (dto.sellosLista.length > 0) {
                const sellosEntities = dto.sellosLista.map(num => this.sellosRepo.create({
                    cargaId: id,
                    sellosNum: num
                }));
                await this.sellosRepo.save(sellosEntities);
            }
        }
        return this.findOne(id);
    }
    async remove(id) {
        await this.sellosRepo.delete({ cargaId: id });
        const res = await this.cargaRepo.softDelete(id);
        if (!res.affected)
            throw new common_1.NotFoundException(`Carga ${id} no encontrada`);
        return { deleted: true };
    }
};
exports.CargaService = CargaService;
exports.CargaService = CargaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Carga_1.Carga)),
    __param(1, (0, typeorm_1.InjectRepository)(Sellos_1.Sellos)),
    __param(2, (0, typeorm_1.InjectRepository)(Folio_1.Folio)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CargaService);
//# sourceMappingURL=carga.service.js.map