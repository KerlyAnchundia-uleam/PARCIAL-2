import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsInt } from 'class-validator';

@InputType()
export class CreateTutoriaInput {
  @Field(() => String, )
  @IsString()
  asignatura?: string;



  @Field(() => String, )
  @IsString()
  fecha?: string;

  @Field(() => String,)
  @IsString()
  hora?: string;

  @Field(() => Int)
  @IsInt()
  tutorID: number;

  @Field(() => Int)
  @IsInt()
  tutoradoID: number;

  @Field(() => String)
  @IsString()
  estado: string = "Activo";
}
