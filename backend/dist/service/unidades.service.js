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
exports.UnidadesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Tracto_1 = require("../entity/Tracto");
const Tanque_1 = require("../entity/Tanque");
const Dolly_1 = require("../entity/Dolly");
let UnidadesService = class UnidadesService {
    tractoRepo;
    tanqueRepo;
    dollyRepo;
    constructor(tractoRepo, tanqueRepo, dollyRepo) {
        this.tractoRepo = tractoRepo;
        this.tanqueRepo = tanqueRepo;
        this.dollyRepo = dollyRepo;
    }
    tractoToResponse(x) {
        return { ...x };
    }
    tanqueToResponse(x) {
        return { ...x };
    }
    dollyToResponse(x) {
        return { ...x };
    }
    async getUnidades() {
        const [tractos, tanques, dollies] = await Promise.all([
            this.tractoRepo.find({ order: { createdAt: 'DESC' } }),
            this.tanqueRepo.find({ order: { createdAt: 'DESC' } }),
            this.dollyRepo.find({ order: { createdAt: 'DESC' } }),
        ]);
        return {
            items: {
                tractos: tractos.map((x) => this.tractoToResponse(x)),
                tanques: tanques.map((x) => this.tanqueToResponse(x)),
                dollies: dollies.map((x) => this.dollyToResponse(x)),
            },
        };
    }
    async listTractos() {
        const items = await this.tractoRepo.find({ order: { createdAt: 'DESC' } });
        return items.map((x) => this.tractoToResponse(x));
    }
    async getTracto(trPlc) {
        const item = await this.tractoRepo.findOne({ where: { trPlc } });
        if (!item)
            throw new common_1.NotFoundException('Tracto no encontrado');
        return this.tractoToResponse(item);
    }
    async createTracto(dto) {
        const entity = this.tractoRepo.create({
            ...dto,
            status: dto.status ?? 1,
        });
        const saved = await this.tractoRepo.save(entity);
        return this.tractoToResponse(saved);
    }
    async updateTracto(trPlc, dto) {
        const loaded = await this.tractoRepo.preload({
            trPlc,
            ...dto,
        });
        if (!loaded)
            throw new common_1.NotFoundException('Tracto no encontrado');
        const saved = await this.tractoRepo.save(loaded);
        return this.tractoToResponse(saved);
    }
    async changeTractoStatus(trPlc, newStatus) {
        const item = await this.tractoRepo.findOne({ where: { trPlc } });
        if (!item)
            throw new common_1.NotFoundException('Tracto no encontrado');
        item.status = newStatus;
        const saved = await this.tractoRepo.save(item);
        return this.tractoToResponse(saved);
    }
    async deleteTracto(trPlc) {
        const res = await this.tractoRepo.softDelete({ trPlc });
        if (!res.affected)
            throw new common_1.NotFoundException('Tracto no encontrado');
        return { deleted: true };
    }
    async listTanques() {
        const items = await this.tanqueRepo.find({ order: { createdAt: 'DESC' } });
        return items.map((x) => this.tanqueToResponse(x));
    }
    async getTanque(tnqId) {
        const item = await this.tanqueRepo.findOne({ where: { tnqId } });
        if (!item)
            throw new common_1.NotFoundException('Tanque no encontrado');
        return this.tanqueToResponse(item);
    }
    async createTanque(dto) {
        const entity = this.tanqueRepo.create({
            ...dto,
            status: dto.status ?? 1,
        });
        const saved = await this.tanqueRepo.save(entity);
        return this.tanqueToResponse(saved);
    }
    async updateTanque(tnqId, dto) {
        const loaded = await this.tanqueRepo.preload({
            tnqId,
            ...dto,
        });
        if (!loaded)
            throw new common_1.NotFoundException('Tanque no encontrado');
        const saved = await this.tanqueRepo.save(loaded);
        return this.tanqueToResponse(saved);
    }
    async changeTanqueStatus(tnqId, newStatus) {
        const item = await this.tanqueRepo.findOne({ where: { tnqId } });
        if (!item)
            throw new common_1.NotFoundException('Tanque no encontrado');
        item.status = newStatus;
        const saved = await this.tanqueRepo.save(item);
        return this.tanqueToResponse(saved);
    }
    async deleteTanque(tnqId) {
        const res = await this.tanqueRepo.softDelete({ tnqId });
        if (!res.affected)
            throw new common_1.NotFoundException('Tanque no encontrado');
        return { deleted: true };
    }
    async listDollies() {
        const items = await this.dollyRepo.find({ order: { createdAt: 'DESC' } });
        return items.map((x) => this.dollyToResponse(x));
    }
    async getDolly(dollyId) {
        const item = await this.dollyRepo.findOne({ where: { dollyId } });
        if (!item)
            throw new common_1.NotFoundException('Dolly no encontrado');
        return this.dollyToResponse(item);
    }
    async createDolly(dto) {
        const entity = this.dollyRepo.create({
            ...dto,
            status: dto.status ?? 1,
        });
        const saved = await this.dollyRepo.save(entity);
        return this.dollyToResponse(saved);
    }
    async updateDolly(dollyId, dto) {
        const loaded = await this.dollyRepo.preload({
            dollyId,
            ...dto,
        });
        if (!loaded)
            throw new common_1.NotFoundException('Dolly no encontrado');
        const saved = await this.dollyRepo.save(loaded);
        return this.dollyToResponse(saved);
    }
    async changeDollyStatus(dollyId, newStatus) {
        const item = await this.dollyRepo.findOne({ where: { dollyId } });
        if (!item)
            throw new common_1.NotFoundException('Dolly no encontrado');
        item.status = newStatus;
        const saved = await this.dollyRepo.save(item);
        return this.dollyToResponse(saved);
    }
    async deleteDolly(dollyId) {
        const res = await this.dollyRepo.softDelete({ dollyId });
        if (!res.affected)
            throw new common_1.NotFoundException('Dolly no encontrado');
        return { deleted: true };
    }
};
exports.UnidadesService = UnidadesService;
exports.UnidadesService = UnidadesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Tracto_1.Tracto)),
    __param(1, (0, typeorm_1.InjectRepository)(Tanque_1.Tanque)),
    __param(2, (0, typeorm_1.InjectRepository)(Dolly_1.Dolly)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UnidadesService);
//# sourceMappingURL=unidades.service.js.map