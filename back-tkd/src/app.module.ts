import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
/* CONTROLLERS */
import { AppController } from './app.controller';
import { DojansController } from './dojans/dojans.controller';
import { TaekwondistasController } from './taekwondistas/taekwondistas.controller';
import { TournametsController } from './tournamets/tournamets.controller';
import { ExamsController } from './exams/exams.controller';
import { TrainingsController } from './trainings/trainings.controller';

/*SERVICES*/
import { AppService } from './app.service';

/*MODULOS*/
import { UsersModule } from './user/user.module';

import { basename, join } from 'path';
import User from './user/user.entity';



@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    username: "root", //process.env.DBUSER
    password: "",
    host: "localhost", //process.env.DBHOST
    port: 3306, //Number(process.env.DBPORT),
    database: "tkd", //process.env.DBNAME,
    entities: [User],
    //entities: [__dirname + '/../**/*.entity.js'],
    autoLoadEntities: true
  }), 
  UsersModule
],
  controllers: [AppController, DojansController, TaekwondistasController, TournametsController, ExamsController, TrainingsController],
  providers: [AppService],
})
export class AppModule {}
