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
exports.ViajesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Viaje_1 = require("../entity/Viaje");
const Cliente_1 = require("../entity/Cliente");
const Mancuerna_1 = require("../entity/Mancuerna");
const Terminal_1 = require("../entity/Terminal");
const TerminalViaje_1 = require("../entity/TerminalViaje");
const Rutas_1 = require("../entity/Rutas");
const RtFlId_1 = require("../entity/RtFlId");
let ViajesService = class ViajesService {
    viajeRepo;
    clienteRepo;
    mancuernaRepo;
    terminalRepo;
    termViajeRepo;
    rutasRepo;
    rtflRepo;
    constructor(viajeRepo, clienteRepo, mancuernaRepo, terminalRepo, termViajeRepo, rutasRepo, rtflRepo) {
        this.viajeRepo = viajeRepo;
        this.clienteRepo = clienteRepo;
        this.mancuernaRepo = mancuernaRepo;
        this.terminalRepo = terminalRepo;
        this.termViajeRepo = termViajeRepo;
        this.rutasRepo = rutasRepo;
        this.rtflRepo = rtflRepo;
    }
    todayStr() {
        return new Date().toISOString().slice(0, 10);
    }
    async nextRtFlId() {
        const last = await this.rtflRepo.find({
            order: { rtsVijId: 'DESC' },
            take: 1,
        });
        return last.length ? last[0].rtsVijId + 1 : 1;
    }
    async create(data) {
        const today = this.todayStr();
        const dto = {
            ...data,
            createdAt: today,
            updatedAt: today,
        };
        const entity = this.viajeRepo.create(dto);
        const viaje = await this.viajeRepo.save(entity);
        if (data.trmId != null && String(data.trmId).trim() !== '') {
            const tId = Number(data.trmId);
            const terminal = await this.terminalRepo.findOne({ where: { trmId: tId } });
            if (!terminal)
                throw new common_1.NotFoundException(`Terminal ${tId} no existe`);
            await this.termViajeRepo.delete({ viajeId: viaje.viajeId });
            await this.termViajeRepo.save(this.termViajeRepo.create({
                viajeId: viaje.viajeId,
                trmId: tId,
            }));
        }
        if (data.rtsId != null && String(data.rtsId).trim() !== '') {
            const rId = Number(data.rtsId);
            const ruta = await this.rutasRepo.findOne({ where: { etnsId2: rId } });
            if (!ruta)
                throw new common_1.NotFoundException(`Ruta ${rId} no existe`);
            const newId = await this.nextRtFlId();
            await this.rtflRepo.save(this.rtflRepo.create({
                rtsVijId: newId,
                viajeId: viaje.viajeId,
                etnsId2: rId,
            }));
        }
        return this.findOne(viaje.viajeId);
    }
    async findAll() {
        const viajes = await this.viajeRepo.find({
            relations: ['cli', 'mnc'],
            order: { viajeId: 'ASC' },
        });
        if (!viajes.length)
            return [];
        const ids = viajes.map(v => v.viajeId);
        const linksTerm = await this.termViajeRepo.find({ where: { viajeId: (0, typeorm_2.In)(ids) } });
        const linksRuta = await this.rtflRepo.find({ where: { viajeId: (0, typeorm_2.In)(ids) } });
        const termIds = Array.from(new Set(linksTerm.map(l => l.trmId).filter(id => id)));
        const rutaIds = Array.from(new Set(linksRuta.map(l => l.etnsId2).filter(id => id)));
        const terminales = termIds.length
            ? await this.terminalRepo.find({ where: { trmId: (0, typeorm_2.In)(termIds) } })
            : [];
        const rutas = rutaIds.length
            ? await this.rutasRepo.find({ where: { etnsId2: (0, typeorm_2.In)(rutaIds) } })
            : [];
        const mapTerm = new Map();
        const mapRuta = new Map();
        terminales.forEach(t => mapTerm.set(t.trmId, t));
        rutas.forEach(r => mapRuta.set(r.etnsId2, r));
        return viajes.map(v => {
            const tLink = linksTerm.find(l => l.viajeId === v.viajeId);
            const rLink = linksRuta.find(l => l.viajeId === v.viajeId);
            return {
                ...v,
                terminal: tLink?.trmId ? mapTerm.get(tLink.trmId) ?? null : null,
                ruta: rLink?.etnsId2 ? mapRuta.get(rLink.etnsId2) ?? null : null,
            };
        });
    }
    async findOne(id) {
        const viaje = await this.viajeRepo.findOne({
            where: { viajeId: id },
            relations: ['cli', 'mnc'],
        });
        if (!viaje)
            throw new common_1.NotFoundException(`Viaje ${id} no encontrado`);
        const linkTerm = await this.termViajeRepo.findOne({ where: { viajeId: id } });
        const linkRuta = await this.rtflRepo.findOne({ where: { viajeId: id } });
        let terminal = null;
        let ruta = null;
        if (linkTerm?.trmId != null) {
            terminal = await this.terminalRepo.findOne({ where: { trmId: linkTerm.trmId } }) ?? null;
        }
        if (linkRuta?.etnsId2 != null) {
            ruta = await this.rutasRepo.findOne({ where: { etnsId2: linkRuta.etnsId2 } }) ?? null;
        }
        return { ...viaje, terminal, ruta };
    }
    async update(id, data) {
        const today = this.todayStr();
        const exists = await this.viajeRepo.findOne({ where: { viajeId: id } });
        if (!exists)
            throw new common_1.NotFoundException(`Viaje ${id} no encontrado`);
        await this.viajeRepo.update(id, { ...data, updatedAt: today });
        if ('trmId' in data) {
            await this.termViajeRepo.delete({ viajeId: id });
            if (data.trmId != null && String(data.trmId).trim() !== '') {
                const tid = Number(data.trmId);
                const terminal = await this.terminalRepo.findOne({ where: { trmId: tid } });
                if (!terminal)
                    throw new common_1.NotFoundException(`Terminal ${tid} no existe`);
                await this.termViajeRepo.save(this.termViajeRepo.create({
                    viajeId: id,
                    trmId: tid,
                }));
            }
        }
        if ('rtsId' in data) {
            await this.rtflRepo.delete({ viajeId: id });
            if (data.rtsId != null && String(data.rtsId).trim() !== '') {
                const rid = Number(data.rtsId);
                const ruta = await this.rutasRepo.findOne({ where: { etnsId2: rid } });
                if (!ruta)
                    throw new common_1.NotFoundException(`Ruta ${rid} no existe`);
                const newId = await this.nextRtFlId();
                await this.rtflRepo.save(this.rtflRepo.create({
                    rtsVijId: newId,
                    viajeId: id,
                    etnsId2: rid,
                }));
            }
        }
        return this.findOne(id);
    }
    async remove(id) {
        const viaje = await this.viajeRepo.findOne({ where: { viajeId: id } });
        if (!viaje)
            throw new common_1.NotFoundException(`Viaje ${id} no encontrado`);
        await this.termViajeRepo.delete({ viajeId: id });
        await this.rtflRepo.delete({ viajeId: id });
        await this.viajeRepo.remove(viaje);
        return { message: `Viaje ${id} eliminado correctamente` };
    }
};
exports.ViajesService = ViajesService;
exports.ViajesService = ViajesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Viaje_1.Viaje)),
    __param(1, (0, typeorm_1.InjectRepository)(Cliente_1.Cliente)),
    __param(2, (0, typeorm_1.InjectRepository)(Mancuerna_1.Mancuerna)),
    __param(3, (0, typeorm_1.InjectRepository)(Terminal_1.Terminal)),
    __param(4, (0, typeorm_1.InjectRepository)(TerminalViaje_1.TerminalViaje)),
    __param(5, (0, typeorm_1.InjectRepository)(Rutas_1.Rutas)),
    __param(6, (0, typeorm_1.InjectRepository)(RtFlId_1.RtFlId)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ViajesService);
//# sourceMappingURL=viajes.service.js.map