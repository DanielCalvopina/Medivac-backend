import { Repository } from 'typeorm';
import { Mancuerna } from '../entity/Mancuerna';
import { Tracto } from '../entity/Tracto';
import { Tanque } from '../entity/Tanque';
import { Dolly } from '../entity/Dolly';
import { Operador } from '../entity/Operador';
import { MancTanq } from '../entity/MancTanq';
import { MancOp } from '../entity/MancOp';
import { CreateMancuernaDto, MancuernaItemsDto, MancuernaItemDto } from '../dto/mancuerna.dto';
export declare class MancuernaService {
    private readonly mancuernaRepo;
    private readonly tractoRepo;
    private readonly dollyRepo;
    private readonly tanqueRepo;
    private readonly opRepo;
    private readonly mancTanqRepo;
    private readonly mancOpRepo;
    constructor(mancuernaRepo: Repository<Mancuerna>, tractoRepo: Repository<Tracto>, dollyRepo: Repository<Dolly>, tanqueRepo: Repository<Tanque>, opRepo: Repository<Operador>, mancTanqRepo: Repository<MancTanq>, mancOpRepo: Repository<MancOp>);
    private toResponseDto;
    private ocuparComponentes;
    private liberarComponentes;
    private validarDisponibilidad;
    private buscarMancuernaExistente;
    create(dto: CreateMancuernaDto): Promise<MancuernaItemDto>;
    desarmar(mncId: number): Promise<{
        message: string;
    }>;
    findOne(mncId: number): Promise<MancuernaItemDto>;
    findAll(): Promise<MancuernaItemsDto>;
}
