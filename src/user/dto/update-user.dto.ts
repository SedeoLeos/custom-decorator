// import { PartialType } from '@nestjs/mapped-types';
import { IsUniqueTypeOrm } from 'src/customValidator/unique.decorator';
import { IsNotEmpty } from 'class-validator';
import { IsExistTypeOrm } from 'src/customValidator/exist.validator';

export class UpdateUserDto {
    @IsNotEmpty()
    @IsExistTypeOrm('user','idUser')
    idUser:string;

    @IsUniqueTypeOrm('user','email','idUser')
    email:string;

    @IsUniqueTypeOrm('user','phone','idUser')
    phone:string;
    
    @IsNotEmpty()
    nom:string;

    @IsNotEmpty()
    prenom:string;
}
