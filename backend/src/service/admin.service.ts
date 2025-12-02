import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from '../entity/Admin';

@Injectable()
export class AdminService {
  constructor(@InjectRepository(Admin) private readonly repo: Repository<Admin>) {}

  findAll() {
    return this.repo.find();
  }

  async findOne(adminCed: string) {
    const item = await this.repo.findOne({ where: { adminCed } });
    if (!item) throw new NotFoundException('Admin no encontrado');
    return item;
  }

  create(data: Partial<Admin>) {
    // Si tu tabla NO tiene default en created_at y es NOT NULL,
    // descomenta esta línea para autollenarlo como 'YYYY-MM-DD'.
    // if (!data.createdAt) data.createdAt = new Date().toISOString().slice(0, 10) as any;

    const entity = this.repo.create(data);
    return this.repo.save(entity);
  }

  async update(adminCed: string, data: Partial<Admin>) {
    await this.repo.update({ adminCed } as any, data);
    return this.findOne(adminCed);
  }

  async remove(adminCed: string) {
    const res = await this.repo.delete({ adminCed } as any);
    if (!res.affected) throw new NotFoundException('Admin no encontrado');
    return { deleted: true };
  }
}
