import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DojanDTO } from './dto/dojan_dto';

@ApiTags('Dojans')
@Controller('dojans')
export class DojansController {
    /*
    GETS
    */
    @Get("/")
    @ApiOperation({
        summary: 'Obtiene el listado de todos los Dojanes',
    })
    @ApiResponse({
        type: DojanDTO
    })
    getDonjans(){
        return "Dojo1"
    }

    /*
    POST
    */
    @Post("/")
    @ApiOperation({
        summary: 'Se agregan los datos de un nuevo Dojan',
    })
    postDonjan(@Body() body: DojanDTO){
        return body
    }
}
