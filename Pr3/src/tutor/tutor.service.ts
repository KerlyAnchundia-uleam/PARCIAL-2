import { Injectable } from '@nestjs/common';
import { CreateTutorDto } from './dto/create-tutor.dto';
import { UpdateTutorDto } from './dto/update-tutor.dto';
import { Repository } from 'typeorm';
import { Tutor } from './entities/tutor.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TutorService {
  constructor(
    @InjectRepository(Tutor)
    private readonly tutorRepository: Repository<Tutor>
  ) {}

  async create(createTutorDto: CreateTutorDto) {
    const tutor = this.tutorRepository.create(createTutorDto);
    return this.tutorRepository.save(tutor);
  }

  async findAll() {
    return this.tutorRepository.find();
  }

  async findOne(id: number) {
    return this.tutorRepository.findOneBy({ id });
  }

  async update(id: number, updateTutorDto: UpdateTutorDto) {
    const updated = await this.tutorRepository.update(id, updateTutorDto);
    return updated.affected > 0 ? this.tutorRepository.findOneBy({ id}) : null;
  }

  async remove(id: number) {
    const tutor = await this.findOne(id);
    tutor.estado = 'Desactivo'; // Assuming 'estado' is a property in Tutor entity
    return this.tutorRepository.save(tutor);
  }
}
