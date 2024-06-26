import { InputType, Field, ID } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateTutoradoInput } from './create-tutorado.input';
import { IsInt, IsString } from 'class-validator';

@InputType()
export class UpdateTutoradoInput extends PartialType(CreateTutoradoInput) {
  @Field(() => ID)
  @IsInt()
  id: number;
}
