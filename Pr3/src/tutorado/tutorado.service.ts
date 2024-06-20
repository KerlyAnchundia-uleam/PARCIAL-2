import { Injectable } from '@nestjs/common';
import { CreateTutoradoDto } from './dto/create-tutorado.dto';
import { UpdateTutoradoDto } from './dto/update-tutorado.dto';
import { Repository } from 'typeorm';
import { Tutorado } from './entities/tutorado.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TutoradoService {
  constructor(
    @InjectRepository(Tutorado)
    private readonly tutoradoRepository: Repository<Tutorado>
  ) {}

  async create(createTutoradoDto: CreateTutoradoDto) {
    const tutorado = this.tutoradoRepository.create(createTutoradoDto);
    return this.tutoradoRepository.save(tutorado);
  }

  async findAll() {
    return this.tutoradoRepository.find();
  }

  async findOne(id: number) {
    return this.tutoradoRepository.findOneBy({ id });
  }

  async update(id: number, updateTutoradoDto: UpdateTutoradoDto) {
    const updated = await this.tutoradoRepository.update(id, updateTutoradoDto);
    return updated.affected > 0 ? this.tutoradoRepository.findOneBy({ id }) : null;
  }

  async remove(id: number) {
    const tutor = await this.findOne(id);
    tutor.estado = 'Desactivo'; // Assuming 'estado' is a property in Tutor entity
    return this.tutoradoRepository.save(tutor);
  }
}
