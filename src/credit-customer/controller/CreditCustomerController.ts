import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'src/core/http';
import { CreditCustomerService } from '../service/CreditCustomerService';

@Controller('credit-customer')
export class CreditCustomerController {
  constructor(private creditCustomerService: CreditCustomerService) {}

  @Get()
  async getcredituser(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const inputs = req.all();
    const user = req.user;

    return this.creditCustomerService.get(inputs, user);
  }
}
