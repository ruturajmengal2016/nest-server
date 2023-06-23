import { ProductService } from './product.service';
import { Products } from '@prisma/client';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: Products): Promise<string>;
    findAll(id: string): Promise<Products[]>;
    update(id: string, updateProductDto: Products): Promise<string>;
    remove(id: string): Promise<string>;
}
