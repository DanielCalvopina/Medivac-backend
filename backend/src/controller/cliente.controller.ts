import { 
  Controller, 
  Get, 
  Post, 
  Patch, 
  Delete, 
  Param, 
  Body, 
  ParseIntPipe, 
  HttpCode, 
  HttpStatus 
} from '@nestjs/common';
import { ClienteService } from '../service/cliente.service';
import { CreateClienteDto, UpdateClienteDto, ClienteResponseDto } from '../dto/cliente.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly service: ClienteService) {}

  @Get()
  findAll(): Promise<ClienteResponseDto[]> {
    return this.service.findAll();
  }

  @Get(':cliId')
  findOne(@Param('cliId', ParseIntPipe) cliId: number): Promise<ClienteResponseDto> {
    return this.service.findOne(cliId);
  }

  @Post()
  create(@Body() body: CreateClienteDto): Promise<ClienteResponseDto> {
    return this.service.create(body);
  }

  @Patch(':cliId')
  update(
    @Param('cliId', ParseIntPipe) cliId: number,
    @Body() body: UpdateClienteDto,
  ): Promise<ClienteResponseDto> {
    return this.service.update(cliId, body);
  }

  @Patch(':cliId/toggle-status')
  toggleStatus(@Param('cliId', ParseIntPipe) cliId: number): Promise<ClienteResponseDto> {
    return this.service.toggleStatus(cliId);
  }

  // --- CORRECCIÓN AQUÍ ---
  @Delete(':cliId')
  @HttpCode(HttpStatus.NO_CONTENT) // Retorna 204 (Sin contenido)
  async remove(@Param('cliId', ParseIntPipe) cliId: number): Promise<void> {
    // Solo ejecutamos el servicio para que borre (o lance error si no existe).
    // NO usamos 'return' porque el status 204 no permite devolver un JSON.
    await this.service.remove(cliId);
  }
}