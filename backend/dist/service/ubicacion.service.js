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
const EtnsCli_1 = require("../entity/EtnsCli");
const TmnCli_1 = require("../entity/TmnCli");
const Cliente_1 = require("../entity/Cliente");
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
    todayStr() {
        return new Date().toISOString().slice(0, 10);
    }
    listEstaciones() {
        return this.estRepo.find();
    }
    async getEstacion(etnsId) {
        const found = await this.estRepo.findOne({ where: { etnsId } });
        if (!found)
            throw new common_1.NotFoundException('Estación no encontrada');
        return found;
    }
    async createEstacion(data) {
        const today = this.todayStr();
        const e = this.estRepo.create({
            ...data,
            createdAt: today,
            updatedAt: today,
        });
        return this.estRepo.save(e);
    }
    async updateEstacion(etnsId, data) {
        const estacion = await this.getEstacion(etnsId);
        Object.assign(estacion, data, { updatedAt: this.todayStr() });
        return this.estRepo.save(estacion);
    }
    async deleteEstacion(etnsId) {
        const res = await this.estRepo.delete({ etnsId });
        if (!res.affected)
            throw new common_1.NotFoundException('Estación no encontrada');
        return { deleted: true };
    }
    listTerminales() {
        return this.trmRepo.find();
    }
    async getTerminal(trmId) {
        const found = await this.trmRepo.findOne({ where: { trmId } });
        if (!found)
            throw new common_1.NotFoundException('Terminal no encontrada');
        return found;
    }
    async createTerminal(data) {
        const today = this.todayStr();
        const t = this.trmRepo.create({
            ...data,
            createdAt: today,
            updatedAt: today,
        });
        return this.trmRepo.save(t);
    }
    async updateTerminal(trmId, data) {
        const terminal = await this.getTerminal(trmId);
        Object.assign(terminal, data, { updatedAt: this.todayStr() });
        return this.trmRepo.save(terminal);
    }
    async deleteTerminal(trmId) {
        const res = await this.trmRepo.delete({ trmId });
        if (!res.affected)
            throw new common_1.NotFoundException('Terminal no encontrada');
        return { deleted: true };
    }
    async vincularEstacionCliente(etnsId, cliId) {
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
    async vincularTerminalCliente(trmId, cliId) {
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
    async estacionesPorCliente(cliId) {
        const cli = await this.cliRepo.findOne({ where: { cliId } });
        if (!cli)
            throw new common_1.NotFoundException('Cliente no encontrado');
        const links = await this.etnsCliRepo.find({
            where: { cliId },
            relations: ['etns'],
        });
        return links.map((l) => l.etns);
    }
    async terminalesPorCliente(cliId) {
        const cli = await this.cliRepo.findOne({ where: { cliId } });
        if (!cli)
            throw new common_1.NotFoundException('Cliente no encontrado');
        const links = await this.tmnCliRepo.find({
            where: { cliId },
            relations: ['trm'],
        });
        return links.map((l) => l.trm);
    }
    async clientesPorEstacion(etnsId) {
        const estacion = await this.estRepo.findOne({ where: { etnsId } });
        if (!estacion)
            throw new common_1.NotFoundException('Estación no encontrada');
        const links = await this.etnsCliRepo.find({
            where: { etnsId },
            relations: ['cli'],
        });
        return links.map((l) => l.cli);
    }
    async clientesPorTerminal(trmId) {
        const terminal = await this.trmRepo.findOne({ where: { trmId } });
        if (!terminal)
            throw new common_1.NotFoundException('Terminal no encontrada');
        const links = await this.tmnCliRepo.find({
            where: { trmId },
            relations: ['cli'],
        });
        return links.map((l) => l.cli);
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