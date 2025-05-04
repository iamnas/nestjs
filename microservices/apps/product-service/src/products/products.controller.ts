import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
  @MessagePattern('get_product')
  getProduct(id: number) {
    console.log('product', id);
    return { message: 'product', id, name: 'Mac book ' };
  }

  @EventPattern('order.created')
  updateStock(order: {
    id: number;
    productId: number;
    quantity: number;
  }) {
    console.log('order', order);
    // return { message: 'product', id: order.id, name: 'Mac book ', stock: 10 - order.quantity };
  }
}
