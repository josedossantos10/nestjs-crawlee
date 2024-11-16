import { Test, TestingModule } from '@nestjs/testing';
import { BalcaoService } from './balcao.service';

describe('BalcaoService', () => {
  let service: BalcaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BalcaoService],
    }).compile();

    service = module.get<BalcaoService>(BalcaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
