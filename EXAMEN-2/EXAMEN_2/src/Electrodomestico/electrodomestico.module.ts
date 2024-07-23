import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ElectrodomesticoService } from './electrodomestico.service';
import { ElectrodomesticoController } from './electrodomestico.controller';
import { Electrodomestico } from './entities/electrodomestico.entity';

@Module({
  controllers: [ElectrodomesticoController],
  providers: [ElectrodomesticoService],
  imports: [TypeOrmModule.forFeature([Electrodomestico])],
  exports: [TypeOrmModule],
})
export class ElectrodomesticoModule {}
