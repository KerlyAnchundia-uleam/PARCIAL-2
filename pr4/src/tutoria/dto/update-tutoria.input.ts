import { InputType, Field, ID } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateTutoriaInput } from './create-tutoria.input';
import { IsInt, IsString } from 'class-validator';

@InputType()
export class UpdateTutoriaInput extends PartialType(CreateTutoriaInput) {
  @Field(() => ID)
  @IsInt()
  id: number;
}
