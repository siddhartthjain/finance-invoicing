import { Injectable } from '@nestjs/common';
import { LfRootService } from 'src/common';
import { Response } from 'src/core/http';

@Injectable()
export class CreditCustomerService {
  constructor() {}
  async get(inputs, user): Promise<Response> {
    const id= inputs.id;
    
    return 
  }
}
