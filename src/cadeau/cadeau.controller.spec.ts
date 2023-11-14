import { Test, TestingModule } from '@nestjs/testing';
import { CadeauController } from './cadeau.controller';

describe('CadeauController', () => {
  let controller: CadeauController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CadeauController],
    }).compile();

    controller = module.get<CadeauController>(CadeauController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
