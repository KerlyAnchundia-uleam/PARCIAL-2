import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TutoriaService } from './tutoria.service';
import { Tutoria } from './entities/tutoria.entity';
import { CreateTutoriaInput } from './dto/create-tutoria.input';
import { UpdateTutoriaInput } from './dto/update-tutoria.input';

@Resolver(() => Tutoria)
export class TutoriaResolver {
  constructor(private readonly tutoriaService: TutoriaService) {}

  @Mutation(() => Tutoria)
  createTutoria(@Args('createTutoriaInput') createTutoriaInput: CreateTutoriaInput): Promise<Tutoria> {
    return this.tutoriaService.create(createTutoriaInput);
  }

  @Query(() => [Tutoria], { name: 'tutorias' })
  findAll(): Promise<Tutoria[]> {
    return this.tutoriaService.findAll();
  }

  @Query(() => Tutoria, { name: 'tutoria' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Tutoria> {
    return this.tutoriaService.findOne(id);
  }

  @Mutation(() => Tutoria)
  updateTutoria(@Args('updateTutoriaInput') updateTutoriaInput: UpdateTutoriaInput): Promise<Tutoria> {
    return this.tutoriaService.update(updateTutoriaInput.id, updateTutoriaInput);
  }

  @Mutation(() => Tutoria)
  removeTutoria(@Args('id', { type: () => Int }) id: number): Promise<Tutoria> {
    return this.tutoriaService.remove(id);
  }
}
