import { Tutoria } from 'src/tutoria/entities/tutoria.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity({ name: 'tutor' })
export class Tutor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })  // Limitar la longitud del nombre a 100 caracteres
  nombre: string;

  @Column({ unique: true, length: 50 })  // Asegurarse de que la identificación sea única y limitar su longitud a 50 caracteres
  identificacion: string;

  @Column('text')  // Usar 'text' para campos largos de experiencia
  experticia: string;

  @Column('text', { default: 'Activo' })  // Usar 'text' para el estado con valor por defecto 'Activo'
  estado: string;

  @OneToMany(
    () => Tutoria,
    tutoria => tutoria.tutor,
    { cascade: true }  // Añadir cascade: true para que las operaciones en Tutor se propaguen a Tutoria
  )
  tutorias: Tutoria[];
}
