import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICROSERVICES_CLIENTS } from './constants';
import { OrdersController } from './orders/orders.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MICROSERVICES_CLIENTS.USER_SERVICE.name,
        transport: Transport.TCP,
        options: {
          port: MICROSERVICES_CLIENTS.USER_SERVICE.port,
        },
      },
      {
        name: MICROSERVICES_CLIENTS.ORDERS_SERVICE.name,
        transport: Transport.TCP,
        options: {
          port: MICROSERVICES_CLIENTS.ORDERS_SERVICE.port,
        },
      },
      {
        name: MICROSERVICES_CLIENTS.PRODUCT_SERVICE.name,
        transport: Transport.TCP,
        options: {
          port: MICROSERVICES_CLIENTS.PRODUCT_SERVICE.port,
        },
      },
    ]),
  ],
  controllers: [AppController, OrdersController, UsersController],
  providers: [AppService],
})
export class AppModule {}
