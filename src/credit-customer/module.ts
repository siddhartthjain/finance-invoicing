import { Module } from '@nestjs/common';
import { CreditCustomerService } from './service/CreditCustomerService';
import { CreditCustomerController } from './controller/CreditCustomerController';
import { CommonModule } from 'src/common/module';

@Module({
  imports: [CommonModule],
  providers: [CreditCustomerService],
  controllers: [CreditCustomerController],
})
export class CreditCustomerModule {}
