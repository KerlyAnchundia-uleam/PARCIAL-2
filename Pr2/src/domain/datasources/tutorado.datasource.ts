import { CreateTutoradoDto, UpdateTutoradoDto } from '../dtos';
import { TutoradoEntity } from '../entities/tutorado.entity';

export abstract class TutoradoDatasource {

  abstract create(createTutoradoDto: CreateTutoradoDto): Promise<TutoradoEntity>;
  abstract getAll(): Promise<TutoradoEntity[]>;
  abstract findById(id: number): Promise<TutoradoEntity>;
  abstract updateById(updateTutoradoDto: UpdateTutoradoDto): Promise<TutoradoEntity>;
  abstract deleteById(id: number): Promise<TutoradoEntity>;

}
