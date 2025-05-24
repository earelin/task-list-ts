import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '././users.service';
import { Promise } from 'mongoose';
import { instanceToInstance, plainToInstance } from 'class-transformer';

export class CreateUserDto {
  name: string;
  email: string;
  password: string;
}

class UserDto {
  id: string;
  name: string;
  email: string;
}

@Controller('users')
export class UsersController {
  readonly #service: UsersService;

  constructor(service: UsersService) {
    this.#service = service;
  }

  @Post()
  async create(@Body() createUser: CreateUserDto): Promise<UserDto> {
    const createdUser = await this.#service.create(createUser);
    return plainToInstance(UserDto, createdUser);
  }
}
