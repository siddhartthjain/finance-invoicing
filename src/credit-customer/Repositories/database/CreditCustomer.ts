import { Injectable } from "@nestjs/common";
import { DatabaseRepository } from "src/core";
import { Response } from "src/core/http";
import { CreditCustomer } from "src/credit-customer/models";
import { CreditCustomerContract } from "../contracts/CreditCustomer";

@Injectable()
export class creditCustomerRepository extends DatabaseRepository implements CreditCustomerContract
{
   
  
 async get(id :number, user: number): Promise<Record<string,any>>
 {
      const query = await CreditCustomer.query().where('id',"=",`${id}`);
      return query;

 }
} 