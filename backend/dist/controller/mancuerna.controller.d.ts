import { MancuernaService } from '../service/mancuerna.service';
import { CreateMancuernaDto, UpdateMancuernaDto } from '../dto/mancuerna.dto';
export declare class MancuernaController {
    private readonly svc;
    constructor(svc: MancuernaService);
    findAll(): Promise<import("../dto/mancuerna.dto").MancuernaItemsDto>;
    findOne(id: number): Promise<import("../dto/mancuerna.dto").MancuernaItemDto>;
    create(body: CreateMancuernaDto): Promise<import("../dto/mancuerna.dto").MancuernaItemDto>;
    desarmar(id: number): Promise<{
        message: string;
    }>;
    update(id: number, body: UpdateMancuernaDto): null;
}
