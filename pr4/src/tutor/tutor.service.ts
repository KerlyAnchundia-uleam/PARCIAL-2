import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTutorInput } from './dto/create-tutor.input';
import { UpdateTutorInput } from './dto/update-tutor.input';
import { Tutor } from './entities/tutor.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TutorService {
  constructor(
    @InjectRepository(Tutor)
    private readonly tutorRepository: Repository<Tutor>,
  ) {}

  async create(createTutorInput: CreateTutorInput): Promise<Tutor> {
    const created = this.tutorRepository.create(createTutorInput);
    return await this.tutorRepository.save(created);
  }

  async findAll(estado: string): Promise<Tutor[]> {
    if (estado === 'Activo' || estado === 'Desactivo') {
      return this.tutorRepository.find({ where: { estado } });
    }
    return await this.tutorRepository.find();
  }

  async findOne(id: number): Promise<Tutor> {
    const tutor = await this.tutorRepository.findOne({ where: { id } });
    if (!tutor) {
      throw new NotFoundException(`Tutor with id ${id} not found`);
    }
    return tutor;
  }

  async update(id: number, updateTutorInput: UpdateTutorInput): Promise<Tutor> {
    const tutor = await this.tutorRepository.preload({
      id,
      ...updateTutorInput,
    });
    if (!tutor) {
      throw new NotFoundException(`Tutor with id ${id} not found`);
    }
    return this.tutorRepository.save(tutor);
  }

  async remove(id: number): Promise<Tutor> {
    const tutor = await this.findOne(id);
    if (!tutor) {
      throw new NotFoundException(`Tutor with id ${id} not found`);
    }
    tutor.estado = 'Desactivo';
    return this.tutorRepository.save(tutor);
  }
}
