import { CreateTutoriaDto, UpdateTutoriaDto } from '../dtos';
import { TutoriaEntity } from '../entities/tutoria.entity';

export abstract class TutoriaDatasource {

  abstract create(createTutoriaDto: CreateTutoriaDto): Promise<TutoriaEntity>;
  abstract getAll(): Promise<TutoriaEntity[]>;
  abstract findById(id: number): Promise<TutoriaEntity>;
  abstract updateById(updateTutoriaDto: UpdateTutoriaDto): Promise<TutoriaEntity>;
  abstract deleteById(id: number): Promise<TutoriaEntity>;

}
