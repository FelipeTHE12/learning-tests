import { Module } from '@nestjs/common';
import { ProductController } from './infra/http/product.controller';
import { FindProduct } from './application/find-product.us';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [FindProduct],
})
export class AppModule {}
