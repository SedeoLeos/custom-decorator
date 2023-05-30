import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { ExistConstraintTypeOrm } from './customValidator/exist.validator';
import { UniqueConstraintTypeOrm } from './customValidator/unique.decorator';
import { LoggerMiddleware } from './milddewares/logger.milddeware';
import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n';
import * as path from 'path';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'fr',
      loaderOptions: { path: path.join(__dirname, '/i18n/'), watch: true },
      typesOutputPath: path.join(
        __dirname,
        '../src/generated/i18n.generated.ts',
      ),
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'test',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, UniqueConstraintTypeOrm, ExistConstraintTypeOrm],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('user');
  }
}
