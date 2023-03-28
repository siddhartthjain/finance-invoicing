import { CreditCustomer } from "src/common/models/CreditCustomer";
import { DatabaseRepository, InjectModel } from "src/core"
import { CreditCustomerContract } from "../contracts/CreditCustomer";



export class CreditCustomerRepository extends DatabaseRepository implements CreditCustomerContract
{
  //function1
  @InjectModel(CreditCustomer)
    model: CreditCustomer;

  //function2
  //function3
  //function...
}