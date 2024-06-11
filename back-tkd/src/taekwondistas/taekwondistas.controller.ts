import { Body, Controller, Get, Post, Headers } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody, ApiHeader } from '@nestjs/swagger';
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

    /*POST*/
    @Post()
    @ApiHeader({
        name: 'nombre',
        description: 'Nombre del Taekwondista',
        required: true
    })
    @ApiBody({})
    //@ApiCreatedResponse
    //@ApiBadRequestResponse
    //@ApiInternalServerErrorResponse
    createTaekwondista(@Headers('name') name, @Body() body){
        return `Se ejecuto un POST con el ${name} y ${body}`;
    }
}
