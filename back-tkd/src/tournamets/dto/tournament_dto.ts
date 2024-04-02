
import { ApiProperty } from "@nestjs/swagger";

export class TournamentDTO{
    constructor(){

    }

    @ApiProperty({description: "Nombre del Torneo"})
    name: string;
    @ApiProperty({description: "Fecha del Torneo"})
    tournamentDate: string;
    @ApiProperty({description: "Hora del Torneo"})
    tournamentHour: string;
    @ApiProperty({description: "Dirección del Torneo"})
    address: string;
    @ApiProperty({description: "Ciudad del Torneo", default: "Córdoba"})
    city: string;
    @ApiProperty({description: "Costo del Torneo"})
    amount: string;
    @ApiProperty({description: "Categoría de Competición", enum: ["Tul individual","Lucha individual","Tul Equipo","Lucha Equipo","Tul aplicado","Rutina de Defensa Personal","Rotura de Potencia","Rotura de Habilidad"]})
    categoryCompetition: string[];
    @ApiProperty({description: "Categoría de Competidores", enum: ["Infantiles  Cadetes (11-13)","Juveniles (14-17)","Adultos (18-34)","Veteranos Plata (35-44)","Veteranos Oro (45+)"]})
    categoryCompetitors: string[];
}