import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
  @MessagePattern('get_product')
  getProduct(id: number) {
    console.log('product', id);
    return { message: 'product', id };
  }
}
