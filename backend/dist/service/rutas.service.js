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
    async findAll() {
        return this.rutasRepo.find();
    }
    async findOne(etnsId2) {
        const ruta = await this.rutasRepo.findOne({ where: { etnsId2 } });
        if (!ruta)
            throw new common_1.NotFoundException('Ruta no encontrada');
        return ruta;
    }
    async create(data) {
        const now = new Date().toISOString().split('T')[0];
        const nuevaRuta = this.rutasRepo.create({
            ...data,
            createdAt: now,
            updatedAt: now,
        });
        return this.rutasRepo.save(nuevaRuta);
    }
    async update(etnsId2, data) {
        const ruta = await this.findOne(etnsId2);
        Object.assign(ruta, data, {
            updatedAt: new Date().toISOString().split('T')[0],
        });
        return this.rutasRepo.save(ruta);
    }
    async remove(etnsId2) {
        const result = await this.rutasRepo.delete({ etnsId2 });
        if (!result.affected)
            throw new common_1.NotFoundException('Ruta no encontrada');
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