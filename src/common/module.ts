import { Module } from '@nestjs/common';
import { CREDIT_CUSTOMER_REPO,  CREDIT_USER_REPO, LF_ROOT_REPOSITORY } from './constants';
import { LfRootRepository } from './repositories';
import { CreditCustomerRepository } from './repositories/database/CreditCustomer';
import { CreditUserRepository } from './repositories/database/CreditUsers';
import { LfRootService } from './services';
@Module({
  providers: [
    LfRootService,
    {
      provide: LF_ROOT_REPOSITORY,
      useClass: LfRootRepository,
    },
    {
      provide: CREDIT_CUSTOMER_REPO,
      useClass: CreditCustomerRepository,
    },{
      provide: CREDIT_USER_REPO,
      useClass: CreditUserRepository,
    },
  ],
  exports: [
    LfRootService,
    {
      provide: LF_ROOT_REPOSITORY,
      useClass: LfRootRepository,
    },
    {
      provide: CREDIT_CUSTOMER_REPO,
      useClass: CreditCustomerRepository,
    },{
      provide: CREDIT_USER_REPO,
      useClass: CreditUserRepository,
    },
  ],
})
export class CommonModule {}
