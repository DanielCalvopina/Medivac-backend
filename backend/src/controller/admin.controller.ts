import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { AdminService } from '../service/admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly service: AdminService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':adminCed')
  findOne(@Param('adminCed') adminCed: string) {
    return this.service.findOne(adminCed);
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }

  @Patch(':adminCed')
  update(@Param('adminCed') adminCed: string, @Body() body: any) {
    return this.service.update(adminCed, body);
  }

  @Delete(':adminCed')
  remove(@Param('adminCed') adminCed: string) {
    return this.service.remove(adminCed);
  }
}
