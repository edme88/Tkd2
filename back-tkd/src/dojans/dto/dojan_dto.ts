
import { ApiProperty } from "@nestjs/swagger";

export class DojanDTO{
    constructor(){

    }

    @ApiProperty({description: "Nombre del Dojan"})
    name: string;
    @ApiProperty({description: "Dirección del Dojan"})
    address: string;
    @ApiProperty({description: "Ciudad del Dojan", default: "Córdoba"})
    city: string;
    @ApiProperty({description: "Días de entrenamiento en el Dojan", enum: ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"]})
    trainingDays: string[];
    @ApiProperty({description: "Hora de Clases"})
    trainingHours: string;
    @ApiProperty({description: "Cuota"})
    quoteAmount: string;
    @ApiProperty({description: "Nombre del Sabon a Cargo"})
    instructorName: string;
    @ApiProperty({description: "Restricción de la clase"})
    restriction: string;
}