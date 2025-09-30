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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripService = void 0;
const common_1 = require("@nestjs/common");
const prisma_services_1 = require("../../prisma/prisma.services");
let TripService = class TripService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createTrip(dto) {
        return this.prisma.trip.create({
            data: {
                folio: dto.folio,
                tipo: dto.tipo,
                clienteId: dto.clienteId ?? null,
                productoId: dto.productoId ?? null,
            },
        });
    }
    async findByFolio(folio) {
        const trip = await this.prisma.trip.findUnique({ where: { folio } });
        if (!trip)
            throw new common_1.NotFoundException("Trip no encontrado");
        return trip;
    }
    async get(id) {
        const trip = await this.prisma.trip.findUnique({ where: { id } });
        if (!trip)
            throw new common_1.NotFoundException("Trip no encontrado");
        return trip;
    }
    async addLoad(tripId, dto) {
        await this.ensureTrip(tripId);
        return this.prisma.loadOp.create({
            data: {
                tripId,
                lecturas: dto.lecturas,
                createdBy: dto.createdBy ?? null,
            },
        });
    }
    async addUnload(tripId, dto) {
        await this.ensureTrip(tripId);
        return this.prisma.unloadOp.create({
            data: {
                tripId,
                lecturas: dto.lecturas,
                createdBy: dto.createdBy ?? null,
            },
        });
    }
    async listLoads(tripId) {
        await this.ensureTrip(tripId);
        return this.prisma.loadOp.findMany({
            where: { tripId },
            orderBy: { createdAt: "desc" },
        });
    }
    async listUnloads(tripId) {
        await this.ensureTrip(tripId);
        return this.prisma.unloadOp.findMany({
            where: { tripId },
            orderBy: { createdAt: "desc" },
        });
    }
    async ensureTrip(id) {
        const ok = await this.prisma.trip.findUnique({ where: { id } });
        if (!ok)
            throw new common_1.NotFoundException("Trip no encontrado");
    }
};
exports.TripService = TripService;
exports.TripService = TripService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_services_1.PrismaService])
], TripService);
