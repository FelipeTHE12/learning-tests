import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { FindProduct } from 'src/application/find-product.us';

@Controller()
export class ProductController {
  constructor(private readonly findProduct: FindProduct) {}

  @Get()
  async test(@Res() res: Response) {
    const a = await this.findProduct.exec();

    if (a) {
      res.status(404).send();
    }
  }
}
