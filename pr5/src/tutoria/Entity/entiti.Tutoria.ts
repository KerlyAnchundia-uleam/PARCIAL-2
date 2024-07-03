
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';


@Entity({ name: 'Tutoria' })
export class Tutoria {


   

        @PrimaryColumn()
        id:number
      
       @Column()
       tutorId: number;
      
      
        @Column()
        tutoradoId: number;
      
      
        @Column()
        asignatura: string;

      
        @Column()
        numeroHoras: number;
      
        @Column()
        fecha: string;
      
        @Column()
        estado: string
      
      
       
      
  }