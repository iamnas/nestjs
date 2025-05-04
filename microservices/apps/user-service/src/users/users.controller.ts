import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  @MessagePattern('get_user')
  getUser(id: string) {
    console.log('user', id);
    return { message: 'user', id };
  }
}
