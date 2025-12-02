import { Repository } from 'typeorm';
import { Estaciones } from '../entity/Estaciones';
import { Terminal } from '../entity/Terminal';
import { EtnsCli } from '../entity/EtnsCli';
import { TmnCli } from '../entity/TmnCli';
import { Cliente } from '../entity/Cliente';
export declare class UbicacionService {
    private readonly estRepo;
    private readonly trmRepo;
    private readonly cliRepo;
    private readonly etnsCliRepo;
    private readonly tmnCliRepo;
    constructor(estRepo: Repository<Estaciones>, trmRepo: Repository<Terminal>, cliRepo: Repository<Cliente>, etnsCliRepo: Repository<EtnsCli>, tmnCliRepo: Repository<TmnCli>);
    private todayStr;
    listEstaciones(): Promise<Estaciones[]>;
    getEstacion(etnsId: number): Promise<Estaciones>;
    createEstacion(data: Partial<Estaciones>): Promise<Estaciones>;
    updateEstacion(etnsId: number, data: Partial<Estaciones>): Promise<Estaciones>;
    deleteEstacion(etnsId: number): Promise<{
        deleted: boolean;
    }>;
    listTerminales(): Promise<Terminal[]>;
    getTerminal(trmId: number): Promise<Terminal>;
    createTerminal(data: Partial<Terminal>): Promise<Terminal>;
    updateTerminal(trmId: number, data: Partial<Terminal>): Promise<Terminal>;
    deleteTerminal(trmId: number): Promise<{
        deleted: boolean;
    }>;
    vincularEstacionCliente(etnsId: number, cliId: number): Promise<EtnsCli[]>;
    vincularTerminalCliente(trmId: number, cliId: number): Promise<TmnCli[]>;
    estacionesPorCliente(cliId: number): Promise<Estaciones[]>;
    terminalesPorCliente(cliId: number): Promise<Terminal[]>;
    clientesPorEstacion(etnsId: number): Promise<Cliente[]>;
    clientesPorTerminal(trmId: number): Promise<Cliente[]>;
}
