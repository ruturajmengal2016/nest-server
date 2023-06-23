import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    show(email: string): Promise<any>;
    create(body: User): Promise<User>;
    update(id: string, body: User): Promise<string>;
    delete(id: string): Promise<string>;
}
