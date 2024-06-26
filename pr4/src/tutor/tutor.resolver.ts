import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TutorService } from './tutor.service';
import { CreateTutorInput } from './dto/create-tutor.input';
import { UpdateTutorInput } from './dto/update-tutor.input';
import { Tutor } from './entities/tutor.entity';

@Resolver(() => Tutor)
export class TutorResolver {
  constructor(private readonly tutorService: TutorService) {}

  @Mutation(() => Tutor)
  createTutor(@Args('createTutorInput') createTutorInput: CreateTutorInput): Promise<Tutor> {
    return this.tutorService.create(createTutorInput);
  }

  @Query(() => [Tutor], { name: 'tutors' })
  findAll(@Args('estado', { type: () => String, nullable: true }) estado: string) {
    return this.tutorService.findAll(estado);
  }

  @Query(() => Tutor, { name: 'tutor' })
  findOne(@Args('id', { type: () => Number }) id: number): Promise<Tutor> {
    return this.tutorService.findOne(id);
  }

  @Mutation(() => Tutor)
  updateTutor(@Args('updateTutorInput') updateTutorInput: UpdateTutorInput): Promise<Tutor> {
    return this.tutorService.update(updateTutorInput.id, updateTutorInput);
  }

  @Mutation(() => Tutor)
  removeTutor(@Args('id', { type: () => Number }) id: number): Promise<Tutor> {
    return this.tutorService.remove(id);
  }
}
