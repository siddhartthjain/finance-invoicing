import { Injectable } from '@nestjs/common';
import { LfRootService } from 'src/common';

@Injectable()
export class CreditCustomerService {
  constructor(private readonly lfRootService: LfRootService) {}
  async test() {
    return this.lfRootService.test_function();
  }
}
