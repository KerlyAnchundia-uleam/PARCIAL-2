import { IsNotEmpty, IsString,  } from 'class-validator';
import { Tutor} from 'src/tutor/entities/tutor.entity';
import { Tutorado } from 'src/tutorado/entities/tutorado.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'tutoria' })
export class Tutoria {

  @PrimaryGeneratedColumn('uuid')
  id: string;


  // Relación uno a muchos con la entidad 'Tutor'
  @ManyToOne(() => Tutor, (tutor) => tutor.tutorias, { eager: true })
  tutor: Tutor;

  // Relación uno a muchos con la entidad 'Tutorado'
  @ManyToOne(() => Tutorado, (tutorado) => tutorado.tutorias, { eager: true })
  tutorado: Tutorado;

  // Atributos adicionales
  @Column()
  asignatura: string;

  @Column()
  numeroHoras: number;

  @Column()
  fecha: string;

  @IsString()
  @IsNotEmpty()
  estado: string;
}
