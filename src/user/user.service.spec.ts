import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UniqueConstraintTypeOrm } from 'src/customValidator/unique.decorator';
import { DataSource } from 'typeorm';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService,UniqueConstraintTypeOrm,DataSource],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
 let  user =new CreateUserDto()
 user= {
	"nom":"Matsoula Malonga",
	"prenom":"seba gedeon",
	"email":"smatsoula12@gmail.com",
	"phone":"066900118",
}
  it('should be defined', () => {
    expect(service.create(user)).toBeInstanceOf(Promise<User>);
  });


});
