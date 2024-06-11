/* eslint-disable */
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { UserDTO } from './dto/user_dto';
import { LoginDTO } from './dto/login_dto';
import { UserService } from './user.service';

@ApiTags('Usuarios')
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
    /*
    POST
    */
    @Post("/")
    @ApiOperation({
        summary: "Permite guardar un nuevo usuario"
    })
    @ApiResponse({
        type: UserDTO
    })
    createUser(@Body() body: UserDTO){
        return this.service.createUser(body)
    }
    /*
    PUT
    */
   @Put(":id")
   @ApiOperation({
        summary: "Permite modificar un usuario existente"
    })
    @ApiParam({
        name: "id",
        required: true
    })
    @ApiResponse({
        type: UserDTO
    })
    updateUser(@Body() newBody: UserDTO, @Param() id: number){
        console.log("ACA ESTA EL PUT")
        return this.service.modifyUser(id, newBody)
    }
    /*
    DELETE
    */
    @Delete(":id")
    @ApiOperation({
        summary: "Permite eliminar un usuario existente"
    })
    @ApiParam({
        name: "id",
        required: true
    })
    @ApiResponse({
        type: UserDTO
    })
    async deleteUser(@Param("id") id: number, @Res({passthrough: true}) response: Response){
        const resp = await this.service.deleteUser(id);
        console.log(resp);
        const statusCode = resp["deleted"] ? HttpStatus.OK : HttpStatus.CONTINUE;
        /*if(!resp.deleted){
            console.log("Entro al if");
            throw new HttpException(resp.response, HttpStatus.CONTINUE);
        }*/
        //console.log(statusCode);
        console.log(`Llego al response de aca ${resp}`);
       // response.status(statusCode);
        //response.status(statusCode).json(resp["response"]);
        response.status(statusCode).json(resp);
        //response.json(resp);
    }
    /*
    LOGIN
    */
    @Post("/login")
    @ApiOperation({
        summary: "Permite loguear un usuario"
    })
    @ApiResponse({
        type: LoginDTO
    })
    loginUser(@Body() body: LoginDTO){
        return this.service.loginUser(body)
    }
}
