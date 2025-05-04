import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MICROSERVICES_CLIENTS } from 'src/constants';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(MICROSERVICES_CLIENTS.USER_SERVICE.name)
    private ordersServiceClient: ClientProxy,
  ) {}
  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.ordersServiceClient.send('get_user', id);
  }
}
