import { Tutoria } from 'src/tutoria/entities/tutoria.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity('Tutorado')
export class Tutorado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  identificacion: string;

  @OneToMany(() => Tutoria, 
  tutoria => tutoria.tutorado,
    { cascade: true }
)
tutorias: Tutoria[]; 
  estado: string;

  
}
