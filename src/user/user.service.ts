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

  async update(id: string, updateUserDto: UpdateUserDto):Promise<User> {
    if (id === updateUserDto.idUser) {
      // delete updateUserDto.idUser;
      console.log(updateUserDto)
      // return updateUserDto
      return await this.dataSource.getRepository(User).save({idUser:id,...updateUserDto});
    }

  }

  async remove(id: string) {
    return await this.dataSource.getRepository(User).delete(id);

  }
}
