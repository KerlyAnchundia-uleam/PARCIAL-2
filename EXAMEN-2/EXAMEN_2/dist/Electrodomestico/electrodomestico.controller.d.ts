import { ElectrodomesticoService } from './electrodomestico.service';
import { CreateElectrodomesticoDto } from './dto/create-electrodomestico.dto';
import { UpdateElectrodomesticoDto } from './dto/update-electrodomestico.dto';
export declare class ElectrodomesticoController {
    private readonly electrodomesticoService;
    constructor(electrodomesticoService: ElectrodomesticoService);
    create(createElectrodomesticoDto: CreateElectrodomesticoDto): Promise<import("./entities/electrodomestico.entity").Electrodomestico>;
    findAll(): Promise<import("./entities/electrodomestico.entity").Electrodomestico[]>;
    findOne(id: number): Promise<import("./entities/electrodomestico.entity").Electrodomestico>;
    update(id: number, updateElectrodomesticoDto: UpdateElectrodomesticoDto): Promise<import("./entities/electrodomestico.entity").Electrodomestico>;
    remove(id: number): Promise<import("./entities/electrodomestico.entity").Electrodomestico>;
    softRemove(id: number): Promise<import("./entities/electrodomestico.entity").Electrodomestico>;
}
