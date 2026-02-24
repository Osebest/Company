import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { UserCreateInput, UserUpdateInput } from 'generated/prisma/models';
import { Role } from 'generated/prisma/enums';

@Injectable()
export class UsersService {
  constructor(private readonly db: DatabaseService) {}

  async create(createUserDto: UserCreateInput) {
    return this.db.user.create({ data: createUserDto });
  }

  async findAll(role?: Role) {
    if (role) {
      return this.db.user.findMany({ where: { role } });
    }
    return this.db.user.findMany();
  }

  async findOne(id: string) {
    const user = await this.db.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async update(id: string, updateUserDto: UserUpdateInput) {
    try {
      return await this.db.user.update({
        where: { id },
        data: updateUserDto,
      });
    } catch (e) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }

  async remove(id: string) {
    try {
      return await this.db.user.delete({ where: { id } });
    } catch (e) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }
}
