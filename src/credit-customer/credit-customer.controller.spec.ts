import { Test, TestingModule } from '@nestjs/testing';
import { CreditCustomerController } from './controller/CreditCustomerController';

describe('CreditCustomerController', () => {
  let controller: CreditCustomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreditCustomerController],
    }).compile();

    controller = module.get<CreditCustomerController>(CreditCustomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
