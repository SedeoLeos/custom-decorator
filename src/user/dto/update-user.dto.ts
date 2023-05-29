// import { PartialType } from '@nestjs/mapped-types';
import { IsUniqueTypeOrm } from 'src/customValidator/unique.decorator';
import { IsNotEmpty } from 'class-validator';
import { IsExistTypeOrm } from 'src/customValidator/exist.validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { I18nContext, i18nValidationMessage } from 'nestjs-i18n';
import {I18nTranslations} from '../../generated/i18n.generated'
export class UpdateUserDto  extends PartialType(CreateUserDto){
    @IsNotEmpty()
    @IsExistTypeOrm('user','idUser',{
        message: i18nValidationMessage<I18nTranslations>('validation.IsExist', { message: 'COOL' }),
      })
    idUser:string;

    @IsUniqueTypeOrm('user','email','idUser')
    email:string;

    @IsUniqueTypeOrm('user','phone','idUser')
    phone:string;
}
