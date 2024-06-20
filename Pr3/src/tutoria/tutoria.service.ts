import { Injectable } from '@nestjs/common';
import { CreateTutoriaDto } from './dto/create-tutoria.dto';
import { UpdateTutoriaDto } from './dto/update-tutoria.dto';
import { Repository } from 'typeorm';
import { Tutoria } from './entities/tutoria.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TutoriaService {
  constructor(
    @InjectRepository(Tutoria)
    private readonly tutoriaRepository: Repository<Tutoria>
  ) {}

  async create(createTutoriaDto: CreateTutoriaDto) {
    console.log({
      ...createTutoriaDto,
      tutor: { id: createTutoriaDto.tutorId },
      tutorado: { id: createTutoriaDto.tutoradoId }
    });
    
    const tutoria = this.tutoriaRepository.create({
      ...createTutoriaDto,
      tutor: { id: createTutoriaDto.tutorId },
      tutorado: { id: createTutoriaDto.tutoradoId }
    });
    
    await this.tutoriaRepository.save(tutoria);
    return tutoria;
  }
  

  async findAll() {
    return this.tutoriaRepository.find();
  }

  async findOne(id: string) {
    return this.tutoriaRepository.findOneBy({ id });
  }

  async update(id: string, updateTutoriaDto: UpdateTutoriaDto) {
    const updated = await this.tutoriaRepository.update(id, updateTutoriaDto);
    return updated.affected > 0 ? this.tutoriaRepository.findOneBy({ id}) : null;
  }

  async remove(id: string) {
    const tutor = await this.findOne(id);
    tutor.estado = 'Desactivo'; // Assuming 'estado' is a property in Tutor entity
    return this.tutoriaRepository.save(tutor);
  }
}
