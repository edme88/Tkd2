
import { ApiProperty } from "@nestjs/swagger";

export class TrainingDTO{
    constructor(){

    }

    @ApiProperty({description: "Nombre de la capacitación"})
    name: string;
    @ApiProperty({description: "Descripción de la capacitación"})
    description: string;
    @ApiProperty({description: "Fecha de la Capacitación"})
    trainingDate: string;
    @ApiProperty({description: "Hora de la Capacitación"})
    trainingHour: string;
    @ApiProperty({description: "Dirección de la Capacitación"})
    address: string;
    @ApiProperty({description: "Ciudad de la Capacitación", default: "Córdoba"})
    city: string;
    @ApiProperty({description: "Provincia de la Capacitación", default: "Córdoba"})
    province: string;
    @ApiProperty({description: "Costo de la Capacitación"})
    amount: string;
    @ApiProperty({description: "Público Destinatario"})
    audience: string;
}