import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';
import { IsUniqueTypeOrm } from './customValidator/unique.decorator';


class Dto{
  id:number;
  
  @IsUniqueTypeOrm('user','email','idUser')
  email:string;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private data:DataSource) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


}
