
import { ApiProperty } from "@nestjs/swagger";

export class LoginDTO{
    constructor(){

    }

    @ApiProperty({description: "Nombre de Usuario"})
    username: string;
    @ApiProperty({description: "Password"})
    password: string;
}