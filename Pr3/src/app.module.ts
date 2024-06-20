import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TutorModule } from './tutor/tutor.module';
import { TutoriaModule } from './tutoria/tutoria.module';
import { TutoradoModule } from './tutorado/tutorado.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TutorModule, TutoradoModule, TutoriaModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'web',
      synchronize: true,
      autoLoadEntities:true
    }),
  ],



  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

