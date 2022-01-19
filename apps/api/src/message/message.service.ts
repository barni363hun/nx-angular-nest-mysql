import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageInterface } from '@nx-angular-nest-mysql/my-ts-lib';
import { Repository } from 'typeorm';
import { MessageEntity } from './message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(MessageEntity) private readonly messageRepository: Repository<MessageEntity>
  ) {
  
  }

  async all():Promise<MessageEntity[]> {
    return this.messageRepository.find();
  }

  
  async create(data):Promise<MessageEntity> {
    return this.messageRepository.save(data);
  }
}
