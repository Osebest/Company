import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role, User } from './entities/user.entity';

@Injectable()
export class UsersService {
  allUsers: User[] = [
    {
      id: 1,
      name: 'Adam',
      email: 'adma@GMAIL.COM',
      role: Role.ADMIN,
    },
    {
      id: 2,
      name: 'Sarah',
      email: 'adma@GMAIL.COM',
      role: Role.USER,
    },
    {
      id: 3,
      name: 'Bob',
      email: 'adma@GMAIL.COM',
      role: Role.INTERN,
    },
  ];
  create(createUserDto: CreateUserDto) {
    const newUser = {
      id: this.allUsers.length + 1,
      ...createUserDto,
    };
    this.allUsers.push(newUser);
    return newUser;
  }

  findAll(role?: Role): User[] {
    if (role) {
      return this.allUsers.filter((user) => user.role === role);
    }
    return this.allUsers;
  }

  findOne(id: number) {
    return this.allUsers.find((user) => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const userToUpdate = this.findOne(id);
    if (!userToUpdate) {
      return 'User not found';
    }
    Object.assign(userToUpdate, updateUserDto);
    return userToUpdate;
  }

  remove(id: number) {
    const userToRemove = this.findOne(id);
    if (!userToRemove) {
      return 'User not found';
    }
    this.allUsers = this.allUsers.filter((user) => user.id !== id);
    return userToRemove;
  }
}
