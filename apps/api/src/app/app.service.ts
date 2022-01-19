import { Injectable } from '@nestjs/common';
import { MessageInterface } from '@nx-angular-nest-mysql/my-ts-lib';

@Injectable()
export class AppService {
  getData(): MessageInterface {
    return {author:"Mr. Developer", message: 'Welcome to api!' };
  }
}
