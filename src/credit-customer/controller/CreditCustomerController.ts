import { Controller, Get } from '@nestjs/common';
import { CreditCustomerService } from '../service';

@Controller('credit-customer')
export class CreditCustomerController {
  constructor(private creditCustomerService: CreditCustomerService) {}
  @Get()
  async testRoute() {
    return this.creditCustomerService.test();
  }
}
