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
    today() {
        return new Date().toISOString().slice(0, 10);
    }
    async create(data) {
        const today = this.today();
        const viaje = await this.viajeRepo.findOne({
            where: { viajeId: data.viajeId },
        });
        if (!viaje) {
            throw new common_1.NotFoundException(`Viaje ${data.viajeId} no existe`);
        }
        const mancuerna = await this.mancuernaRepo.findOne({
            where: { mncId: viaje.mncId },
        });
        if (!mancuerna) {
            throw new common_1.NotFoundException(`Mancuerna ${viaje.mncId} no existe`);
        }
        if (!data.tnqNumse) {
            throw new common_1.BadRequestException(`tnqNumse es obligatorio.`);
        }
        const tanque = await this.tanqueRepo.findOne({
            where: { tnqNumSer: data.tnqNumse },
        });
        if (!tanque) {
            throw new common_1.NotFoundException(`Tanque ${data.tnqNumse} no existe`);
        }
        try {
            const tanquesManc = await this.mancTanqRepo.find({
                where: { mncId: viaje.mncId },
            });
            const tanquesValidos = tanquesManc
                .map((t) => t.tnqId)
                .filter((id) => id !== null);
            if (tanquesValidos.length > 0 &&
                tanque.tnqId &&
                !tanquesValidos.includes(tanque.tnqId)) {
            }
        }
        catch (e) {
        }
        const producto = await this.productoRepo.findOne({
            where: { prdId: data.prdId },
        });
        if (!producto) {
            throw new common_1.NotFoundException(`Producto ${data.prdId} no existe`);
        }
        const folio = this.folioRepo.create({
            ...data,
            folOv: data.folOv !== undefined && data.folOv !== null
                ? Number(data.folOv)
                : null,
            createdAt: today,
            updatedAt: today,
        });
        const saved = (await this.folioRepo.save(folio));
        if (Array.isArray(data.estaciones)) {
            for (const estId of data.estaciones) {
                const est = await this.estacionesRepo.findOne({
                    where: { etnsId: estId },
                });
                if (est) {
                    await this.estacionesFolioRepo.save(this.estacionesFolioRepo.create({
                        folId: saved.folId,
                        etnsId: est.etnsId,
                    }));
                }
            }
        }
        return this.findOne(saved.folId);
    }
    async findAll() {
        return this.folioRepo.find({
            relations: ['prd', 'viaje'],
        });
    }
    async findByViaje(viajeId) {
        return this.folioRepo.find({
            where: { viajeId },
            relations: [
                'viaje',
                'prd',
                'estacionesFolios',
                'estacionesFolios.etns',
            ],
            order: { folId: 'ASC' },
        });
    }
    async findOne(id) {
        const folio = await this.folioRepo.findOne({
            where: { folId: id },
            relations: [
                'prd',
                'viaje',
                'estacionesFolios',
                'estacionesFolios.etns',
            ],
        });
        if (!folio) {
            throw new common_1.NotFoundException(`Folio ${id} no encontrado`);
        }
        return folio;
    }
    async update(id, data) {
        const today = this.today();
        const folio = await this.findOne(id);
        if (data.tnqNumse) {
            const viaje = folio.viaje;
            if (!viaje) {
                throw new common_1.NotFoundException(`Viaje asignado al folio no existe`);
            }
            const tanque = await this.tanqueRepo.findOne({
                where: { tnqNumSer: data.tnqNumse },
            });
            if (!tanque) {
                throw new common_1.NotFoundException(`Tanque ${data.tnqNumse} no existe`);
            }
            try {
                const tanquesManc = await this.mancTanqRepo.find({
                    where: { mncId: viaje.mncId },
                });
                const tanquesValidos = tanquesManc
                    .map((t) => t.tnqId)
                    .filter((id) => id !== null);
                if (tanquesValidos.length > 0 &&
                    tanque.tnqId &&
                    !tanquesValidos.includes(tanque.tnqId)) {
                }
            }
            catch (e) {
            }
        }
        if (data.folOv !== undefined) {
            data.folOv =
                data.folOv !== null && data.folOv !== ''
                    ? Number(data.folOv)
                    : null;
        }
        Object.assign(folio, data, { updatedAt: today });
        const updated = (await this.folioRepo.save(folio));
        if (Array.isArray(data.estaciones)) {
            await this.estacionesFolioRepo.delete({ folId: id });
            for (const estId of data.estaciones) {
                const est = await this.estacionesRepo.findOne({
                    where: { etnsId: estId },
                });
                if (est) {
                    await this.estacionesFolioRepo.save(this.estacionesFolioRepo.create({
                        folId: id,
                        etnsId: est.etnsId,
                    }));
                }
            }
        }
        return updated;
    }
    async remove(id) {
        await this.estacionesFolioRepo.delete({ folId: id });
        const folio = await this.findOne(id);
        await this.folioRepo.remove(folio);
        return { message: `Folio ${id} eliminado correctamente` };
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