import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tutoria } from 'src/tutoria/entities/tutoria.entity';

@ObjectType()
@Entity()
export class Tutor {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ unique: true })
  @Field(() => Int)
  identificacion: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  nombre?: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  experticia?: string;

  @OneToMany(() => Tutoria, (tutoria) => tutoria.tutor)
  @Field(() => [Tutoria], { nullable: true })
  tutoria?: Tutoria[];

  @Column({ default: 'Activo' })
  @Field(() => String)
  estado: string;
}
