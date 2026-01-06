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
exports.ProductoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Producto_1 = require("../entity/Producto");
let ProductoService = class ProductoService {
    productoRepo;
    constructor(productoRepo) {
        this.productoRepo = productoRepo;
    }
    toResponseDto(entity) {
        return { ...entity };
    }
    async findAll() {
        const items = await this.productoRepo.find({ order: { createdAt: 'DESC' } });
        return items.map(item => this.toResponseDto(item));
    }
    async findOne(id) {
        const producto = await this.productoRepo.findOne({ where: { prdId: id } });
        if (!producto) {
            throw new common_1.NotFoundException(`Producto con ID ${id} no encontrado.`);
        }
        return this.toResponseDto(producto);
    }
    async create(dto) {
        if (dto.prdMin > dto.prdMax) {
            throw new common_1.BadRequestException('El valor mínimo (prdMin) no puede ser mayor que el máximo (prdMax).');
        }
        const producto = this.productoRepo.create({
            ...dto,
            status: dto.status ?? true
        });
        const saved = await this.productoRepo.save(producto);
        return this.toResponseDto(saved);
    }
    async update(id, dto) {
        const merged = await this.productoRepo.preload({
            prdId: id,
            ...dto,
        });
        if (!merged)
            throw new common_1.NotFoundException(`Producto con ID ${id} no encontrado.`);
        if (merged.prdMin > merged.prdMax) {
            throw new common_1.BadRequestException('Conflicto de rangos: El valor mínimo no puede ser mayor que el máximo.');
        }
        const saved = await this.productoRepo.save(merged);
        return this.toResponseDto(saved);
    }
    async toggleStatus(id) {
        const producto = await this.productoRepo.findOne({ where: { prdId: id } });
        if (!producto)
            throw new common_1.NotFoundException(`Producto con ID ${id} no encontrado.`);
        producto.status = !producto.status;
        const saved = await this.productoRepo.save(producto);
        return this.toResponseDto(saved);
    }
    async remove(id) {
        const res = await this.productoRepo.softDelete(id);
        if (res.affected === 0) {
            throw new common_1.NotFoundException(`Producto con ID ${id} no encontrado.`);
        }
        return { deleted: true };
    }
};
exports.ProductoService = ProductoService;
exports.ProductoService = ProductoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Producto_1.Producto)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductoService);
//# sourceMappingURL=producto.service.js.map