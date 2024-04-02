
import { ApiProperty } from "@nestjs/swagger";

export class ExamDTO{
    constructor(){

    }

    @ApiProperty({description: "Fecha del Exámen"})
    examDate: string;
    @ApiProperty({description: "Hora del Exámen"})
    examHour: string;
    @ApiProperty({description: "Instructor a Cargo"})
    instructor: string;
    @ApiProperty({description: "Ciudad del Exámen", default: "Córdoba"})
    city: string;
    @ApiProperty({description: "Provincia del Exámen", default: "Córdoba"})
    province: string;
    @ApiProperty({description: "Costo del Exámen", enum: ["10 Gub - Blanco","9 Gub - Blanco punta Amarilla","8 Gub - Amarillo","7 Gub - Amarillo punta Verde","6 Gub - Verde", "5 Gub - Verde punta Azul","4 Gub - Azul","3 Gub - Azul punta Roja","2 Gub - Rojo","1 Gub - Rojo punta Negra","1 dan - Boo Sabom Nim","2 dan - Boo Sabom Nim","3 dan - Boo Sabom Nim","4 dan - Sabom Nim","5 dan - Sabom Nim","6 dan - Sabom Nim","7 dan - Sajiong Nim","8 dan - Sajiong Nim","9 dan - Sasong Nim"]})
    categoryExamCost: string[];
}