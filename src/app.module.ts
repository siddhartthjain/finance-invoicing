import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core';
import { CommonModule } from './common/module';
import { CreditCustomerModule } from './credit-customer/module';

@Module({
  imports: [CoreModule, AuthModule, CommonModule, CreditCustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
