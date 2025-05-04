import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MICROSERVICES_CLIENTS } from 'src/constants';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject(MICROSERVICES_CLIENTS.ORDERS_SERVICE.name)
    private ordersServiceClient: ClientProxy,
  ) {}
  @Post('create')
  createOrder(@Body() order: { id: number; productId: number; quantity: number }) {
    // console.log('Order Created', order);
    return this.ordersServiceClient.send('create_order', order);
  }
}
