import { Module } from '@nestjs/common';
import { CreditCustomerService } from './service/CreditCustomerService';
import { CreditCustomerController } from './controller/CreditCustomerController';
import { CommonModule } from 'src/common/module';
import { creditCustomerRepository } from './Repositories/database/CreditCustomer';
import { CREDIT_CUSTOMER_DETAILS_REPOSITORY } from './constants';

@Module({
  imports: [CommonModule],
  providers: [CreditCustomerService,{
    provide: CREDIT_CUSTOMER_DETAILS_REPOSITORY,
    useClass: creditCustomerRepository
  }],
  controllers: [CreditCustomerController],
})
export class CreditCustomerModule {}
