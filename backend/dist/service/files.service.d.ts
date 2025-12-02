import { Repository } from 'typeorm';
import { DocCarga } from '../entity/DocCarga';
import { DocDescarga } from '../entity/DocDescarga';
import { DocViaje } from '../entity/DocViaje';
import { DocFolio } from '../entity/DocFolio';
import { DocOp } from '../entity/DocOp';
import { DocTracto } from '../entity/DocTracto';
import { DocTanque } from '../entity/DocTanque';
import { DocDolly } from '../entity/DocDolly';
export declare class FilesService {
    private cargaRepo;
    private descargaRepo;
    private viajeRepo;
    private folioRepo;
    private opRepo;
    private tractoRepo;
    private tanqueRepo;
    private dollyRepo;
    private drive;
    private folderId;
    constructor(cargaRepo: Repository<DocCarga>, descargaRepo: Repository<DocDescarga>, viajeRepo: Repository<DocViaje>, folioRepo: Repository<DocFolio>, opRepo: Repository<DocOp>, tractoRepo: Repository<DocTracto>, tanqueRepo: Repository<DocTanque>, dollyRepo: Repository<DocDolly>);
    uploadToDrive(file: any): Promise<{
        id: string;
        previewUrl: string;
    }>;
    handleUpload({ file, entity, entityId, type }: any): Promise<({
        cargaId: number;
        docCarName: any;
        docCarUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & DocCarga) | ({
        descargaId: number;
        docDescNombre: any;
        docDescUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & DocDescarga) | ({
        viajeId: number;
        docViajeName: any;
        docUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & DocViaje) | ({
        folId: number;
        docFolioName: any;
        docFolioUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & DocFolio) | ({
        opCed: any;
        docOpName: any;
        docOpUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & DocOp) | ({
        trPlc: any;
        docTractoName: any;
        docTractoUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & DocTracto) | ({
        tnqId: number;
        docTaqName: any;
        docTaqUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & DocTanque) | ({
        dollyId: string;
        docDollyName: any;
        docUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & DocDolly)>;
    getDocs(entity: string, id: string): Promise<DocTracto[] | DocTanque[] | DocDolly[] | DocOp[] | DocViaje[] | DocCarga[] | DocDescarga[] | DocFolio[]>;
}
