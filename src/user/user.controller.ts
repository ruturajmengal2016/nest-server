import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {} // Dependency injection
  @Get(':email')
  async getUser(@Param('email') email: string): Promise<User> {
    return this.userService.show(email);
  }

  @Post('register')
  setUser(@Body() body: User) {
    return this.userService.create(body);
  }

  @Patch('update/:id')
  updateUser(@Param('id') id: string, @Body() body: User) {
    return this.userService.update(id, body);
  }

  @Delete('delete/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
