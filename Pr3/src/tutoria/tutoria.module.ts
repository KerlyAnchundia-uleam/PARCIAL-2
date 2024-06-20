import { Module } from '@nestjs/common';
import { TutoriaService } from './tutoria.service';
import { TutoriaController } from './tutoria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tutoria } from './entities/tutoria.entity';

@Module({
  controllers: [TutoriaController],
  providers: [TutoriaService],

  imports: [TypeOrmModule.forFeature([Tutoria])],
  exports: [TypeOrmModule],
})
export class TutoriaModule {}
