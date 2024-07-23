import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Electrodomestico' })
export class Electrodomestico {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    codigo: string;

    @Column('text')
    descripcionDelFabricante: string;

    @Column('text', { nullable: true })
    tipo: string;

    @Column('text', { nullable: true })
    marca: string;

    @Column('decimal', { precision: 10, scale: 2 })
    precioConImpuestos: number;

    @Column('date', { nullable: true })
    fechaDeLaUltimaCompra: Date;

    @Column('text', { nullable: true })
    empresa: string;

    // Puedes agregar campos adicionales aquí si es necesario
    // Por ejemplo, para el estado
    @Column('text', { default: 'Activo' })
    estado: string;
}
