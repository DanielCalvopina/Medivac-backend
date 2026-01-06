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
exports.UbicacionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Estaciones_1 = require("../entity/Estaciones");
const Terminal_1 = require("../entity/Terminal");
const Cliente_1 = require("../entity/Cliente");
const EtnsCli_1 = require("../entity/EtnsCli");
const TmnCli_1 = require("../entity/TmnCli");
let UbicacionService = class UbicacionService {
    estRepo;
    trmRepo;
    cliRepo;
    etnsCliRepo;
    tmnCliRepo;
    constructor(estRepo, trmRepo, cliRepo, etnsCliRepo, tmnCliRepo) {
        this.estRepo = estRepo;
        this.trmRepo = trmRepo;
        this.cliRepo = cliRepo;
        this.etnsCliRepo = etnsCliRepo;
        this.tmnCliRepo = tmnCliRepo;
    }
    toEstacionResponse(entity) {
        return { ...entity };
    }
    toTerminalResponse(entity) {
        return { ...entity };
    }
    toClienteResponse(entity) {
        return { ...entity };
    }
    async getUbicaciones() {
        const [estaciones, terminales] = await Promise.all([
            this.estRepo.find({ order: { createdAt: 'DESC' } }),
            this.trmRepo.find({ order: { createdAt: 'DESC' } }),
        ]);
        return {
            items: {
                estaciones: estaciones.map((e) => this.toEstacionResponse(e)),
                terminales: terminales.map((t) => this.toTerminalResponse(t)),
            },
        };
    }
    async listEstaciones() {
        const items = await this.estRepo.find({ order: { createdAt: 'DESC' } });
        return items.map((x) => this.toEstacionResponse(x));
    }
    async getEstacion(etnsId) {
        const found = await this.estRepo.findOne({ where: { etnsId } });
        if (!found)
            throw new common_1.NotFoundException('Estación no encontrada');
        return this.toEstacionResponse(found);
    }
    async createEstacion(dto) {
        const entity = this.estRepo.create({
            ...dto,
            status: dto.status ?? true,
        });
        const saved = await this.estRepo.save(entity);
        return this.toEstacionResponse(saved);
    }
    async updateEstacion(etnsId, dto) {
        const entity = await this.estRepo.preload({
            etnsId,
            ...dto,
        });
        if (!entity)
            throw new common_1.NotFoundException('Estación no encontrada');
        const saved = await this.estRepo.save(entity);
        return this.toEstacionResponse(saved);
    }
    async toggleEstacionStatus(etnsId) {
        const item = await this.estRepo.findOne({ where: { etnsId } });
        if (!item)
            throw new common_1.NotFoundException('Estación no encontrada');
        item.status = !item.status;
        const saved = await this.estRepo.save(item);
        return this.toEstacionResponse(saved);
    }
    async deleteEstacion(etnsId) {
        const res = await this.estRepo.softDelete(etnsId);
        if (!res.affected)
            throw new common_1.NotFoundException('Estación no encontrada');
        return { deleted: true };
    }
    async listTerminales() {
        const items = await this.trmRepo.find({ order: { createdAt: 'DESC' } });
        return items.map((x) => this.toTerminalResponse(x));
    }
    async getTerminal(trmId) {
        const found = await this.trmRepo.findOne({ where: { trmId } });
        if (!found)
            throw new common_1.NotFoundException('Terminal no encontrada');
        return this.toTerminalResponse(found);
    }
    async createTerminal(dto) {
        const entity = this.trmRepo.create({
            ...dto,
            status: dto.status ?? true,
        });
        const saved = await this.trmRepo.save(entity);
        return this.toTerminalResponse(saved);
    }
    async updateTerminal(trmId, dto) {
        const entity = await this.trmRepo.preload({
            trmId,
            ...dto,
        });
        if (!entity)
            throw new common_1.NotFoundException('Terminal no encontrada');
        const saved = await this.trmRepo.save(entity);
        return this.toTerminalResponse(saved);
    }
    async toggleTerminalStatus(trmId) {
        const item = await this.trmRepo.findOne({ where: { trmId } });
        if (!item)
            throw new common_1.NotFoundException('Terminal no encontrada');
        item.status = !item.status;
        const saved = await this.trmRepo.save(item);
        return this.toTerminalResponse(saved);
    }
    async deleteTerminal(trmId) {
        const res = await this.trmRepo.softDelete(trmId);
        if (!res.affected)
            throw new common_1.NotFoundException('Terminal no encontrada');
        return { deleted: true };
    }
    async vincularEstacionCliente(dto) {
        const { etnsId, cliId } = dto;
        const [est, cli] = await Promise.all([
            this.estRepo.findOne({ where: { etnsId } }),
            this.cliRepo.findOne({ where: { cliId } }),
        ]);
        if (!est)
            throw new common_1.NotFoundException('Estación no encontrada');
        if (!cli)
            throw new common_1.NotFoundException('Cliente no encontrado');
        const existing = await this.etnsCliRepo.findOne({ where: { etnsId, cliId } });
        if (existing)
            throw new common_1.ConflictException('La estación ya está vinculada con ese cliente');
        const link = this.etnsCliRepo.create({ etnsId, cliId });
        return this.etnsCliRepo.save(link);
    }
    async vincularTerminalCliente(dto) {
        const { trmId, cliId } = dto;
        const [trm, cli] = await Promise.all([
            this.trmRepo.findOne({ where: { trmId } }),
            this.cliRepo.findOne({ where: { cliId } }),
        ]);
        if (!trm)
            throw new common_1.NotFoundException('Terminal no encontrada');
        if (!cli)
            throw new common_1.NotFoundException('Cliente no encontrado');
        const existing = await this.tmnCliRepo.findOne({ where: { trmId, cliId } });
        if (existing)
            throw new common_1.ConflictException('La terminal ya está vinculada con ese cliente');
        const link = this.tmnCliRepo.create({ trmId, cliId });
        return this.tmnCliRepo.save(link);
    }
    async estacionesConClientes() {
        const estaciones = await this.estRepo.find({ order: { createdAt: 'DESC' } });
        const links = await this.etnsCliRepo.find({ relations: ['cli', 'etns'] });
        const map = new Map();
        for (const l of links) {
            if (!l.etns?.etnsId || !l.cli)
                continue;
            const key = l.etns.etnsId;
            const arr = map.get(key) ?? [];
            arr.push(this.toClienteResponse(l.cli));
            map.set(key, arr);
        }
        return {
            estaciones: estaciones.map((e) => ({
                ...this.toEstacionResponse(e),
                clientes: map.get(e.etnsId) ?? [],
            })),
        };
    }
    async terminalesConClientes() {
        const terminales = await this.trmRepo.find({ order: { createdAt: 'DESC' } });
        const links = await this.tmnCliRepo.find({ relations: ['cli', 'trm'] });
        const map = new Map();
        for (const l of links) {
            if (!l.trm?.trmId || !l.cli)
                continue;
            const key = l.trm.trmId;
            const arr = map.get(key) ?? [];
            arr.push(this.toClienteResponse(l.cli));
            map.set(key, arr);
        }
        return {
            terminales: terminales.map((t) => ({
                ...this.toTerminalResponse(t),
                clientes: map.get(t.trmId) ?? [],
            })),
        };
    }
    async estacionesPorCliente(cliId) {
        const links = await this.etnsCliRepo.find({
            where: { cliId },
            relations: ['etns'],
        });
        return links.map((l) => this.toEstacionResponse(l.etns));
    }
    async terminalesPorCliente(cliId) {
        const links = await this.tmnCliRepo.find({
            where: { cliId },
            relations: ['trm'],
        });
        return links.map((l) => this.toTerminalResponse(l.trm));
    }
};
exports.UbicacionService = UbicacionService;
exports.UbicacionService = UbicacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Estaciones_1.Estaciones)),
    __param(1, (0, typeorm_1.InjectRepository)(Terminal_1.Terminal)),
    __param(2, (0, typeorm_1.InjectRepository)(Cliente_1.Cliente)),
    __param(3, (0, typeorm_1.InjectRepository)(EtnsCli_1.EtnsCli)),
    __param(4, (0, typeorm_1.InjectRepository)(TmnCli_1.TmnCli)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UbicacionService);
//# sourceMappingURL=ubicacion.service.js.map