import { AdminService } from '../service/admin.service';
export declare class AdminController {
    private readonly service;
    constructor(service: AdminService);
    findAll(): Promise<import("../entity/Admin").Admin[]>;
    findOne(adminCed: string): Promise<import("../entity/Admin").Admin>;
    create(body: any): Promise<import("../entity/Admin").Admin>;
    update(adminCed: string, body: any): Promise<import("../entity/Admin").Admin>;
    remove(adminCed: string): Promise<{
        deleted: boolean;
    }>;
}
