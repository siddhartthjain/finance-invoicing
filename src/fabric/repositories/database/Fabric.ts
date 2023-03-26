import { Injectable } from '@nestjs/common';
import { DatabaseRepository as DB, InjectModel } from 'src/core';
import { Fabric } from 'src/fabric/models';
import { FabricContract } from '../contracts';

@Injectable()
export class FabricRepository extends DB implements FabricContract {
  @InjectModel(Fabric)
  model: Fabric;
}
