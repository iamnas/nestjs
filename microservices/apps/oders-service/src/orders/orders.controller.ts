import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { MICROSERVICES_CLIENTS } from 'src/constants';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject(MICROSERVICES_CLIENTS.PRODUCT_REDIS_SERVICE)
    private productRediceClient: ClientProxy,
  ) {}

  @MessagePattern('create_order')
  createOrder(order: { id: number; productId: number; quantity: number }) {
    console.log('Order Created', order);
    this.productRediceClient.emit('order.created', order);

    return this.productRediceClient.send('get_product', order.productId);
    // return { message: 'Order Created', order };
  }
}
