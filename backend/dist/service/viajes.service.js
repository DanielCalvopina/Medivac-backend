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
const Rutas_1 = require("../entity/Rutas");
const Terminal_1 = require("../entity/Terminal");
const RtFlId_1 = require("../entity/RtFlId");
const TerminalViaje_1 = require("../entity/TerminalViaje");
let ViajesService = class ViajesService {
    viajeRepo;
    clienteRepo;
    mancuernaRepo;
    rutasRepo;
    terminalRepo;
    rtFlRepo;
    tvRepo;
    constructor(viajeRepo, clienteRepo, mancuernaRepo, rutasRepo, terminalRepo, rtFlRepo, tvRepo) {
        this.viajeRepo = viajeRepo;
        this.clienteRepo = clienteRepo;
        this.mancuernaRepo = mancuernaRepo;
        this.rutasRepo = rutasRepo;
        this.terminalRepo = terminalRepo;
        this.rtFlRepo = rtFlRepo;
        this.tvRepo = tvRepo;
    }
    toResponseDto(v) {
        const rutasDtos = (v.rtFlS || []).map(link => ({ ...link.ruta }));
        const termDtos = (v.terminalViajes || []).map(link => ({ ...link.trm }));
        const bitacorasDtos = (v.bitacoras || []).map(b => ({
            ...b,
            viajeId: v.viajeId
        }));
        const foliosDtos = (v.folios || []).map(f => {
            const estaciones = (f.estacionesFolios || []).map(ef => ({ ...ef.etns }));
            const cargas = (f.cargas || []).map(c => ({
                ...c,
                folio: null,
                sellos: (c.sellos || []).map(s => ({ sellosId: s.sellosId, sellosNum: s.sellosNum }))
            }));
            const descargas = (f.descargas || []).map(d => ({
                ...d,
                folio: null
            }));
            return {
                folId: f.folId,
                folCod: f.folCod,
                folName: f.folName,
                folDesc: f.folDesc,
                tnqNumse: f.tnqNumse,
                status: f.status,
                createdAt: f.createdAt,
                updatedAt: f.updatedAt,
                deletedAt: f.deletedAt,
                producto: f.prd ? { ...f.prd } : null,
                estaciones: estaciones,
                cargas: cargas,
                descargas: descargas
            };
        });
        return {
            viajeId: v.viajeId,
            viajeCod: v.viajeCod,
            status: v.status,
            viajeInicio: v.viajeInicio,
            viajeFin: v.viajeFin,
            viajeDuracion: v.viajeDuracion,
            createdAt: v.createdAt,
            updatedAt: v.updatedAt,
            cliente: v.cli ? { ...v.cli } : null,
            mancuerna: v.mnc ? { ...v.mnc } : null,
            rutas: rutasDtos,
            terminales: termDtos,
            folios: foliosDtos,
            bitacoras: bitacorasDtos
        };
    }
    getRelations() {
        return [
            'cli',
            'mnc',
            'rtFlS', 'rtFlS.ruta',
            'terminalViajes', 'terminalViajes.trm',
            'bitacoras',
            'folios',
            'folios.prd',
            'folios.estacionesFolios', 'folios.estacionesFolios.etns',
            'folios.cargas', 'folios.cargas.sellos',
            'folios.descargas'
        ];
    }
    async findOne(id) {
        const viaje = await this.viajeRepo.findOne({
            where: { viajeId: id },
            relations: this.getRelations()
        });
        if (!viaje)
            throw new common_1.NotFoundException(`Viaje ${id} no encontrado`);
        return { items: { viaje: this.toResponseDto(viaje) } };
    }
    async findAll() {
        const viajes = await this.viajeRepo.find({
            relations: this.getRelations(),
            order: { createdAt: 'DESC' }
        });
        return { items: { viajes: viajes.map(v => this.toResponseDto(v)) } };
    }
    async create(dto) {
        const cli = await this.clienteRepo.findOne({ where: { cliId: dto.cliId } });
        if (!cli)
            throw new common_1.NotFoundException('Cliente no encontrado');
        const mnc = await this.mancuernaRepo.findOne({ where: { mncId: dto.mncId } });
        if (!mnc)
            throw new common_1.NotFoundException('Mancuerna no encontrada');
        const viaje = this.viajeRepo.create({
            mncId: dto.mncId,
            cliId: dto.cliId,
            viajeCod: dto.viajeCod,
            status: 1,
        });
        const saved = await this.viajeRepo.save(viaje);
        if (dto.rutasIds?.length) {
            const links = dto.rutasIds.map(rid => this.rtFlRepo.create({ viajeId: saved.viajeId, etnsId2: rid }));
            await this.rtFlRepo.save(links);
        }
        if (dto.terminalesIds?.length) {
            const links = dto.terminalesIds.map(tid => this.tvRepo.create({ viajeId: saved.viajeId, trmId: tid }));
            await this.tvRepo.save(links);
        }
        return this.findOne(saved.viajeId);
    }
    async iniciarViaje(id) {
        const viaje = await this.viajeRepo.findOne({ where: { viajeId: id } });
        if (!viaje)
            throw new common_1.NotFoundException('Viaje no encontrado');
        if (viaje.status !== 1)
            throw new common_1.BadRequestException('El viaje no está en estado pendiente');
        viaje.status = 2;
        viaje.viajeInicio = new Date();
        await this.viajeRepo.save(viaje);
        return this.findOne(id);
    }
    async finalizarViaje(id) {
        const viaje = await this.viajeRepo.findOne({ where: { viajeId: id } });
        if (!viaje)
            throw new common_1.NotFoundException('Viaje no encontrado');
        if (viaje.status !== 2)
            throw new common_1.BadRequestException('El viaje no está en curso');
        if (!viaje.viajeInicio)
            throw new common_1.BadRequestException('El viaje no tiene fecha de inicio registrada');
        const now = new Date();
        viaje.status = 3;
        viaje.viajeFin = now;
        const diffMs = now.getTime() - viaje.viajeInicio.getTime();
        const diffHours = diffMs / (1000 * 60 * 60);
        viaje.viajeDuracion = parseFloat(diffHours.toFixed(2));
        await this.viajeRepo.save(viaje);
        return this.findOne(id);
    }
    async update(id, dto) {
        const viaje = await this.viajeRepo.preload({
            viajeId: id,
            ...dto
        });
        if (!viaje)
            throw new common_1.NotFoundException('Viaje no encontrado');
        await this.viajeRepo.save(viaje);
        if (dto.rutasIds) {
            await this.rtFlRepo.delete({ viajeId: id });
            if (dto.rutasIds.length) {
                await this.rtFlRepo.save(dto.rutasIds.map(rid => this.rtFlRepo.create({ viajeId: id, etnsId2: rid })));
            }
        }
        if (dto.terminalesIds) {
            await this.tvRepo.delete({ viajeId: id });
            if (dto.terminalesIds.length) {
                await this.tvRepo.save(dto.terminalesIds.map(tid => this.tvRepo.create({ viajeId: id, trmId: tid })));
            }
        }
        return this.findOne(id);
    }
    async remove(id) {
        await this.rtFlRepo.delete({ viajeId: id });
        await this.tvRepo.delete({ viajeId: id });
        const res = await this.viajeRepo.softDelete(id);
        if (!res.affected)
            throw new common_1.NotFoundException('Viaje no encontrado');
        return { message: `Viaje ${id} eliminado` };
    }
};
exports.ViajesService = ViajesService;
exports.ViajesService = ViajesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Viaje_1.Viaje)),
    __param(1, (0, typeorm_1.InjectRepository)(Cliente_1.Cliente)),
    __param(2, (0, typeorm_1.InjectRepository)(Mancuerna_1.Mancuerna)),
    __param(3, (0, typeorm_1.InjectRepository)(Rutas_1.Rutas)),
    __param(4, (0, typeorm_1.InjectRepository)(Terminal_1.Terminal)),
    __param(5, (0, typeorm_1.InjectRepository)(RtFlId_1.RtFlId)),
    __param(6, (0, typeorm_1.InjectRepository)(TerminalViaje_1.TerminalViaje)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ViajesService);
//# sourceMappingURL=viajes.service.js.map