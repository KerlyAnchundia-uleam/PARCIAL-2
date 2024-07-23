import { Injectable } from '@nestjs/common';
import { CreateElectrodomesticoDto } from './dto/create-electrodomestico.dto';
import { UpdateElectrodomesticoDto } from './dto/update-electrodomestico.dto';
import { Repository } from 'typeorm';
import { Electrodomestico } from './entities/electrodomestico.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ElectrodomesticoService {
  constructor(
    @InjectRepository(Electrodomestico)
    private readonly electrodomesticoRepository: Repository<Electrodomestico>
  ) {}

  async create(createElectrodomesticoDto: CreateElectrodomesticoDto) {
    const electrodomestico = this.electrodomesticoRepository.create(createElectrodomesticoDto);
    await this.electrodomesticoRepository.save(electrodomestico);
    return electrodomestico;
  }

  async findAll() {
    return this.electrodomesticoRepository.find();
  }

  async findOne(id: number) {
    return this.electrodomesticoRepository.findOneBy({ id });
  }

  async update(id: number, updateElectrodomesticoDto: UpdateElectrodomesticoDto) {
    const updated = await this.electrodomesticoRepository.update(id, updateElectrodomesticoDto);
    return updated.affected > 0 ? this.electrodomesticoRepository.findOneBy({ id }) : null;
  }

  async remove(id: number) {
    const electrodomestico = await this.findOne(id);
    if (!electrodomestico) {
      return null;
    }
    await this.electrodomesticoRepository.remove(electrodomestico);
    return electrodomestico;
  }

  async softRemove(id: number) {
    const electrodomestico = await this.findOne(id);
    if (!electrodomestico) {
      return null;
    }
    electrodomestico.estado = 'Desactivado';
    await this.electrodomesticoRepository.save(electrodomestico);
    return electrodomestico;
  }

  async hardRemove(id: number) {
    const electrodomestico = await this.findOne(id);
    if (!electrodomestico) {
      return null;
    }
    await this.electrodomesticoRepository.delete(id);
    return electrodomestico;
  }
}
