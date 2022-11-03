

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service'
import { User } from './user.entity'


@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {

  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll()
  }

  @Get(':id')
  get(@Param() params) {
    return this.userService.findOne(params.id);
  }

  @Post()
  create(@Body() task: User) {
    return this.userService.create(task);
  }

  @Put()
  update(@Body() task: User) {
    return this.userService.update(task);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.userService.delete(params.id);
  }
} 