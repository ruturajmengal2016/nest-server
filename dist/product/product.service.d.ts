import { PrismaService } from 'src/prisma/prisma.service';
import { Products } from '@prisma/client';
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: Products): Promise<string>;
    findAll(id: string): Promise<Products[]>;
    update(id: string, updateProductDto: Products): Promise<string>;
    remove(id: string): Promise<string>;
}
