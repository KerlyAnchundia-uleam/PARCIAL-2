import { CreateElectrodomesticoDto } from './dto/create-electrodomestico.dto';
import { UpdateElectrodomesticoDto } from './dto/update-electrodomestico.dto';
import { Repository } from 'typeorm';
import { Electrodomestico } from './entities/electrodomestico.entity';
export declare class ElectrodomesticoService {
    private readonly electrodomesticoRepository;
    constructor(electrodomesticoRepository: Repository<Electrodomestico>);
    create(createElectrodomesticoDto: CreateElectrodomesticoDto): Promise<Electrodomestico>;
    findAll(): Promise<Electrodomestico[]>;
    findOne(id: number): Promise<Electrodomestico>;
    update(id: number, updateElectrodomesticoDto: UpdateElectrodomesticoDto): Promise<Electrodomestico>;
    remove(id: number): Promise<Electrodomestico>;
    softRemove(id: number): Promise<Electrodomestico>;
    hardRemove(id: number): Promise<Electrodomestico>;
}
