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
exports.FolioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Folio_1 = require("../entity/Folio");
const Producto_1 = require("../entity/Producto");
const Viaje_1 = require("../entity/Viaje");
const Tanque_1 = require("../entity/Tanque");
const Mancuerna_1 = require("../entity/Mancuerna");
const MancTanq_1 = require("../entity/MancTanq");
const Estaciones_1 = require("../entity/Estaciones");
const EstacionesFolio_1 = require("../entity/EstacionesFolio");
let FolioService = class FolioService {
    folioRepo;
    productoRepo;
    viajeRepo;
    mancuernaRepo;
    tanqueRepo;
    mancTanqRepo;
    estacionesRepo;
    estacionesFolioRepo;
    constructor(folioRepo, productoRepo, viajeRepo, mancuernaRepo, tanqueRepo, mancTanqRepo, estacionesRepo, estacionesFolioRepo) {
        this.folioRepo = folioRepo;
        this.productoRepo = productoRepo;
        this.viajeRepo = viajeRepo;
        this.mancuernaRepo = mancuernaRepo;
        this.tanqueRepo = tanqueRepo;
        this.mancTanqRepo = mancTanqRepo;
        this.estacionesRepo = estacionesRepo;
        this.estacionesFolioRepo = estacionesFolioRepo;
    }
    toResponseDto(entity) {
        const estacionesDtos = (entity.estacionesFolios || [])
            .map(ef => ef.etns)
            .filter(e => !!e)
            .map(e => ({ ...e }));
        const cargasDtos = (entity.cargas || []).map(c => {
            return {
                cargaId: c.cargaId,
                cargaFechEntrega: c.cargaFechEntrega,
                cargaCargaReal: c.cargaCargaReal,
                cargaBole: c.cargaBole,
                cargaDensidad: c.cargaDensidad,
                cargaTemperatura: c.cargaTemperatura,
                createdAt: c.createdAt,
                updatedAt: c.updatedAt,
                folio: null,
                sellos: (c.sellos || []).map(s => ({ sellosId: s.sellosId, sellosNum: s.sellosNum }))
            };
        });
        const descargasDtos = (entity.descargas || []).map(d => {
            return {
                descargaId: d.descargaId,
                descargaFechEntrega: d.descargaFechEntrega,
                descargaBole: d.descargaBole,
                descargaDensidad: d.descargaDensidad,
                descargaTemperatura: d.descargaTemperatura,
                createdAt: d.createdAt,
                updatedAt: d.updatedAt,
                folio: null
            };
        });
        return {
            folId: entity.folId,
            folCod: entity.folCod,
            folName: entity.folName,
            folDesc: entity.folDesc,
            tnqNumse: entity.tnqNumse,
            status: entity.status,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
            deletedAt: entity.deletedAt,
            producto: entity.prd ? { ...entity.prd } : null,
            estaciones: estacionesDtos,
            cargas: cargasDtos,
            descargas: descargasDtos
        };
    }
    async create(dto) {
        const viaje = await this.viajeRepo.findOne({ where: { viajeId: dto.viajeId } });
        if (!viaje)
            throw new common_1.NotFoundException(`Viaje ${dto.viajeId} no existe`);
        const tanque = await this.tanqueRepo.findOne({ where: { tnqNumSer: dto.tnqNumse } });
        if (!tanque)
            throw new common_1.NotFoundException(`Tanque con serie ${dto.tnqNumse} no existe`);
        const prod = await this.productoRepo.findOne({ where: { prdId: dto.prdId } });
        if (!prod)
            throw new common_1.NotFoundException(`Producto ${dto.prdId} no existe`);
        const entity = this.folioRepo.create({
            viajeId: dto.viajeId,
            prdId: dto.prdId,
            folCod: dto.folCod,
            folName: dto.folName,
            folDesc: dto.folDesc,
            tnqNumse: dto.tnqNumse,
            status: dto.status ?? true,
        });
        const saved = await this.folioRepo.save(entity);
        if (dto.estacionesIds && dto.estacionesIds.length > 0) {
            const links = dto.estacionesIds.map(etnsId => this.estacionesFolioRepo.create({ folId: saved.folId, etnsId }));
            await this.estacionesFolioRepo.save(links);
        }
        return this.findOne(saved.folId);
    }
    async findAll() {
        const list = await this.folioRepo.find({
            relations: [
                'prd',
                'estacionesFolios', 'estacionesFolios.etns',
                'cargas', 'cargas.sellos',
                'descargas'
            ],
            order: { createdAt: 'DESC' }
        });
        return { items: { folios: list.map(f => this.toResponseDto(f)) } };
    }
    async findByViaje(viajeId) {
        const list = await this.folioRepo.find({
            where: { viajeId },
            relations: [
                'prd',
                'estacionesFolios', 'estacionesFolios.etns',
                'cargas', 'cargas.sellos',
                'descargas'
            ],
            order: { folId: 'ASC' },
        });
        return { items: { folios: list.map(f => this.toResponseDto(f)) } };
    }
    async findOne(id) {
        const folio = await this.folioRepo.findOne({
            where: { folId: id },
            relations: [
                'prd',
                'estacionesFolios', 'estacionesFolios.etns',
                'cargas', 'cargas.sellos',
                'descargas'
            ],
        });
        if (!folio)
            throw new common_1.NotFoundException(`Folio ${id} no encontrado`);
        return { items: { folio: this.toResponseDto(folio) } };
    }
    async update(id, dto) {
        const folio = await this.folioRepo.findOne({
            where: { folId: id },
            relations: ['viaje']
        });
        if (!folio)
            throw new common_1.NotFoundException(`Folio ${id} no encontrado`);
        if (dto.tnqNumse && dto.tnqNumse !== folio.tnqNumse) {
            const tanque = await this.tanqueRepo.findOne({ where: { tnqNumSer: dto.tnqNumse } });
            if (!tanque)
                throw new common_1.NotFoundException(`Tanque ${dto.tnqNumse} no existe`);
        }
        const updatedEntity = await this.folioRepo.preload({
            folId: id,
            ...dto
        });
        await this.folioRepo.save(updatedEntity);
        if (dto.estacionesIds !== undefined) {
            await this.estacionesFolioRepo.delete({ folId: id });
            if (dto.estacionesIds.length > 0) {
                const links = dto.estacionesIds.map(etnsId => this.estacionesFolioRepo.create({ folId: id, etnsId }));
                await this.estacionesFolioRepo.save(links);
            }
        }
        return this.findOne(id);
    }
    async remove(id) {
        await this.estacionesFolioRepo.delete({ folId: id });
        const res = await this.folioRepo.softDelete(id);
        if (!res.affected)
            throw new common_1.NotFoundException(`Folio ${id} no encontrado`);
        return { deleted: true };
    }
};
exports.FolioService = FolioService;
exports.FolioService = FolioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Folio_1.Folio)),
    __param(1, (0, typeorm_1.InjectRepository)(Producto_1.Producto)),
    __param(2, (0, typeorm_1.InjectRepository)(Viaje_1.Viaje)),
    __param(3, (0, typeorm_1.InjectRepository)(Mancuerna_1.Mancuerna)),
    __param(4, (0, typeorm_1.InjectRepository)(Tanque_1.Tanque)),
    __param(5, (0, typeorm_1.InjectRepository)(MancTanq_1.MancTanq)),
    __param(6, (0, typeorm_1.InjectRepository)(Estaciones_1.Estaciones)),
    __param(7, (0, typeorm_1.InjectRepository)(EstacionesFolio_1.EstacionesFolio)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], FolioService);
//# sourceMappingURL=folio.service.js.map