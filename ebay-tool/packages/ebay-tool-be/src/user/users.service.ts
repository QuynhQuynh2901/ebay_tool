import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UpdateResult, DeleteResult } from  'typeorm';
import { CreateUserInput } from './dto/create-user.input';
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

  async create(createUserInput: CreateUserInput): Promise<User> {
    const newUser =  await this.usersRepository.create(createUserInput)
    return await this.usersRepository.save(newUser)
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
