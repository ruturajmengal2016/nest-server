import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Products } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProductDto: Products) {
    await this.prisma.products.create({
      data: createProductDto,
    });
    return 'The new product added';
  }

  async findAll(id: string) {
    const products = await this.prisma.products.findMany({
      where: {
        userId: id,
      },
    });
    return products;
  }

  async update(id: string, updateProductDto: Products) {
    await this.prisma.products.update({
      where: {
        id: id,
      },
      data: updateProductDto,
    });
    return 'The product update successfully...';
  }

  async remove(id: string) {
    await this.prisma.products.delete({
      where: {
        id: id,
      },
    });
    return 'The product delete successfully...';
  }
}
