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
exports.RutasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Rutas_1 = require("../entity/Rutas");
let RutasService = class RutasService {
    rutasRepo;
    constructor(rutasRepo) {
        this.rutasRepo = rutasRepo;
    }
    toResponseDto(entity) {
        return { ...entity };
    }
    async findAll() {
        const items = await this.rutasRepo.find({ order: { createdAt: 'DESC' } });
        return items.map(item => this.toResponseDto(item));
    }
    async findOne(etnsId2) {
        const ruta = await this.rutasRepo.findOne({ where: { etnsId2 } });
        if (!ruta)
            throw new common_1.NotFoundException(`Ruta con ID ${etnsId2} no encontrada`);
        return this.toResponseDto(ruta);
    }
    async create(dto) {
        const rtsNombre = dto.rtsNombre?.trim();
        const rtsDesc = dto.rtsDesc?.trim();
        if (!rtsNombre || !rtsDesc) {
            throw new common_1.BadRequestException('El nombre y la descripción no pueden estar vacíos.');
        }
        const nuevaRuta = this.rutasRepo.create({
            ...dto,
            rtsNombre,
            rtsDesc,
            status: dto.status ?? true
        });
        const saved = await this.rutasRepo.save(nuevaRuta);
        return this.toResponseDto(saved);
    }
    async update(etnsId2, dto) {
        const ruta = await this.rutasRepo.preload({
            etnsId2,
            ...dto,
            ...(dto.rtsNombre && { rtsNombre: dto.rtsNombre.trim() }),
            ...(dto.rtsDesc && { rtsDesc: dto.rtsDesc.trim() }),
        });
        if (!ruta)
            throw new common_1.NotFoundException(`Ruta con ID ${etnsId2} no encontrada`);
        const saved = await this.rutasRepo.save(ruta);
        return this.toResponseDto(saved);
    }
    async toggleStatus(etnsId2) {
        const ruta = await this.rutasRepo.findOne({ where: { etnsId2 } });
        if (!ruta)
            throw new common_1.NotFoundException(`Ruta con ID ${etnsId2} no encontrada`);
        ruta.status = !ruta.status;
        const saved = await this.rutasRepo.save(ruta);
        return this.toResponseDto(saved);
    }
    async remove(etnsId2) {
        const res = await this.rutasRepo.softDelete(etnsId2);
        if (res.affected === 0) {
            throw new common_1.NotFoundException(`Ruta con ID ${etnsId2} no encontrada`);
        }
        return { deleted: true };
    }
};
exports.RutasService = RutasService;
exports.RutasService = RutasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Rutas_1.Rutas)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RutasService);
//# sourceMappingURL=rutas.service.js.map