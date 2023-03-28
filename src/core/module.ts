import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KNEX_CONNECTION } from './constants';
import { BaseModel } from './db';
import * as Knex from 'knex';
import * as KnexConfig from '../../knexfile';
import { getProviders } from './provider';
import { BaseValidator } from './validator';

@Global()
@Module({
  imports: [ConfigModule.forRoot()],
  providers: [
    ...getProviders(),
    {
      provide: KNEX_CONNECTION,
      useFactory: async () => {
        BaseModel.knex(Knex(KnexConfig));
        BaseModel.setModulePaths([]);
        return Knex(KnexConfig);
      },
    },
  ],
  exports: [BaseValidator],
})
export class CoreModule {}
