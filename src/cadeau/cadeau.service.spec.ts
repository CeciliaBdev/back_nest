import { Test, TestingModule } from '@nestjs/testing';
import { CadeauService } from './cadeau.service';

describe('CadeauService', () => {
  let service: CadeauService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CadeauService],
    }).compile();

    service = module.get<CadeauService>(CadeauService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
