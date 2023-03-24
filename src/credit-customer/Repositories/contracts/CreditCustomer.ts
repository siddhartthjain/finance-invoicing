import { Response } from "src/core/http";
import { CreditCustomer } from "src/credit-customer/models";
import {RepositoryContract} from '../../../core/db/repositories/Contract'


export interface  CreditCustomerContract extends RepositoryContract
{
     get(inputs , user): Promise<Record<string,any>>
}