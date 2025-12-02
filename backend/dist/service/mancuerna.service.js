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
exports.MancuernaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Mancuerna_1 = require("../entity/Mancuerna");
const Tracto_1 = require("../entity/Tracto");
const Tanque_1 = require("../entity/Tanque");
const Dolly_1 = require("../entity/Dolly");
const Operador_1 = require("../entity/Operador");
const MancTanq_1 = require("../entity/MancTanq");
let MancuernaService = class MancuernaService {
    mancuernaRepo;
    tractoRepo;
    tanqueRepo;
    dollyRepo;
    operadorRepo;
    mancTanqRepo;
    constructor(mancuernaRepo, tractoRepo, tanqueRepo, dollyRepo, operadorRepo, mancTanqRepo) {
        this.mancuernaRepo = mancuernaRepo;
        this.tractoRepo = tractoRepo;
        this.tanqueRepo = tanqueRepo;
        this.dollyRepo = dollyRepo;
        this.operadorRepo = operadorRepo;
        this.mancTanqRepo = mancTanqRepo;
    }
    todayStr() {
        return new Date().toISOString().slice(0, 10);
    }
    async getTanquesPorMancuerna(mncId) {
        const links = await this.mancTanqRepo.find({
            where: { mncId },
            order: { mncTanqId: 'ASC' },
        });
        if (!links.length)
            return [];
        const tnqIds = links
            .map(l => l.tnqId)
            .filter((id) => id !== null);
        if (!tnqIds.length)
            return [];
        const tanques = await this.tanqueRepo.find({
            where: { tnqId: (0, typeorm_2.In)(tnqIds) },
        });
        const map = new Map(tanques.map(t => [t.tnqId, t]));
        return tnqIds
            .map(id => map.get(id))
            .filter((t) => Boolean(t));
    }
    async getTanquesPorMancuernas(mncIds) {
        const out = new Map();
        if (!mncIds.length)
            return out;
        const links = await this.mancTanqRepo.find({
            where: { mncId: (0, typeorm_2.In)(mncIds) },
            order: { mncTanqId: 'ASC' },
        });
        if (!links.length)
            return out;
        const allTnqIds = links
            .map(l => l.tnqId)
            .filter((id) => id !== null);
        const tanques = await this.tanqueRepo.find({
            where: { tnqId: (0, typeorm_2.In)(allTnqIds) },
        });
        const mapT = new Map(tanques.map(t => [t.tnqId, t]));
        for (const l of links) {
            if (l.tnqId === null)
                continue;
            const arr = out.get(l.mncId) ?? [];
            const t = mapT.get(l.tnqId);
            if (t)
                arr.push(t);
            out.set(l.mncId, arr);
        }
        return out;
    }
    async create(payload) {
        const today = this.todayStr();
        const trPlc = payload.trPlc ?? payload.tractoId;
        const opCed = payload.opCed ?? payload.operadorId;
        if (!trPlc)
            throw new common_1.BadRequestException('trPlc es requerido');
        if (payload.dollyId === undefined)
            throw new common_1.BadRequestException('dollyId es requerido');
        const tracto = await this.tractoRepo.findOne({ where: { trPlc } });
        if (!tracto)
            throw new common_1.NotFoundException(`Tracto ${trPlc} no existe`);
        const dol = await this.dollyRepo.findOne({ where: { dollyId: payload.dollyId } });
        if (!dol)
            throw new common_1.NotFoundException(`Dolly ${payload.dollyId} no existe`);
        if (opCed) {
            const op = await this.operadorRepo.findOne({ where: { opCed } });
            if (!op)
                throw new common_1.NotFoundException(`Operador ${opCed} no existe`);
        }
        const incoming = payload.tanquesIds ??
            [payload.tanque1Id, payload.tanque2Id].filter(Boolean);
        const tanquesIds = Array.from(new Set((incoming ?? []).map(v => Number(v)).filter(v => !isNaN(v))));
        const dto = {
            trPlc,
            opCed: opCed ?? null,
            dollyId: payload.dollyId,
            mncNom: payload.mncNom ?? payload.mncCodigo ?? `MNC-${trPlc}`,
            npmcDesc: payload.npmcDesc ?? payload.mncDesc ?? '',
            status: payload.status ?? 1,
            createdAt: today,
            updatedAt: today,
        };
        const mancu = await this.mancuernaRepo.save(this.mancuernaRepo.create(dto));
        if (tanquesIds.length) {
            const rows = tanquesIds.map(tnqId => this.mancTanqRepo.create({ mncId: mancu.mncId, tnqId }));
            await this.mancTanqRepo.save(rows);
        }
        const tanques = await this.getTanquesPorMancuerna(mancu.mncId);
        return { ...mancu, tanques, tanque1: tanques[0] ?? null, tanque2: tanques[1] ?? null };
    }
    async findAll() {
        const base = await this.mancuernaRepo.find({
            relations: ['trPlc2', 'dolly', 'opCed2'],
            order: { mncId: 'ASC' },
        });
        const byId = await this.getTanquesPorMancuernas(base.map(b => b.mncId));
        return base.map(m => {
            const tanques = byId.get(m.mncId) ?? [];
            return { ...m, tanques, tanque1: tanques[0] ?? null, tanque2: tanques[1] ?? null };
        });
    }
    async findOne(id) {
        const mancu = await this.mancuernaRepo.findOne({
            where: { mncId: id },
            relations: ['trPlc2', 'dolly', 'opCed2'],
        });
        if (!mancu)
            throw new common_1.NotFoundException(`Mancuerna ${id} no encontrada`);
        const tanques = await this.getTanquesPorMancuerna(id);
        return { ...mancu, tanques, tanque1: tanques[0] ?? null, tanque2: tanques[1] ?? null };
    }
    async update(id, payload) {
        const today = this.todayStr();
        await this.findOne(id);
        const trPlc = payload.trPlc ?? payload.tractoId;
        const opCed = payload.opCed ?? payload.operadorId;
        const incoming = payload.tanquesIds ??
            [payload.tanque1Id, payload.tanque2Id].filter(Boolean);
        const tanquesIds = Array.from(new Set((incoming ?? []).map(v => Number(v)).filter(v => !isNaN(v))));
        const tanksProvided = 'tanquesIds' in payload ||
            'tanque1Id' in payload ||
            'tanque2Id' in payload;
        const patch = {
            ...(trPlc ? { trPlc } : {}),
            ...(opCed !== undefined ? { opCed } : {}),
            ...(payload.dollyId !== undefined ? { dollyId: payload.dollyId } : {}),
            ...(payload.mncNom !== undefined ? { mncNom: payload.mncNom } : {}),
            ...(payload.npmcDesc !== undefined ? { npmcDesc: payload.npmcDesc } : {}),
            ...(payload.status !== undefined ? { status: payload.status } : {}),
            updatedAt: today,
        };
        await this.mancuernaRepo.update(id, patch);
        if (tanksProvided) {
            await this.mancTanqRepo.delete({ mncId: id });
            if (tanquesIds.length) {
                const rows = tanquesIds.map(tnqId => this.mancTanqRepo.create({ mncId: id, tnqId }));
                await this.mancTanqRepo.save(rows);
            }
        }
        const tanques = await this.getTanquesPorMancuerna(id);
        const mancu = await this.mancuernaRepo.findOne({
            where: { mncId: id },
            relations: ['trPlc2', 'dolly', 'opCed2'],
        });
        return { ...mancu, tanques, tanque1: tanques[0] ?? null, tanque2: tanques[1] ?? null };
    }
    async remove(id) {
        await this.mancTanqRepo.delete({ mncId: id });
        const mancu = await this.mancuernaRepo.findOne({ where: { mncId: id } });
        if (!mancu)
            throw new common_1.NotFoundException(`Mancuerna ${id} no encontrada`);
        await this.mancuernaRepo.remove(mancu);
        return { message: `Mancuerna ${id} eliminada correctamente` };
    }
};
exports.MancuernaService = MancuernaService;
exports.MancuernaService = MancuernaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Mancuerna_1.Mancuerna)),
    __param(1, (0, typeorm_1.InjectRepository)(Tracto_1.Tracto)),
    __param(2, (0, typeorm_1.InjectRepository)(Tanque_1.Tanque)),
    __param(3, (0, typeorm_1.InjectRepository)(Dolly_1.Dolly)),
    __param(4, (0, typeorm_1.InjectRepository)(Operador_1.Operador)),
    __param(5, (0, typeorm_1.InjectRepository)(MancTanq_1.MancTanq)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], MancuernaService);
//# sourceMappingURL=mancuerna.service.js.map