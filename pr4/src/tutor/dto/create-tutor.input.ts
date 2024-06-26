import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';

@InputType()
export class CreateTutorInput {
  @Field(() => Int)
  @IsInt()
  identificacion: number;

  @Field(() => String, { nullable: true })
  @IsString()
  nombre?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  experticia?: string;

  @Field(() => String)
  @IsString()
  estado: string = "Activo";
}
