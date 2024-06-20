import { IsOptional, IsString, IsInt, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateTutoriaDto {

    @IsString()
    @IsOptional()
    id: string;


    @IsNotEmpty()
    tutorId: number;

    
    @IsNotEmpty()
    tutoradoId: number;

    @IsString()
    @IsNotEmpty()
    asignatura: string;

    @IsInt()
    @IsNotEmpty()
    numeroHoras: number;


    @IsNotEmpty()
    fecha: string;



    @IsString()
    @IsNotEmpty()
    estado: string = "Activo"; // Valor por defecto

}
