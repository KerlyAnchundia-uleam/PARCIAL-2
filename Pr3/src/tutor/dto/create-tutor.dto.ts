import { IsOptional, IsString, MinLength, IsNotEmpty } from "class-validator";

export class CreateTutorDto {
    @IsOptional()
    id: number;

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    identificacion: string;

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    experticia: string;

    @IsString()
    @IsNotEmpty()
    estado: string = "Activo"; // Valor por defecto
}


