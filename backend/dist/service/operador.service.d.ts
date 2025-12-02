import { Repository } from 'typeorm';
import { Operador } from '../entity/Operador';
export declare class OperadorService {
    private readonly repo;
    constructor(repo: Repository<Operador>);
    findAll(): Promise<Operador[]>;
    findOne(opCed: string): Promise<Operador>;
    create(data: Partial<Operador>): Promise<Operador>;
    update(opCed: string, data: Partial<Operador>): Promise<Operador>;
    remove(opCed: string): Promise<{
        deleted: boolean;
    }>;
}
