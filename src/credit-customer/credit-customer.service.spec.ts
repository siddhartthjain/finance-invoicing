import { Test, TestingModule } from '@nestjs/testing';
import { CreditCustomerService } from './service/CreditCustomerService';

describe('CreditCustomerService', () => {
  let service: CreditCustomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreditCustomerService],
    }).compile();

    service = module.get<CreditCustomerService>(CreditCustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
