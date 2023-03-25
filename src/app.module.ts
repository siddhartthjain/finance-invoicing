import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core';
import { CommonModule } from './common/module';
import { SupplierModule } from './supplier/module';
import { FabricModule } from './fabric/module';
import { OrderModule } from './order/module';

@Module({
  imports: [
    CoreModule,
    AuthModule,
    CommonModule,
    SupplierModule,
    FabricModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
