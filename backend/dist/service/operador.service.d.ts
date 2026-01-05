import { Repository } from 'typeorm';
import { Operador } from '../entity/Operador';
import { CreateOperadorDto, UpdateOperadorDto, OperadorResponseDto } from '../dto/operador.dto';
export declare class OperadorService {
    private readonly repo;
    constructor(repo: Repository<Operador>);
    private toResponseDto;
    findAll(): Promise<OperadorResponseDto[]>;
    findOne(opCed: string): Promise<OperadorResponseDto>;
    create(dto: CreateOperadorDto): Promise<OperadorResponseDto>;
    update(opCed: string, dto: UpdateOperadorDto): Promise<OperadorResponseDto>;
    toggleStatus(opCed: string): Promise<OperadorResponseDto>;
    remove(opCed: string): Promise<{
        deleted: true;
    }>;
}
