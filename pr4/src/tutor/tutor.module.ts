import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TutorService } from './tutor.service';
import { TutorResolver } from './tutor.resolver';
import { Tutor } from './entities/tutor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tutor])],
  providers: [TutorService, TutorResolver],
})
export class TutorModule {}
