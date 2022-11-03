import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  // exports: [TypeOrmModule],
  providers: [UsersService, UsersResolver],
  // controllers: [UsersResolver],
})
export class UsersModule {}