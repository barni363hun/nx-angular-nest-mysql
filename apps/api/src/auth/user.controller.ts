import { Controller, Get, Param } from '@nestjs/common';
import { UserInterface } from '@nx-angular-nest-mysql/my-ts-lib';
import { UserService } from './user.service';
  
  @Controller("users")
  export class UserController{
    
    constructor(private userService: UserService) { }
      
    @Get(":id")
    public async getUserById(@Param() id: number): Promise<UserInterface> {        
        return await this.userService.getById(id)
    }
  
    @Get()
    // @Security("token", ["admin"])
    public async getAllUsers(): Promise<UserInterface[]> {
        return await this.userService.getAll();
    }
  }