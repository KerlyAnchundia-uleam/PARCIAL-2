import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TutoradoService } from './tutorado.service';
import { CreateTutoradoInput } from './dto/create-tutorado.input';
import { UpdateTutoradoInput } from './dto/update-tutorado.input';
import { Tutorado } from './entities/tutorado.entity';

@Resolver(() => Tutorado)
export class TutoradoResolver {
  constructor(private readonly tutoradoService: TutoradoService) {}

  @Mutation(() => Tutorado)
  createTutorado(@Args('createTutoradoInput') createTutoradoInput: CreateTutoradoInput): Promise<Tutorado> {
    return this.tutoradoService.create(createTutoradoInput);
  }

  @Query(() => [Tutorado], { name: 'tutorados' })
  findAll(@Args('estado', { type: () => String, nullable: true }) estado: string) {
    return this.tutoradoService.findAll(estado);
  }

  @Query(() => Tutorado, { name: 'tutorado' })
  findOne(@Args('id', { type: () => Number }) id: number): Promise<Tutorado> {
    return this.tutoradoService.findOne(id);
  }

  @Mutation(() => Tutorado)
  updateTutorado(@Args('updateTutoradoInput') updateTutoradoInput: UpdateTutoradoInput): Promise<Tutorado> {
    return this.tutoradoService.update(updateTutoradoInput.id, updateTutoradoInput);
  }

  @Mutation(() => Tutorado)
  removeTutorado(@Args('id', { type: () => Number }) id: number): Promise<Tutorado> {
    return this.tutoradoService.remove(id);
  }
}
