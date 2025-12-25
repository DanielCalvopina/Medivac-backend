import { OperadorService } from '../service/operador.service';
import { CreateOperadorDto, UpdateOperadorDto, OperadorResponseDto } from '../dto/operador.dto';
export declare class OperadorController {
    private readonly service;
    constructor(service: OperadorService);
    findAll(): Promise<OperadorResponseDto[]>;
    findOne(opCed: string): Promise<OperadorResponseDto>;
    create(body: CreateOperadorDto): Promise<OperadorResponseDto>;
    update(opCed: string, body: UpdateOperadorDto): Promise<OperadorResponseDto>;
    toggleStatus(opCed: string): Promise<OperadorResponseDto>;
    remove(opCed: string): Promise<void>;
}
