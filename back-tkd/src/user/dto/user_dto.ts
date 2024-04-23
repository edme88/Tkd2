
import { ApiProperty } from "@nestjs/swagger";

export class UserDTO{
    constructor(){

    }

    @ApiProperty({description: "Nombre"})
    name: string;
    @ApiProperty({description: "Email"})
    email: string;
}