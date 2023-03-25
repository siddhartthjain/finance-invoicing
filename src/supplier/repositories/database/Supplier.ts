import { Injectable } from '@nestjs/common';
import { DatabaseRepository as DB, InjectModel } from 'src/core';
import { Supplier } from 'src/supplier/models';
import { SupplierContract } from '../contracts';

@Injectable()
export class SupplierRepository extends DB implements SupplierContract {
  @InjectModel(Supplier)
  model: Supplier;
}
