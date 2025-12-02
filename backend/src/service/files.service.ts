import { Injectable } from '@nestjs/common';
import { google, drive_v3 } from 'googleapis';
import { Readable } from 'stream';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as fs from 'fs';

// ENTIDADES
import { DocCarga } from '../entity/DocCarga';
import { DocDescarga } from '../entity/DocDescarga';
import { DocViaje } from '../entity/DocViaje';
import { DocFolio } from '../entity/DocFolio';
import { DocOp } from '../entity/DocOp';
import { DocTracto } from '../entity/DocTracto';
import { DocTanque } from '../entity/DocTanque';
import { DocDolly } from '../entity/DocDolly';

@Injectable()
export class FilesService {
  private drive: drive_v3.Drive;
  private folderId: string;

  constructor(
    @InjectRepository(DocCarga) private cargaRepo: Repository<DocCarga>,
    @InjectRepository(DocDescarga) private descargaRepo: Repository<DocDescarga>,
    @InjectRepository(DocViaje) private viajeRepo: Repository<DocViaje>,
    @InjectRepository(DocFolio) private folioRepo: Repository<DocFolio>,
    @InjectRepository(DocOp) private opRepo: Repository<DocOp>,
    @InjectRepository(DocTracto) private tractoRepo: Repository<DocTracto>,
    @InjectRepository(DocTanque) private tanqueRepo: Repository<DocTanque>,
    @InjectRepository(DocDolly) private dollyRepo: Repository<DocDolly>,
  ) {
    this.folderId = process.env.GDRIVE_FOLDER_ID as string;

    // OAuth2 CONFIG
    const clientSecret = JSON.parse(
      fs.readFileSync(process.env.GOOGLE_OAUTH_CLIENT!, 'utf8'),
    );
    const tokens = JSON.parse(
      fs.readFileSync(process.env.GOOGLE_OAUTH_TOKENS!, 'utf8'),
    );

    const oauth2Client = new google.auth.OAuth2(
      clientSecret.installed.client_id,
      clientSecret.installed.client_secret,
      clientSecret.installed.redirect_uris[0],
    );

    oauth2Client.setCredentials(tokens);

    this.drive = google.drive({
      version: 'v3',
      auth: oauth2Client,
    });
  }

  // ====== SUBIR ARCHIVO A DRIVE ======
  async uploadToDrive(file: any) {
    const res = await this.drive.files.create({
      requestBody: {
        name: file.originalname,
        parents: [this.folderId],
      },
      media: {
        mimeType: file.mimetype,
        body: Readable.from(file.buffer),
      },
      fields: 'id',
    });

    const fileId = res.data.id;

    if (!fileId) throw new Error("Google Drive no devolvió ID del archivo");

    // Hacer el archivo público automáticamente
    await this.drive.permissions.create({
      fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    // URL universal válida para iframe
    const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;

    return { id: fileId, previewUrl };
  }

  // ====== GUARDAR DOCUMENTO ======
  async handleUpload({ file, entity, entityId, type }: any) {
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
          docTractoUrl: previewUrl,   // CORREGIDO
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
          docUrl: previewUrl,   // ✔ CAMPO REAL DE LA TABLA
          tipoId: tipo,
          status: true,
          createdAt: now,
          updatedAt: now,
        });


      default:
        throw new Error(`Entidad desconocida: ${entity}`);
    }
  }

  // ====== GET DOCUMENTOS ======
  async getDocs(entity: string, id: string) {
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
}
