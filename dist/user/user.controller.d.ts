import { UserService } from './user.service';
import { User } from '@prisma/client';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUser(email: string): Promise<User>;
    setUser(body: User): Promise<User>;
    updateUser(id: string, body: User): Promise<string>;
    deleteUser(id: string): Promise<string>;
}
