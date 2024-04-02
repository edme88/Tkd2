import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TournamentDTO } from './dto/tournament_dto';

@Controller('tournamets')
export class TournametsController {
    /*
    GETS
    */
    @Get("/")
    @ApiOperation({
        summary: 'Obtiene el listado de todos los Torneos',
    })
    @ApiResponse({
        type: TournamentDTO
    })
    getTournaments(){
        return "Torneo1"
    }
}
