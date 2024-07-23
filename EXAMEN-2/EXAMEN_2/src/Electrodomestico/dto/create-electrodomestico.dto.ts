import { IsOptional, IsString, IsNotEmpty, IsNumber, IsDate, IsPositive } from "class-validator";
import { Type } from 'class-transformer';

export class CreateElectrodomesticoDto {

    @IsOptional()
    @IsNumber()
    @IsPositive()
    id?: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    codigo?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    descripcionDelFabricante?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    tipo?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    marca?: string;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    precioConImpuestos?: number;

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    fechaDeLaUltimaCompra?: Date;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    empresa?: string;
}
