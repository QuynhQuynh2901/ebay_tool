

//  import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service'
import { User } from './user.entity'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';

@Resolver(of => User)
// @Controller('users')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {

  }
  @Query(() => [User])
  findAll(): Promise<User[]> {
    return this.usersService.findAll()
  }

  // @Get(':id')
  // get(@Param() params) {
  //   return this.userService.findOne(params.id);
  // }

  @Mutation(returns=>User)
  create(@Args('createUserInput') createUserInput: CreateUserInput): Promise<User> {
    return this.usersService.create(createUserInput);
  }

  // @Put()
  // update(@Body() task: User) {
  //   return this.userService.update(task);
  // }

  // @Delete(':id')
  // deleteUser(@Param() params) {
  //   return this.userService.delete(params.id);
  // }
} 