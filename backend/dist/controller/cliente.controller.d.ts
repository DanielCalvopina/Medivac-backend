import { ClienteService } from '../service/cliente.service';
export declare class ClientesController {
    private readonly service;
    constructor(service: ClienteService);
    findAll(): Promise<import("../entity/Cliente").Cliente[]>;
    findOne(cliId: number): Promise<import("../entity/Cliente").Cliente>;
    create(body: any): Promise<import("../entity/Cliente").Cliente>;
    update(cliId: number, body: any): Promise<import("../entity/Cliente").Cliente>;
    remove(cliId: number): Promise<{
        deleted: boolean;
    }>;
}
