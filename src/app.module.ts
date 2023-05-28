import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { ExistConstraintTypeOrm } from './customValidator/exist.validator';
import { UniqueConstraintTypeOrm } from './customValidator/unique.decorator';
@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'test',
    entities: [],
    autoLoadEntities:true,
    synchronize: true,
  }), UserModule,],
  controllers: [AppController],
  providers: [AppService,UniqueConstraintTypeOrm,ExistConstraintTypeOrm],

})
export class AppModule {

}
