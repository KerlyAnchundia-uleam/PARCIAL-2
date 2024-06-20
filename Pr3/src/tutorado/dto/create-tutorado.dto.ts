import { IsOptional, IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateTutoradoDto {


    @IsOptional()
    id: number;

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    identificacion: string;

    @IsString()
    @IsNotEmpty()
    estado: string = 'Activo'; // Valor por defecto
}

