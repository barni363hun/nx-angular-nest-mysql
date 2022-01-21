import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import { RoleInterface } from '@nx-angular-nest-mysql/my-ts-lib';

@Entity({name : 'roles'})
export class RoleEntity implements RoleInterface {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 30,
        unique: true
    })
    name: string;
}