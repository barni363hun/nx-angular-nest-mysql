
import { MessageInterface } from '@nx-angular-nest-mysql/my-ts-lib';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class MessageEntity implements MessageInterface {
  //Columns
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100
})
  author: string;

  @Column("text")
  message: string;
}