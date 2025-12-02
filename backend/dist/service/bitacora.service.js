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
    bitacoraRepository;
    viajeRepository;
    constructor(bitacoraRepository, viajeRepository) {
        this.bitacoraRepository = bitacoraRepository;
        this.viajeRepository = viajeRepository;
    }
    todayStr() {
        return new Date().toISOString().slice(0, 10);
    }
    async create(data) {
        if (!data.viajeId) {
            throw new common_1.BadRequestException("viajeId es requerido");
        }
        const viaje = await this.viajeRepository.findOne({
            where: { viajeId: data.viajeId },
        });
        if (!viaje) {
            throw new common_1.NotFoundException(`El viaje con ID ${data.viajeId} no existe`);
        }
        const today = this.todayStr();
        const nuevaBitacora = this.bitacoraRepository.create({
            ...data,
            viajeId: data.viajeId,
            viaje: viaje,
            createdAt: today,
            updatedAt: today,
        });
        return await this.bitacoraRepository.save(nuevaBitacora);
    }
    async findAll() {
        return await this.bitacoraRepository.find({
            relations: ['viaje'],
            order: { bitId: 'ASC' },
        });
    }
    async findOne(id) {
        const bitacora = await this.bitacoraRepository.findOne({
            where: { bitId: id },
            relations: ['viaje'],
        });
        if (!bitacora) {
            throw new common_1.NotFoundException(`Bitácora con ID ${id} no encontrada`);
        }
        return bitacora;
    }
    async findByViaje(viajeId) {
        return await this.bitacoraRepository.find({
            where: { viaje: { viajeId } },
            relations: ['viaje'],
            order: { bitId: 'ASC' },
        });
    }
    async update(id, data) {
        const bitacora = await this.findOne(id);
        const today = this.todayStr();
        Object.assign(bitacora, data, { updatedAt: today });
        return await this.bitacoraRepository.save(bitacora);
    }
    async remove(id) {
        const bitacora = await this.findOne(id);
        await this.bitacoraRepository.remove(bitacora);
        return { message: `Bitácora con ID ${id} eliminada correctamente` };
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