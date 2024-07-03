import { Module } from '@nestjs/common';
import { TutoriaModule } from './tutoria/Tutoria.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TutoriaModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'postgres',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
   ],
  controllers: [],
  providers: [],
})
export class AppModule {}