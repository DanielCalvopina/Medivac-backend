import { FilesService } from '../service/files.service';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    uploadCarga(file: any, body: any): Promise<({
        cargaId: number;
        docCarName: any;
        docCarUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocCarga").DocCarga) | ({
        descargaId: number;
        docDescNombre: any;
        docDescUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocDescarga").DocDescarga) | ({
        viajeId: number;
        docViajeName: any;
        docUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocViaje").DocViaje) | ({
        folId: number;
        docFolioName: any;
        docFolioUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocFolio").DocFolio) | ({
        opCed: any;
        docOpName: any;
        docOpUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocOp").DocOp) | ({
        trPlc: any;
        docTractoName: any;
        docTractoUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocTracto").DocTracto) | ({
        tnqId: number;
        docTaqName: any;
        docTaqUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocTanque").DocTanque) | ({
        dollyId: string;
        docDollyName: any;
        docUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocDolly").DocDolly)>;
    getCarga(id: string): Promise<import("../entity/DocTracto").DocTracto[] | import("../entity/DocOp").DocOp[] | import("../entity/DocTanque").DocTanque[] | import("../entity/DocDolly").DocDolly[] | import("../entity/DocViaje").DocViaje[] | import("../entity/DocCarga").DocCarga[] | import("../entity/DocDescarga").DocDescarga[] | import("../entity/DocFolio").DocFolio[]>;
    uploadDescarga(file: any, body: any): Promise<({
        cargaId: number;
        docCarName: any;
        docCarUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocCarga").DocCarga) | ({
        descargaId: number;
        docDescNombre: any;
        docDescUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocDescarga").DocDescarga) | ({
        viajeId: number;
        docViajeName: any;
        docUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocViaje").DocViaje) | ({
        folId: number;
        docFolioName: any;
        docFolioUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocFolio").DocFolio) | ({
        opCed: any;
        docOpName: any;
        docOpUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocOp").DocOp) | ({
        trPlc: any;
        docTractoName: any;
        docTractoUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocTracto").DocTracto) | ({
        tnqId: number;
        docTaqName: any;
        docTaqUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocTanque").DocTanque) | ({
        dollyId: string;
        docDollyName: any;
        docUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocDolly").DocDolly)>;
    getDescarga(id: string): Promise<import("../entity/DocTracto").DocTracto[] | import("../entity/DocOp").DocOp[] | import("../entity/DocTanque").DocTanque[] | import("../entity/DocDolly").DocDolly[] | import("../entity/DocViaje").DocViaje[] | import("../entity/DocCarga").DocCarga[] | import("../entity/DocDescarga").DocDescarga[] | import("../entity/DocFolio").DocFolio[]>;
    uploadViaje(file: any, body: any): Promise<({
        cargaId: number;
        docCarName: any;
        docCarUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocCarga").DocCarga) | ({
        descargaId: number;
        docDescNombre: any;
        docDescUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocDescarga").DocDescarga) | ({
        viajeId: number;
        docViajeName: any;
        docUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocViaje").DocViaje) | ({
        folId: number;
        docFolioName: any;
        docFolioUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocFolio").DocFolio) | ({
        opCed: any;
        docOpName: any;
        docOpUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocOp").DocOp) | ({
        trPlc: any;
        docTractoName: any;
        docTractoUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocTracto").DocTracto) | ({
        tnqId: number;
        docTaqName: any;
        docTaqUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocTanque").DocTanque) | ({
        dollyId: string;
        docDollyName: any;
        docUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocDolly").DocDolly)>;
    getViaje(id: string): Promise<import("../entity/DocTracto").DocTracto[] | import("../entity/DocOp").DocOp[] | import("../entity/DocTanque").DocTanque[] | import("../entity/DocDolly").DocDolly[] | import("../entity/DocViaje").DocViaje[] | import("../entity/DocCarga").DocCarga[] | import("../entity/DocDescarga").DocDescarga[] | import("../entity/DocFolio").DocFolio[]>;
    uploadFolio(file: any, body: any): Promise<({
        cargaId: number;
        docCarName: any;
        docCarUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocCarga").DocCarga) | ({
        descargaId: number;
        docDescNombre: any;
        docDescUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocDescarga").DocDescarga) | ({
        viajeId: number;
        docViajeName: any;
        docUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocViaje").DocViaje) | ({
        folId: number;
        docFolioName: any;
        docFolioUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocFolio").DocFolio) | ({
        opCed: any;
        docOpName: any;
        docOpUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocOp").DocOp) | ({
        trPlc: any;
        docTractoName: any;
        docTractoUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocTracto").DocTracto) | ({
        tnqId: number;
        docTaqName: any;
        docTaqUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocTanque").DocTanque) | ({
        dollyId: string;
        docDollyName: any;
        docUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocDolly").DocDolly)>;
    getFolio(id: string): Promise<import("../entity/DocTracto").DocTracto[] | import("../entity/DocOp").DocOp[] | import("../entity/DocTanque").DocTanque[] | import("../entity/DocDolly").DocDolly[] | import("../entity/DocViaje").DocViaje[] | import("../entity/DocCarga").DocCarga[] | import("../entity/DocDescarga").DocDescarga[] | import("../entity/DocFolio").DocFolio[]>;
    uploadOp(file: any, body: any): Promise<({
        cargaId: number;
        docCarName: any;
        docCarUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocCarga").DocCarga) | ({
        descargaId: number;
        docDescNombre: any;
        docDescUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocDescarga").DocDescarga) | ({
        viajeId: number;
        docViajeName: any;
        docUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocViaje").DocViaje) | ({
        folId: number;
        docFolioName: any;
        docFolioUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocFolio").DocFolio) | ({
        opCed: any;
        docOpName: any;
        docOpUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocOp").DocOp) | ({
        trPlc: any;
        docTractoName: any;
        docTractoUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocTracto").DocTracto) | ({
        tnqId: number;
        docTaqName: any;
        docTaqUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocTanque").DocTanque) | ({
        dollyId: string;
        docDollyName: any;
        docUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocDolly").DocDolly)>;
    getOp(id: string): Promise<import("../entity/DocTracto").DocTracto[] | import("../entity/DocOp").DocOp[] | import("../entity/DocTanque").DocTanque[] | import("../entity/DocDolly").DocDolly[] | import("../entity/DocViaje").DocViaje[] | import("../entity/DocCarga").DocCarga[] | import("../entity/DocDescarga").DocDescarga[] | import("../entity/DocFolio").DocFolio[]>;
    uploadTracto(file: any, body: any): Promise<({
        cargaId: number;
        docCarName: any;
        docCarUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocCarga").DocCarga) | ({
        descargaId: number;
        docDescNombre: any;
        docDescUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocDescarga").DocDescarga) | ({
        viajeId: number;
        docViajeName: any;
        docUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocViaje").DocViaje) | ({
        folId: number;
        docFolioName: any;
        docFolioUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocFolio").DocFolio) | ({
        opCed: any;
        docOpName: any;
        docOpUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocOp").DocOp) | ({
        trPlc: any;
        docTractoName: any;
        docTractoUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocTracto").DocTracto) | ({
        tnqId: number;
        docTaqName: any;
        docTaqUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocTanque").DocTanque) | ({
        dollyId: string;
        docDollyName: any;
        docUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocDolly").DocDolly)>;
    getTracto(id: string): Promise<import("../entity/DocTracto").DocTracto[] | import("../entity/DocOp").DocOp[] | import("../entity/DocTanque").DocTanque[] | import("../entity/DocDolly").DocDolly[] | import("../entity/DocViaje").DocViaje[] | import("../entity/DocCarga").DocCarga[] | import("../entity/DocDescarga").DocDescarga[] | import("../entity/DocFolio").DocFolio[]>;
    uploadTanque(file: any, body: any): Promise<({
        cargaId: number;
        docCarName: any;
        docCarUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocCarga").DocCarga) | ({
        descargaId: number;
        docDescNombre: any;
        docDescUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocDescarga").DocDescarga) | ({
        viajeId: number;
        docViajeName: any;
        docUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocViaje").DocViaje) | ({
        folId: number;
        docFolioName: any;
        docFolioUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocFolio").DocFolio) | ({
        opCed: any;
        docOpName: any;
        docOpUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocOp").DocOp) | ({
        trPlc: any;
        docTractoName: any;
        docTractoUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocTracto").DocTracto) | ({
        tnqId: number;
        docTaqName: any;
        docTaqUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocTanque").DocTanque) | ({
        dollyId: string;
        docDollyName: any;
        docUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocDolly").DocDolly)>;
    getTanque(id: string): Promise<import("../entity/DocTracto").DocTracto[] | import("../entity/DocOp").DocOp[] | import("../entity/DocTanque").DocTanque[] | import("../entity/DocDolly").DocDolly[] | import("../entity/DocViaje").DocViaje[] | import("../entity/DocCarga").DocCarga[] | import("../entity/DocDescarga").DocDescarga[] | import("../entity/DocFolio").DocFolio[]>;
    uploadDolly(file: any, body: any): Promise<({
        cargaId: number;
        docCarName: any;
        docCarUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocCarga").DocCarga) | ({
        descargaId: number;
        docDescNombre: any;
        docDescUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocDescarga").DocDescarga) | ({
        viajeId: number;
        docViajeName: any;
        docUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocViaje").DocViaje) | ({
        folId: number;
        docFolioName: any;
        docFolioUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocFolio").DocFolio) | ({
        opCed: any;
        docOpName: any;
        docOpUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocOp").DocOp) | ({
        trPlc: any;
        docTractoName: any;
        docTractoUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocTracto").DocTracto) | ({
        tnqId: number;
        docTaqName: any;
        docTaqUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocTanque").DocTanque) | ({
        dollyId: string;
        docDollyName: any;
        docUrl: string;
        tipoId: number;
        status: true;
        createdAt: string;
        updatedAt: string;
    } & import("../entity/DocDolly").DocDolly)>;
    getDolly(id: string): Promise<import("../entity/DocTracto").DocTracto[] | import("../entity/DocOp").DocOp[] | import("../entity/DocTanque").DocTanque[] | import("../entity/DocDolly").DocDolly[] | import("../entity/DocViaje").DocViaje[] | import("../entity/DocCarga").DocCarga[] | import("../entity/DocDescarga").DocDescarga[] | import("../entity/DocFolio").DocFolio[]>;
}
