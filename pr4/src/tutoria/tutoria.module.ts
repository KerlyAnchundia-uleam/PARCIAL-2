import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TutoriaService } from './tutoria.service';
import { TutoriaResolver } from './tutoria.resolver';
import { Tutoria } from './entities/tutoria.entity';
import { Tutor } from 'src/tutor/entities/tutor.entity';
import { Tutorado } from 'src/tutorado/entities/tutorado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tutoria, Tutor, Tutorado])],
  providers: [TutoriaService, TutoriaResolver],
})
export class TutoriaModule {}
