import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tutor } from 'src/tutor/entities/tutor.entity';
import { Tutorado } from 'src/tutorado/entities/tutorado.entity';

@ObjectType()
@Entity()
export class Tutoria {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => String, )
  asignatura?: string;



  @Column()
  @Field(() => String, )
  fecha?: string;

  @Column()
  @Field(() => String, )
  hora?: string;

  @ManyToOne(() => Tutor, (tutor) => tutor.tutoria)
  @Field(() => Tutor)
  tutor: Tutor;

  @ManyToOne(() => Tutorado, (tutorado) => tutorado.tutoria)
  @Field(() => Tutorado)
  tutorado: Tutorado;

  @Column({ default: 'Activo' })
  @Field(() => String)
  estado: string;
}
