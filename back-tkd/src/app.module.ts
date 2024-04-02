import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DojansController } from './dojans/dojans.controller';
import { TaekwondistasController } from './taekwondistas/taekwondistas.controller';
import { TournametsController } from './tournamets/tournamets.controller';
import { ExamsController } from './exams/exams.controller';
import { TrainingsController } from './trainings/trainings.controller';

@Module({
  imports: [],
  controllers: [AppController, DojansController, TaekwondistasController, TournametsController, ExamsController, TrainingsController],
  providers: [AppService],
})
export class AppModule {}
