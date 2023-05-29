import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    idUser:string;

    @Column({unique:true,})
    email:string;

    @Column({unique:true})
    phone:string;
    @Column({type:'text'})
    nom:string;

    @Column({type:'text'})
    prenom:string;
}
