import { Injectable } from '@nestjs/common';
import { User } from './user';
import { CreateUserDto } from './users.controller';

@Injectable()
export class UsersService {
  create(createUser: CreateUserDto): Promise<User> {
    return Promise.resolve(new User('u1', 'John', 'M', 'Doe'));
  }
}
