import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTutoriaInput } from './dto/create-tutoria.input';
import { UpdateTutoriaInput } from './dto/update-tutoria.input';
import { Tutoria } from './entities/tutoria.entity';
import { Tutor } from '../tutor/entities/tutor.entity';
import { Tutorado } from '../tutorado/entities/tutorado.entity';

@Injectable()
export class TutoriaService {
  constructor(
    @InjectRepository(Tutoria)
    private readonly tutoriaRepository: Repository<Tutoria>,
    @InjectRepository(Tutor)
    private readonly tutorRepository: Repository<Tutor>,
    @InjectRepository(Tutorado)
    private readonly tutoradoRepository: Repository<Tutorado>,
  ) {}

  async create(createTutoriaInput: CreateTutoriaInput): Promise<Tutoria> {
    const tutor = await this.tutorRepository.findOne({ where: { id: createTutoriaInput.tutorID } });
    const tutorado = await this.tutoradoRepository.findOne({ where: { id: createTutoriaInput.tutoradoID } });

    if (!tutor || !tutorado) {
      throw new Error('Tutor or Tutorado not found');
    }

    const tutoria = this.tutoriaRepository.create({ ...createTutoriaInput, tutor, tutorado });
    return this.tutoriaRepository.save(tutoria);
  }

  async findAll(): Promise<Tutoria[]> {
    return this.tutoriaRepository.find({ relations: ['tutor', 'tutorado'] });
  }

  async findOne(id: number): Promise<Tutoria> {
    return this.tutoriaRepository.findOne({ where: { id }, relations: ['tutor', 'tutorado'] });
  }

  async update(id: number, updateTutoriaInput: UpdateTutoriaInput): Promise<Tutoria> {
    const tutor = await this.tutorRepository.findOne({ where: { id: updateTutoriaInput.tutorID } });
    const tutorado = await this.tutoradoRepository.findOne({ where: { id: updateTutoriaInput.tutoradoID } });

    if (!tutor || !tutorado) {
      throw new Error('Tutor or Tutorado not found');
    }

    await this.tutoriaRepository.update(id, { ...updateTutoriaInput, tutor, tutorado });
    return this.findOne(id);
  }

  async remove(id: number): Promise<Tutoria> {
    const tutoria = await this.findOne(id);
    tutoria.estado = 'Desactivo';
    return this.tutoriaRepository.save(tutoria);
  }
}
