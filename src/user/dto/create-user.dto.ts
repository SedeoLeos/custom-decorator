import { IsNotEmpty } from "class-validator";
import { IsUniqueTypeOrm } from "src/customValidator/unique.decorator";

export class CreateUserDto {

    @IsUniqueTypeOrm('user','email')
    email:string;

    @IsUniqueTypeOrm('user','phone')
    phone:string;
    
    @IsNotEmpty()
    nom:string;

    @IsNotEmpty()
    prenom:string;
}
