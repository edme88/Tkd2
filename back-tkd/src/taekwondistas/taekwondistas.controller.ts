import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TaekwondistaDTO } from './dto/taekwondista_dto';


@ApiTags('Taekwondistas')
@Controller('taekwondistas')
export class TaekwondistasController {
    /*
    GETS
    */
    @Get("/")
    @ApiOperation({
        summary: 'Obtiene el listado de todos los Taekwondistas',
    })
    @ApiResponse({
        type: TaekwondistaDTO
    })
    getTaekwondistas(){
        return "Taekwndista1"
    }
}
