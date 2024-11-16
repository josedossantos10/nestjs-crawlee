import { Test, TestingModule } from '@nestjs/testing';
import { BalcaoController } from './balcao.controller';

describe('BalcaoController', () => {
  let controller: BalcaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BalcaoController],
    }).compile();

    controller = module.get<BalcaoController>(BalcaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
