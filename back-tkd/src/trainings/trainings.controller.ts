import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TrainingDTO } from './dto/training_dto';

@Controller('trainings')
export class TrainingsController {
    /*
    GETS
    */
    @Get("/")
    @ApiOperation({
        summary: 'Obtiene el listado de todas las Capacitaciones',
    })
    @ApiResponse({
        type: TrainingDTO
    })
    getTrainings(){
        return "Capacitación1"
    }
}
