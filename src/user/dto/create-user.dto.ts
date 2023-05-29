import {
  Contains,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsObject,
  Max,
  Min,
} from 'class-validator';
import { IsUniqueTypeOrm } from 'src/customValidator/unique.decorator';
import { i18nValidationMessage } from 'nestjs-i18n';
import { User } from '../entities/user.entity';
import { I18nTranslations } from 'src/generated/i18n.generated';


export class CreateUserDto {
  @IsEmail(
    {},
    { message: i18nValidationMessage<I18nTranslations>('validation.IsEmail') },
  )
  @IsUniqueTypeOrm('user', 'email', 'idUser', {
    message: i18nValidationMessage<I18nTranslations>('validation.IsUnique'),
  })
  email: string;

  @IsUniqueTypeOrm('user', 'phone', 'idUser', {
    message: i18nValidationMessage<I18nTranslations>('validation.IsUnique'),
  })
  phone: string;

  @IsNotEmpty({
    message: i18nValidationMessage<I18nTranslations>('validation.IsNotEmpty'),
  })
  nom: string;

  @IsNotEmpty({
    message: i18nValidationMessage<I18nTranslations>('validation.IsNotEmpty'),
  })
  prenom: string;
}
