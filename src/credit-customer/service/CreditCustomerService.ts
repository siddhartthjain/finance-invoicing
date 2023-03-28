import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { transaction } from 'objection';
import { CreditUserContract, LfRootService } from 'src/common';
import { CREDIT_CUSTOMER_REPO, CREDIT_USER_REPO } from 'src/common/constants';
import { CreditCustomer } from 'src/common/models/CreditCustomer';
import { CreditUser } from 'src/common/models/CreditUsers';
import { CreditCustomerContract } from 'src/common/repositories/contracts/CreditCustomer';
import { InjectModel } from 'src/core';
import { Response } from 'src/core/http';
import { BaseValidator } from 'src/core/validator';
import { CreateCreditCustomerValidator } from '../validators/CreatecreditCustomerValidator';
import * as crypto from "crypto";



@Injectable()
export class CreditCustomerService {
  constructor(
    private validator : BaseValidator,
    @Inject(CREDIT_USER_REPO)
    private creditUserRepo : CreditUserContract,

    @Inject(CREDIT_CUSTOMER_REPO)
    private creditCustomerRepo : CreditCustomerContract,

  ) {}

  

  async createCreditCustomer(inputs :Record<string,any>, user: Record<string,any> ) {
    const {
      user_id, 
      brand_id,  
      first_name,
      last_name = '',
      is_credit_available = 1,
      credit_period = 30,
      credit_charges = 2,
    } = inputs;

    await this.validator.fire(inputs, CreateCreditCustomerValidator);
    
    const financeManager = user.id;
    const brandSecretKey = crypto.randomBytes(16).toString('hex');

   
    // newCustomer ={user_id, brand_id, first_name,last_name, is_credit_available, credit_period, credit_charges} 
    const trx = await CreditCustomer.startTransaction();

    try {

      const result = await this.creditCustomerRepo.query(trx).insert({
        
        brand_id,
        first_name,
        last_name,
        is_credit_available,
        credit_period,
        credit_charges,
        brandSecretKey,
        created_by: financeManager,
        modified_by: financeManager

      });

      const creditCustomerId= result.id;
      const result2= await this.creditUserRepo.query(trx).insert({
        user_id,
        creditCustomerId,
        created_by:financeManager,
        modified_by: financeManager
      })
     await trx.commit();

    } catch (error) {
      console.error('Error in creating customer via self-onbaording: ', error);
      await trx.rollback();
      throw new InternalServerErrorException('Something went wrong');
    }
  }
  
  //supplier name (existing)
  
  // payment info (sid)
  
  // credit days
  // credit charges

  // customer name  
  //realtionship manager
  //inputting supplier list 
  //get brand name
  //getorde

  async get(inputs, user): Promise<Response> {
    const id = inputs.id;

    return;
  }
}
