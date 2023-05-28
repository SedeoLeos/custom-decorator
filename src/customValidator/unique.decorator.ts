import {DataSource } from 'typeorm'
import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
} from 'class-validator';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'Unique', async: true })
@Injectable()
export class UniqueConstraintTypeOrm implements ValidatorConstraintInterface {
    constructor(private dataSource: DataSource) {}

    async validate(value: any, args: ValidationArguments): Promise<boolean> {
        const [model, property = 'id', exceptField = null] = args.constraints;
        if (!value || !model) return false;
        const repository = this.dataSource.getRepository(model)
        try{

            const record = await repository.findOne({
                where: {
                    [property]: value,
                },
            });
            

    
            if (record === null) return true;
    
            if (!exceptField) return false;
    
            const exceptFieldValue = (args.object as any)[exceptField];
            if (!exceptFieldValue) return false;
    
            return record[exceptField] === exceptFieldValue;
        } catch(e){
            console.error(e)
            return false;
        }
    }

    defaultMessage(args: ValidationArguments) {
        const [model, property = 'id', exceptField = null]=args.constraints
        return ` this ${args.property} exist in table ${model}`;
    }
}

export function IsUniqueTypeOrm(
    model: string,
    uniqueField: string,
    exceptField: string = null,
    validationOptions?: ValidationOptions,
) {
    return function (object: any, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [model, uniqueField, exceptField],
            validator: UniqueConstraintTypeOrm,
        });
    };
}