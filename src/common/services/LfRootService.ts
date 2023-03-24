import { Inject, Injectable } from '@nestjs/common';
import { LF_ROOT_REPOSITORY } from '../constants';
import { LfRootContract } from '../repositories';

@Injectable()
export class LfRootService {
  constructor(
    @Inject(LF_ROOT_REPOSITORY) private locofastroot: LfRootContract,
  ) {}

  async test_function() {
    return this.locofastroot.test();
  }
}
