import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTutoradoInput } from './dto/create-tutorado.input';
import { UpdateTutoradoInput } from './dto/update-tutorado.input';
import { Tutorado } from './entities/tutorado.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TutoradoService {
  constructor(
    @InjectRepository(Tutorado)
    private readonly tutoradoRepository: Repository<Tutorado>,
  ) {}

  async create(createTutoradoInput: CreateTutoradoInput): Promise<Tutorado> {
    const created = this.tutoradoRepository.create(createTutoradoInput);
    return await this.tutoradoRepository.save(created);
  }

  async findAll(estado: string): Promise<Tutorado[]> {
    if (estado === 'Activo' || estado === 'Desactivo') {
      return this.tutoradoRepository.find({ where: { estado } });
    }
    return await this.tutoradoRepository.find();
  }

  async findOne(id: number): Promise<Tutorado> {
    const tutorado = await this.tutoradoRepository.findOne({ where: { id } });
    if (!tutorado) {
      throw new NotFoundException(`Tutorado with id ${id} not found`);
    }
    return tutorado;
  }

  async update(id: number, updateTutoradoInput: UpdateTutoradoInput): Promise<Tutorado> {
    const tutorado = await this.tutoradoRepository.preload({
      id,
      ...updateTutoradoInput,
    });
    if (!tutorado) {
      throw new NotFoundException(`Tutorado with id ${id} not found`);
    }
    return this.tutoradoRepository.save(tutorado);
  }

  async remove(id: number): Promise<Tutorado> {
    const tutorado = await this.findOne(id);
    if (!tutorado) {
      throw new NotFoundException(`Tutorado with id ${id} not found`);
    }
    tutorado.estado = 'Desactivo';
    return this.tutoradoRepository.save(tutorado);
  }
}
