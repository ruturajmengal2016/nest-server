import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Products } from '@prisma/client';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: Products) {
    return this.productService.create(createProductDto);
  }

  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.productService.findAll(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: Products) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
