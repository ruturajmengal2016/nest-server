import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { error } from 'console';
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async show(email: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      if (!user) {
        throw new NotFoundException('User does not exist');
      }
      return user;
    } catch (error) {
      return error.message;
    }
  }

  async create(body: User): Promise<User> {
    try {
      const user = await this.prisma.user.create({
        data: body,
      });

      return user;
    } catch (error) {
      return error.message;
    }
  }

  async update(id: string, body: User) {
    await this.prisma.user.update({
      where: {
        id: id,
      },
      data: body,
    });

    return 'update data successfully...';
  }

  async delete(id: string) {
    await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
    return 'Delete successfully';
  }
}
