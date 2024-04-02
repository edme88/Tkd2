import { Test, TestingModule } from '@nestjs/testing';
import { TournametsController } from './tournamets.controller';

describe('TournametsController', () => {
  let controller: TournametsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TournametsController],
    }).compile();

    controller = module.get<TournametsController>(TournametsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
