import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { FabricService } from 'src/fabric/services';
import {
  FABRIC_ORDER_DELIVERY_ADDRESS_REPOSITORY,
  FABRIC_ORDER_REPOSITORY,
} from '../constants';
import { FabricOrder } from '../models';
import {
  FabricOrderContract,
  FabricOrderDeliveryAddressContract,
} from '../repositories';

@Injectable()
export class ProvisionalOrderService {
  constructor(
    @Inject(FABRIC_ORDER_REPOSITORY) private fabricOrder: FabricOrderContract,
    @Inject(FABRIC_ORDER_DELIVERY_ADDRESS_REPOSITORY)
    private fabricOrderDeliveryAddress: FabricOrderDeliveryAddressContract,
    private fabricService: FabricService,
  ) {}

  async createProvisionalOrder(
    inputs: Record<string, any>,
  ): Promise<Record<string, any>> {
    // need to add validation here
    // will have user too in input
    // billTo will be constant (need to discuss)

    const {
      brandId,
      fabricName,
      fabricSpecification,
      hsnCode,
      billTo = 'Locofast Online Private Limited',
      estimatedDeliveryDate,
      terms = '',
      supplierId,
      quantity,
      procurementPrice,
      unitId,
      brandDeliveryAddressId,
    } = inputs;
    let fabricOrder;
    // will calculate using customer credit info
    const finalPrice = 2000;
    const trx = await FabricOrder.startTransaction();
    try {
      const fabric = await this.fabricService.addFabric(
        {
          brandId,
          fabricName,
          fabricSpecification,
          hsnCode,
        },
        trx,
      );
      const orderDeliveryDetails = await this.fabricOrderDeliveryAddress
        .query(trx)
        .insert({
          billTo,
          estimatedDeliveryDate,
          terms,
          brand_address_id: brandDeliveryAddressId,
          created_by: 1342,
          modified_by: 1342,
        });
      fabricOrder = await this.fabricOrder.query(trx).insert({
        customer_id: brandId,
        supplierId: supplierId,
        fabric_id: fabric.id,
        delivery_id: orderDeliveryDetails.id,
        quantity,
        procurement_price: procurementPrice,
        final_price: finalPrice,
        unit_id: unitId,
        created_by: 1342,
        modified_by: 1342,
      });
      await trx.commit();
    } catch (error) {
      console.log('Error in creating Order: ', error);
      await trx.rollback();
      throw new InternalServerErrorException('Something went wrong');
    }

    return fabricOrder;
  }
}
