import {Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { I18n, I18nContext } from 'nestjs-i18n';
import { I18nTranslations } from './generated/i18n.generated';
@Controller()
export class AppController {
    @Get()
    async getHello(@I18n() i18n: I18nContext<I18nTranslations>) {
      return  i18n.t('test.HELLO');
    }
}
