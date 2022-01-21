import { AuthModule } from './../auth/auth.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageModule } from '../message/message.module';
import { MessageEntity } from '../message/message.entity';
import { SessionEntity } from '../auth/session.entity';
import { RoleEntity } from '../auth/role.entity';
import { UserEntity } from '../auth/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST || 'localhost',
      port: Number(process.env.DATABASE_PORT || '3306'),
      username: process.env.DATABASE_USER || 'root',
      password: process.env.DATABASE_PASSWORD || '',
      database: process.env.DATABASE_NAME || 'myDatabase',
      entities: [
        MessageEntity,
        UserEntity,
        RoleEntity,
        SessionEntity
      ],
      //autoLoadEntities:true, //only in development mode
      synchronize: true,
    }),
    MessageModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],

})
export class AppModule { }
