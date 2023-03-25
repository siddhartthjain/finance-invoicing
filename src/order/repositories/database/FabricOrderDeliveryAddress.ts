import { Injectable } from '@nestjs/common';
import { DatabaseRepository as DB, InjectModel } from 'src/core';
import { FabricOrderDeliveryAddress } from 'src/order/models';
import { FabricOrderDeliveryAddressContract } from '../contracts';

@Injectable()
export class FabricOrderDeliveryAddressRepository
  extends DB
  implements FabricOrderDeliveryAddressContract
{
  @InjectModel(FabricOrderDeliveryAddress)
  model: FabricOrderDeliveryAddress;
}
