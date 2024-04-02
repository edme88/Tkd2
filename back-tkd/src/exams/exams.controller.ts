import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ExamDTO } from './dto/exam_dto';

@Controller('exams')
export class ExamsController {
    /*
    GETS
    */
    @Get("/")
    @ApiOperation({
        summary: 'Obtiene el listado de todos los Exámenes',
    })
    @ApiResponse({
        type: ExamDTO
    })
    getExams(){
        return "Examen1"
    }
}
