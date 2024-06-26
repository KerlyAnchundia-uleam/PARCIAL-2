import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateTutoradoInput {
  @Field(() => String)
  @IsString()
  identificacion: string;

  @Field(() => String, { nullable: true })
  @IsString()
  nombre?: string;

  @Field(() => String)
  @IsString()
  estado: string = "Activo";
}
