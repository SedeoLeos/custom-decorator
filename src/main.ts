import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useContainer } from 'class-validator';
import { ValidationPipe } from '@nestjs/common';
import { I18nValidationExceptionFilter, I18nValidationPipe } from 'nestjs-i18n';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  useContainer( app.select(AppModule), { fallbackOnErrors: true });
  app.useGlobalPipes(( new I18nValidationPipe( {forbidUnknownValues:true,whitelist:true})))
  // app.useGlobalPipes(( new ValidationPipe( {forbidUnknownValues:true,whitelist:true})))
  app.useGlobalFilters(new I18nValidationExceptionFilter({detailedErrors:false,}));
  await app.listen(9000);
}
bootstrap();
