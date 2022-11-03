import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UpdateResult, DeleteResult } from  'typeorm';
import { User } from './user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find()
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOneBy({ id })
  }

  async create(user: User): Promise<User> {
    return await this.usersRepository.save(user)
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id)
  }
  async update(user: User): Promise<UpdateResult> {
    return await this.usersRepository.update(user.id, user);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }
}
