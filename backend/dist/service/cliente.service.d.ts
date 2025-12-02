import { Repository } from 'typeorm';
import { Cliente } from '../entity/Cliente';
export declare class ClienteService {
    private readonly repo;
    constructor(repo: Repository<Cliente>);
    findAll(): Promise<Cliente[]>;
    findOne(cliId: number): Promise<Cliente>;
    create(data: Partial<Cliente>): Promise<Cliente>;
    update(cliId: number, data: Partial<Cliente>): Promise<Cliente>;
    remove(cliId: number): Promise<{
        deleted: boolean;
    }>;
}
