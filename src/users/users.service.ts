import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    private readonly users: User[] = [];

    create(createUserDto: CreateUserDto): User {
        const newUser: User = {
        id: this.users.length + 1,
        ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
    }

    findAll(): User[] {
    return this.users;
    }
}