import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tutoria } from 'src/tutoria/entities/tutoria.entity';

@ObjectType()
@Entity()
export class Tutorado {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ unique: true })
  @Field(() => String)
  identificacion: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  nombre?: string;

  @OneToMany(() => Tutoria, (tutoria) => tutoria.tutorado)
  @Field(() => [Tutoria], { nullable: true })
  tutoria?: Tutoria[];

  @Column({ default: 'Activo' })
  @Field(() => String)
  estado: string;
}
