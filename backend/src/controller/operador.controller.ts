import { 
  Controller, 
  Get, 
  Post, 
  Patch, 
  Delete, 
  Param, 
  Body, 
  HttpCode, 
  HttpStatus 
} from '@nestjs/common';
import { OperadorService } from '../service/operador.service';
import { CreateOperadorDto, UpdateOperadorDto, OperadorResponseDto } from '../dto/operador.dto';

@Controller('operador')
export class OperadorController {
  constructor(private readonly service: OperadorService) {}

  @Get()
  findAll(): Promise<OperadorResponseDto[]> {
    return this.service.findAll();
  }

  @Get(':opCed')
  findOne(@Param('opCed') opCed: string): Promise<OperadorResponseDto> {
    return this.service.findOne(opCed);
  }

  @Post()
  create(@Body() body: CreateOperadorDto): Promise<OperadorResponseDto> {
    return this.service.create(body);
  }

  @Patch(':opCed')
  update(
    @Param('opCed') opCed: string,
    @Body() body: UpdateOperadorDto,
  ): Promise<OperadorResponseDto> {
    return this.service.update(opCed, body);
  }

  @Patch(':opCed/toggle-status')
  toggleStatus(@Param('opCed') opCed: string): Promise<OperadorResponseDto> {
    return this.service.toggleStatus(opCed);
  }

  // --- CORRECCIÓN AQUÍ ---
  @Delete(':opCed') // 1. Cambiado de :cliId a :opCed
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('opCed') opCed: string): Promise<void> { 
    await this.service.remove(opCed); 
  }
}