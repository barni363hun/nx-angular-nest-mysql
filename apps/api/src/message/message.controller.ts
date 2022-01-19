import { Body, Controller, Get, Post } from '@nestjs/common';
import { MessageInterface } from '@nx-angular-nest-mysql/my-ts-lib';
import { MessageService } from './message.service';

@Controller('messages')
export class MessageController {

  constructor(private messageService: MessageService){}

  @Get()
  all() {
    return this.messageService.all();
  }

  @Post()
  create(@Body() body:MessageInterface) {
    this.messageService.create(body)
  }
}
