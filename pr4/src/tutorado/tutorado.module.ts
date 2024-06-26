import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TutoradoService } from './tutorado.service';
import { TutoradoResolver } from './tutorado.resolver';
import { Tutorado } from './entities/tutorado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tutorado])],
  providers: [TutoradoService, TutoradoResolver],
})
export class TutoradoModule {}
