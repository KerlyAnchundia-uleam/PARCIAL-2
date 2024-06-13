import { CreateTutorDto, UpdateTutorDto } from '../dtos';
import { TutorEntity } from '../entities/tutor.entity';



export abstract class TutorRepository {

  abstract create( createTodoDto: CreateTutorDto ): Promise<TutorEntity>;
  abstract getAll(): Promise<TutorEntity[]>;
  abstract findById( id: number ): Promise<TutorEntity>;
  abstract updateById( updateTodoDto: UpdateTutorDto ): Promise<TutorEntity>;
  abstract deleteById( id: number ): Promise<TutorEntity>;

}