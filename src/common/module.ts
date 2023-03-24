import { Module } from '@nestjs/common';
import { LF_ROOT_REPOSITORY } from './constants';
import { LfRootRepository } from './repositories';
import { LfRootService } from './services';
@Module({
  providers: [
    LfRootService,
    {
      provide: LF_ROOT_REPOSITORY,
      useClass: LfRootRepository,
    },
  ],
  exports: [
    LfRootService,
    {
      provide: LF_ROOT_REPOSITORY,
      useClass: LfRootRepository,
    },
  ],
})
export class CommonModule {}
