import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
  @MessagePattern('create_order')
  createOrder(order: { id: string; items: string[]; total: number }) {
    console.log('Order Created', order);
    return { message: 'Order Created', order };
  }
}
