import { Repository } from 'typeorm';
import { Admin } from '../entity/Admin';
export declare class AdminService {
    private readonly repo;
    constructor(repo: Repository<Admin>);
    findAll(): Promise<Admin[]>;
    findOne(adminCed: string): Promise<Admin>;
    create(data: Partial<Admin>): Promise<Admin>;
    update(adminCed: string, data: Partial<Admin>): Promise<Admin>;
    remove(adminCed: string): Promise<{
        deleted: boolean;
    }>;
}
