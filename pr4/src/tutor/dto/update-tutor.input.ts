import { InputType, Field, ID } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateTutorInput } from './create-tutor.input';
import { IsInt, IsString } from 'class-validator';

@InputType()
export class UpdateTutorInput extends PartialType(CreateTutorInput) {
  @Field(() => ID)
  @IsInt()
  id: number;
}
