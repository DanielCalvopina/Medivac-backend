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
const MancOp_1 = require("../entity/MancOp");
let MancuernaService = class MancuernaService {
    mancuernaRepo;
    tractoRepo;
    dollyRepo;
    tanqueRepo;
    opRepo;
    mancTanqRepo;
    mancOpRepo;
    constructor(mancuernaRepo, tractoRepo, dollyRepo, tanqueRepo, opRepo, mancTanqRepo, mancOpRepo) {
        this.mancuernaRepo = mancuernaRepo;
        this.tractoRepo = tractoRepo;
        this.dollyRepo = dollyRepo;
        this.tanqueRepo = tanqueRepo;
        this.opRepo = opRepo;
        this.mancTanqRepo = mancTanqRepo;
        this.mancOpRepo = mancOpRepo;
    }
    toResponseDto(m) {
        const tanquesDtos = (m.mancTanqs || [])
            .map((mt) => mt.tnq)
            .filter((t) => !!t)
            .map((t) => ({ ...t }));
        const historialRaw = m.mancOps || [];
        const historial = historialRaw.map(mo => ({
            mancOpId: mo.mancOpId,
            fechaAsignacion: mo.createdAt,
            fechaTermino: mo.deletedAt,
            operador: { ...mo.operador }
        }));
        const activeLog = historialRaw.find(mo => !mo.deletedAt);
        const operadorActual = activeLog && activeLog.operador
            ? { ...activeLog.operador }
            : null;
        return {
            mncId: m.mncId,
            mncNom: m.mncNom,
            npmcDesc: m.npmcDesc,
            status: m.status,
            createdAt: m.createdAt,
            updatedAt: m.updatedAt,
            tracto: m.tracto ? { ...m.tracto } : null,
            dolly: m.dolly ? { ...m.dolly } : null,
            operadorActual: operadorActual,
            tanques: tanquesDtos,
            historialOperadores: historial
        };
    }
    async ocuparComponentes(trPlc, dollyId, tanquesIds, opCed) {
        await this.tractoRepo.update(trPlc, { status: 2 });
        await this.dollyRepo.update(dollyId, { status: 2 });
        if (tanquesIds.length) {
            await this.tanqueRepo.update({ tnqId: (0, typeorm_2.In)(tanquesIds) }, { status: 2 });
        }
        await this.opRepo.update(opCed, { status: false });
    }
    async liberarComponentes(trPlc, dollyId, tanquesIds) {
        await this.tractoRepo.update(trPlc, { status: 1 });
        await this.dollyRepo.update(dollyId, { status: 1 });
        if (tanquesIds.length) {
            await this.tanqueRepo.update({ tnqId: (0, typeorm_2.In)(tanquesIds) }, { status: 1 });
        }
    }
    async validarDisponibilidad(trPlc, dollyId, tanquesIds, opCed) {
        const tr = await this.tractoRepo.findOneBy({ trPlc });
        if (!tr || tr.status !== 1)
            throw new common_1.ConflictException(`Tracto ${trPlc} no disponible`);
        const dl = await this.dollyRepo.findOneBy({ dollyId });
        if (!dl || dl.status !== 1)
            throw new common_1.ConflictException(`Dolly ${dollyId} no disponible`);
        const op = await this.opRepo.findOneBy({ opCed });
        if (!op)
            throw new common_1.NotFoundException(`Operador ${opCed} no existe`);
        if (op.status === false)
            throw new common_1.ConflictException(`Operador ${opCed} ya está ocupado`);
        if (tanquesIds.length > 0) {
            const tqs = await this.tanqueRepo.find({ where: { tnqId: (0, typeorm_2.In)(tanquesIds) } });
            if (tqs.length !== tanquesIds.length)
                throw new common_1.NotFoundException('Faltan tanques');
            for (const t of tqs) {
                if (t.status !== 1)
                    throw new common_1.ConflictException(`Tanque ${t.tnqPlacas} ocupado`);
            }
        }
    }
    async buscarMancuernaExistente(trPlc, dollyId, tanquesIds) {
        const candidatos = await this.mancuernaRepo.find({
            where: { trPlc, dollyId },
            relations: ['mancTanqs'],
        });
        const inputSet = new Set(tanquesIds.map(String));
        for (const cand of candidatos) {
            const currentIds = cand.mancTanqs.map(mt => String(mt.tnqId));
            if (currentIds.length !== inputSet.size)
                continue;
            const match = currentIds.every(id => inputSet.has(id));
            if (match)
                return cand;
        }
        return null;
    }
    async create(dto) {
        const tanquesIds = [...new Set(dto.tanquesIds || [])];
        const existente = await this.buscarMancuernaExistente(dto.trPlc, dto.dollyId, tanquesIds);
        let mancuernaFinalId;
        if (existente) {
            if (existente.status === 1 || existente.status === 2) {
                throw new common_1.ConflictException('Mancuerna ya existe y está activa.');
            }
            await this.validarDisponibilidad(dto.trPlc, dto.dollyId, tanquesIds, dto.opCed);
            existente.status = 1;
            await this.mancuernaRepo.save(existente);
            mancuernaFinalId = existente.mncId;
        }
        else {
            await this.validarDisponibilidad(dto.trPlc, dto.dollyId, tanquesIds, dto.opCed);
            const entity = this.mancuernaRepo.create({
                trPlc: dto.trPlc,
                dollyId: dto.dollyId,
                mncNom: dto.mncNom ?? `MNC-${dto.trPlc}`,
                npmcDesc: dto.npmcDesc,
                status: 1,
            });
            const saved = await this.mancuernaRepo.save(entity);
            if (tanquesIds.length > 0) {
                const links = tanquesIds.map(tnqId => this.mancTanqRepo.create({ mncId: saved.mncId, tnqId }));
                await this.mancTanqRepo.save(links);
            }
            mancuernaFinalId = saved.mncId;
        }
        const nuevoLog = this.mancOpRepo.create({
            mncId: mancuernaFinalId,
            opCed: dto.opCed,
            status: true
        });
        await this.mancOpRepo.save(nuevoLog);
        await this.ocuparComponentes(dto.trPlc, dto.dollyId, tanquesIds, dto.opCed);
        return this.findOne(mancuernaFinalId);
    }
    async desarmar(mncId) {
        const mancuerna = await this.mancuernaRepo.findOne({
            where: { mncId },
            relations: ['mancTanqs', 'mancOps']
        });
        if (!mancuerna)
            throw new common_1.NotFoundException('Mancuerna no encontrada');
        if (mancuerna.status === 3)
            throw new common_1.ConflictException('Ya está desarmada');
        const tnqIds = mancuerna.mancTanqs.map(mt => mt.tnqId).filter(id => id !== null);
        const logActivo = mancuerna.mancOps?.find(mo => !mo.deletedAt);
        mancuerna.status = 3;
        await this.mancuernaRepo.save(mancuerna);
        if (mancuerna.trPlc && mancuerna.dollyId) {
            await this.liberarComponentes(mancuerna.trPlc, mancuerna.dollyId, tnqIds);
        }
        if (logActivo) {
            await this.opRepo.update(logActivo.opCed, { status: true });
            await this.mancOpRepo.softDelete(logActivo.mancOpId);
        }
        return { message: `Mancuerna ${mncId} desarmada correctamente.` };
    }
    async findOne(mncId) {
        const item = await this.mancuernaRepo.findOne({
            where: { mncId },
            relations: [
                'dolly',
                'mancTanqs', 'mancTanqs.tnq',
            ],
        });
        if (!item)
            throw new common_1.NotFoundException(`Mancuerna ${mncId} no encontrada`);
        if (item.trPlc) {
            item.tracto = (await this.tractoRepo.findOne({
                where: { trPlc: item.trPlc },
                withDeleted: true,
            }));
        }
        const historialCompleto = await this.mancOpRepo.find({
            where: { mncId },
            withDeleted: true,
            relations: ['operador'],
            order: { createdAt: 'DESC' }
        });
        item.mancOps = historialCompleto;
        return { items: { mancuerna: this.toResponseDto(item) } };
    }
    async findAll() {
        const list = await this.mancuernaRepo.find({
            relations: [
                'dolly',
                'mancTanqs', 'mancTanqs.tnq',
                'mancOps', 'mancOps.operador'
            ],
            order: { createdAt: 'DESC' },
        });
        for (const m of list) {
            if (m.trPlc) {
                m.tracto = (await this.tractoRepo.findOne({
                    where: { trPlc: m.trPlc },
                    withDeleted: true,
                }));
            }
        }
        return { items: { mancuernas: list.map(m => this.toResponseDto(m)) } };
    }
};
exports.MancuernaService = MancuernaService;
exports.MancuernaService = MancuernaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Mancuerna_1.Mancuerna)),
    __param(1, (0, typeorm_1.InjectRepository)(Tracto_1.Tracto)),
    __param(2, (0, typeorm_1.InjectRepository)(Dolly_1.Dolly)),
    __param(3, (0, typeorm_1.InjectRepository)(Tanque_1.Tanque)),
    __param(4, (0, typeorm_1.InjectRepository)(Operador_1.Operador)),
    __param(5, (0, typeorm_1.InjectRepository)(MancTanq_1.MancTanq)),
    __param(6, (0, typeorm_1.InjectRepository)(MancOp_1.MancOp)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], MancuernaService);
//# sourceMappingURL=mancuerna.service.js.map