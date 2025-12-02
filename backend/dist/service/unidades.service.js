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
function withDefaults(data) {
    const now = new Date().toISOString().split('T')[0];
    const hasStatus = ['status', 'estado', 'estatus', 'trStatus', 'tnqStatus', 'dollyStatus']
        .some(k => data[k] !== undefined && data[k] !== null);
    return {
        ...data,
        status: hasStatus ? data.status : true,
        createdAt: data.createdAt || now,
        updatedAt: now,
    };
}
let UnidadesService = class UnidadesService {
    tractoRepo;
    tanqueRepo;
    dollyRepo;
    constructor(tractoRepo, tanqueRepo, dollyRepo) {
        this.tractoRepo = tractoRepo;
        this.tanqueRepo = tanqueRepo;
        this.dollyRepo = dollyRepo;
    }
    listTractos() {
        return this.tractoRepo.find();
    }
    async getTracto(trPlc) {
        const item = await this.tractoRepo.findOne({ where: { trPlc } });
        if (!item)
            throw new common_1.NotFoundException('Tracto no encontrado');
        return item;
    }
    createTracto(data) {
        const payload = withDefaults(data);
        const entity = this.tractoRepo.create(payload);
        return this.tractoRepo.save(entity);
    }
    async updateTracto(trPlc, data) {
        const now = new Date().toISOString().split('T')[0];
        await this.tractoRepo.update({ trPlc }, { ...data, updatedAt: now });
        return this.getTracto(trPlc);
    }
    async deleteTracto(trPlc) {
        const res = await this.tractoRepo.delete({ trPlc });
        if (!res.affected)
            throw new common_1.NotFoundException('Tracto no encontrado');
        return { deleted: true };
    }
    listTanques() {
        return this.tanqueRepo.find();
    }
    async getTanque(tnqId) {
        const item = await this.tanqueRepo.findOne({ where: { tnqId } });
        if (!item)
            throw new common_1.NotFoundException('Tanque no encontrado');
        return item;
    }
    createTanque(data) {
        const payload = withDefaults(data);
        const entity = this.tanqueRepo.create(payload);
        return this.tanqueRepo.save(entity);
    }
    async updateTanque(tnqId, data) {
        const now = new Date().toISOString().split('T')[0];
        await this.tanqueRepo.update({ tnqId }, { ...data, updatedAt: now });
        return this.getTanque(tnqId);
    }
    async deleteTanque(tnqId) {
        const res = await this.tanqueRepo.delete({ tnqId });
        if (!res.affected)
            throw new common_1.NotFoundException('Tanque no encontrado');
        return { deleted: true };
    }
    listDollies() {
        return this.dollyRepo.find();
    }
    async getDolly(dollyId) {
        const item = await this.dollyRepo.findOne({ where: { dollyId } });
        if (!item)
            throw new common_1.NotFoundException('Dolly no encontrado');
        return item;
    }
    createDolly(data) {
        const payload = withDefaults(data);
        const entity = this.dollyRepo.create(payload);
        return this.dollyRepo.save(entity);
    }
    async updateDolly(dollyId, data) {
        const now = new Date().toISOString().split('T')[0];
        await this.dollyRepo.update({ dollyId }, { ...data, updatedAt: now });
        return this.getDolly(dollyId);
    }
    async deleteDolly(dollyId) {
        const res = await this.dollyRepo.delete({ dollyId });
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