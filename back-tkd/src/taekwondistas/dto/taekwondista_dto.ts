import { ApiProperty } from "@nestjs/swagger";

export class TaekwondistaDTO{
    constructor(){

    }

    @ApiProperty({description: "Nombre del Taekwondista"})
    name: string;
    @ApiProperty({description: "Apellido del Taekwondista"})
    lastname: string;
    @ApiProperty({description: "DNI del Taekwondista"})
    document: number;
    @ApiProperty({description: "Fecha de Nacimiento"})
    birthdate: string;
    @ApiProperty({description: "Dirección"})
    address: string;
    @ApiProperty({description: "Categoría", enum: ["10 Gub - Blanco","9 Gub - Blanco punta Amarilla","8 Gub - Amarillo","7 Gub - Amarillo punta Verde","6 Gub - Verde", "5 Gub - Verde punta Azul","4 Gub - Azul","3 Gub - Azul punta Roja","2 Gub - Rojo","1 Gub - Rojo punta Negra","1 dan - Boo Sabom Nim","2 dan - Boo Sabom Nim","3 dan - Boo Sabom Nim","4 dan - Sabom Nim","5 dan - Sabom Nim","6 dan - Sabom Nim","7 dan - Sajiong Nim","8 dan - Sajiong Nim","9 dan - Sasong Nim"]})
    category: string[];
    @ApiProperty({description: "Instructor a Cargo"})
    instructorName: string;
    @ApiProperty({description: "Peso"})
    weight: number;
    @ApiProperty({description: "Altura"})
    height: number;
    @ApiProperty({description: "Género"})
    genre: string;
    @ApiProperty({description: "Nacionalidad"})
    nationality: string;
    @ApiProperty({description: "Número de Celular"})
    cellphone: number;
    @ApiProperty({description: "Email"})
    email: string;

    @ApiProperty({description: "Nombre del Contacto de Emergencia"})
    nameEmergency: string;
    @ApiProperty({description: "Apellido del Cotacto de Emergencia"})
    lastnameEmergency: string;
    @ApiProperty({description: "Vínculo del Cotacto de Emergencia"})
    relationshipEmergency: string;
    @ApiProperty({description: "Número de Celular del Cotacto de Emergencia"})
    cellphoneEmergency: number;
}