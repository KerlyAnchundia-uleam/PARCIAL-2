import { Module } from '@nestjs/common';
import { TutoriaService } from './Tutoria.service';
import { TutoriaGateway } from './Tutoria.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tutoria } from './Entity/entiti.Tutoria';

@Module({
  providers: [TutoriaGateway, TutoriaService],
  imports: [ TypeOrmModule.forFeature([Tutoria]) ],
  exports: [ TypeOrmModule ]
})
export class TutoriaModule {}
