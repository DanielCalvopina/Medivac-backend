import { OperadorService } from '../service/operador.service';
export declare class OperadorController {
    private readonly service;
    constructor(service: OperadorService);
    findAll(): Promise<import("../entity/Operador").Operador[]>;
    findOne(opCed: string): Promise<import("../entity/Operador").Operador>;
    create(body: any): Promise<import("../entity/Operador").Operador>;
    update(opCed: string, body: any): Promise<import("../entity/Operador").Operador>;
    remove(opCed: string): Promise<{
        deleted: boolean;
    }>;
}
