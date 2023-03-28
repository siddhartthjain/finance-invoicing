import { Injectable } from '@nestjs/common';
import { Locofastroot } from 'src/common/models/Locofastroot';
import { DatabaseRepository as DB, InjectModel } from 'src/core';
import { LfRootContract } from '../contracts/CreditUser';
@Injectable()
export class LfRootRepository extends DB implements LfRootContract {
  @InjectModel(Locofastroot)
  model: Locofastroot;
  async test() {
    const connection = Locofastroot.query();
    const data = connection.select('*').where('id', '=', 10);
    const data2 = this.query().onlyCount();
    return await data2;
  }
}
