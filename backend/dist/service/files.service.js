"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const googleapis_1 = require("googleapis");
const stream_1 = require("stream");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const fs = __importStar(require("fs"));
const DocCarga_1 = require("../entity/DocCarga");
const DocDescarga_1 = require("../entity/DocDescarga");
const DocViaje_1 = require("../entity/DocViaje");
const DocFolio_1 = require("../entity/DocFolio");
const DocOp_1 = require("../entity/DocOp");
const DocTracto_1 = require("../entity/DocTracto");
const DocTanque_1 = require("../entity/DocTanque");
const DocDolly_1 = require("../entity/DocDolly");
let FilesService = class FilesService {
    cargaRepo;
    descargaRepo;
    viajeRepo;
    folioRepo;
    opRepo;
    tractoRepo;
    tanqueRepo;
    dollyRepo;
    drive;
    folderId;
    constructor(cargaRepo, descargaRepo, viajeRepo, folioRepo, opRepo, tractoRepo, tanqueRepo, dollyRepo) {
        this.cargaRepo = cargaRepo;
        this.descargaRepo = descargaRepo;
        this.viajeRepo = viajeRepo;
        this.folioRepo = folioRepo;
        this.opRepo = opRepo;
        this.tractoRepo = tractoRepo;
        this.tanqueRepo = tanqueRepo;
        this.dollyRepo = dollyRepo;
        this.folderId = process.env.GDRIVE_FOLDER_ID;
        const clientSecret = JSON.parse(fs.readFileSync(process.env.GOOGLE_OAUTH_CLIENT, 'utf8'));
        const tokens = JSON.parse(fs.readFileSync(process.env.GOOGLE_OAUTH_TOKENS, 'utf8'));
        const oauth2Client = new googleapis_1.google.auth.OAuth2(clientSecret.installed.client_id, clientSecret.installed.client_secret, clientSecret.installed.redirect_uris[0]);
        oauth2Client.setCredentials(tokens);
        this.drive = googleapis_1.google.drive({
            version: 'v3',
            auth: oauth2Client,
        });
    }
    async uploadToDrive(file) {
        const res = await this.drive.files.create({
            requestBody: {
                name: file.originalname,
                parents: [this.folderId],
            },
            media: {
                mimeType: file.mimetype,
                body: stream_1.Readable.from(file.buffer),
            },
            fields: 'id',
        });
        const fileId = res.data.id;
        if (!fileId)
            throw new Error("Google Drive no devolvió ID del archivo");
        await this.drive.permissions.create({
            fileId,
            requestBody: {
                role: "reader",
                type: "anyone",
            },
        });
        const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
        return { id: fileId, previewUrl };
    }
    async handleUpload({ file, entity, entityId, type }) {
        const { previewUrl } = await this.uploadToDrive(file);
        const now = new Date().toISOString().slice(0, 10);
        const name = file.originalname;
        const tipo = Number(type);
        const numericId = Number(entityId);
        const needsNumeric = ['carga', 'descarga', 'viaje', 'folio', 'tanque'];
        if (needsNumeric.includes(entity) && !Number.isFinite(numericId)) {
            throw new Error(`ID inválido para ${entity}: ${entityId}`);
        }
        switch (entity) {
            case 'carga':
                return this.cargaRepo.save({
                    cargaId: numericId,
                    docCarName: name,
                    docCarUrl: previewUrl,
                    tipoId: tipo,
                    status: true,
                    createdAt: now,
                    updatedAt: now,
                });
            case 'descarga':
                return this.descargaRepo.save({
                    descargaId: numericId,
                    docDescNombre: name,
                    docDescUrl: previewUrl,
                    tipoId: tipo,
                    status: true,
                    createdAt: now,
                    updatedAt: now,
                });
            case 'viaje':
                return this.viajeRepo.save({
                    viajeId: numericId,
                    docViajeName: name,
                    docUrl: previewUrl,
                    tipoId: tipo,
                    status: true,
                    createdAt: now,
                    updatedAt: now,
                });
            case 'folio':
                return this.folioRepo.save({
                    folId: numericId,
                    docFolioName: name,
                    docFolioUrl: previewUrl,
                    tipoId: tipo,
                    status: true,
                    createdAt: now,
                    updatedAt: now,
                });
            case 'op':
                return this.opRepo.save({
                    opCed: entityId,
                    docOpName: name,
                    docOpUrl: previewUrl,
                    tipoId: tipo,
                    status: true,
                    createdAt: now,
                    updatedAt: now,
                });
            case 'tracto':
                return this.tractoRepo.save({
                    trPlc: entityId,
                    docTractoName: name,
                    docTractoUrl: previewUrl,
                    tipoId: tipo,
                    status: true,
                    createdAt: now,
                    updatedAt: now,
                });
            case 'tanque':
                return this.tanqueRepo.save({
                    tnqId: numericId,
                    docTaqName: name,
                    docTaqUrl: previewUrl,
                    tipoId: tipo,
                    status: true,
                    createdAt: now,
                    updatedAt: now,
                });
            case 'dolly':
                return this.dollyRepo.save({
                    dollyId: String(entityId),
                    docDollyName: name,
                    docUrl: previewUrl,
                    tipoId: tipo,
                    status: true,
                    createdAt: now,
                    updatedAt: now,
                });
            default:
                throw new Error(`Entidad desconocida: ${entity}`);
        }
    }
    async getDocs(entity, id) {
        const numericId = Number(id);
        switch (entity) {
            case 'carga':
                return this.cargaRepo.find({ where: { cargaId: numericId } });
            case 'descarga':
                return this.descargaRepo.find({ where: { descargaId: numericId } });
            case 'viaje':
                return this.viajeRepo.find({ where: { viajeId: numericId } });
            case 'folio':
                return this.folioRepo.find({ where: { folId: numericId } });
            case 'tanque':
                return this.tanqueRepo.find({ where: { tnqId: numericId } });
            case 'dolly':
                return this.dollyRepo.find({ where: { dollyId: id } });
            case 'op':
                return this.opRepo.find({ where: { opCed: id } });
            case 'tracto':
                return this.tractoRepo.find({ where: { trPlc: id } });
            default:
                throw new Error(`Entidad desconocida: ${entity}`);
        }
    }
};
exports.FilesService = FilesService;
exports.FilesService = FilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(DocCarga_1.DocCarga)),
    __param(1, (0, typeorm_1.InjectRepository)(DocDescarga_1.DocDescarga)),
    __param(2, (0, typeorm_1.InjectRepository)(DocViaje_1.DocViaje)),
    __param(3, (0, typeorm_1.InjectRepository)(DocFolio_1.DocFolio)),
    __param(4, (0, typeorm_1.InjectRepository)(DocOp_1.DocOp)),
    __param(5, (0, typeorm_1.InjectRepository)(DocTracto_1.DocTracto)),
    __param(6, (0, typeorm_1.InjectRepository)(DocTanque_1.DocTanque)),
    __param(7, (0, typeorm_1.InjectRepository)(DocDolly_1.DocDolly)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], FilesService);
//# sourceMappingURL=files.service.js.map