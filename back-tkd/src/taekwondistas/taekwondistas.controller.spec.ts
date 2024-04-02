import { Test, TestingModule } from '@nestjs/testing';
import { TaekwondistasController } from './taekwondistas.controller';

describe('TaekwondistasController', () => {
  let controller: TaekwondistasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaekwondistasController],
    }).compile();

    controller = module.get<TaekwondistasController>(TaekwondistasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
