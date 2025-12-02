import { BitacoraService } from 'src/service/bitacora.service';
export declare class BitacoraController {
    private readonly bitacoraService;
    constructor(bitacoraService: BitacoraService);
    create(data: any): Promise<import("../entity/Bitacora").Bitacora[]>;
    findAll(): Promise<import("../entity/Bitacora").Bitacora[]>;
    findOne(id: number): Promise<import("../entity/Bitacora").Bitacora>;
    findByViaje(viajeId: number): Promise<import("../entity/Bitacora").Bitacora[]>;
    update(id: number, data: any): Promise<import("../entity/Bitacora").Bitacora>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
