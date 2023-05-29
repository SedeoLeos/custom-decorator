import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private dataSource: DataSource) { }
  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.dataSource.getRepository(User).save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return await this.dataSource.getRepository(User).find();
  }

  async findOne(id: string) {
    return await this.dataSource.getRepository(User).findOne({ where: { idUser: id } });

  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (id == updateUserDto.idUser) {
      const user = this.dataSource.getRepository(User).create(updateUserDto)
      return await this.dataSource.getRepository(User).save({  ...user,idUser:id});
    }

  }

  async remove(id: string) {
    return await this.dataSource.getRepository(User).delete(id);

  }
}
