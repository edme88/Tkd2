import { Test, TestingModule } from '@nestjs/testing';
import { DojansController } from './dojans.controller';

describe('DojansController', () => {
  let controller: DojansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DojansController],
    }).compile();

    controller = module.get<DojansController>(DojansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
