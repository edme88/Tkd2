import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserDTO } from './dto/user_dto';
import { UserService } from './user.service';

@Controller('usuario')
export class UserController {

    constructor(private service: UserService){
        
    }
    /*
    GETS
    */
    @Get("/")
    @ApiOperation({
        summary: 'Obtiene el listado de todos los usuarios',
    })
    @ApiResponse({
        type: UserDTO
    })
    getUsers(){
        return this.service.getAll();
    }

    /*POST PUT DELETE */
}
