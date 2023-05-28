import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useContainer } from 'class-validator';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  useContainer( app.select(AppModule), { fallbackOnErrors: true });
  app.useGlobalPipes((new ValidationPipe( {forbidUnknownValues:true,whitelist:true})))
  await app.listen(9000);
}
bootstrap();
