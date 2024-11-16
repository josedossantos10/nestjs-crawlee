import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUser(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id: id });
    if (!user) {
      throw new NotFoundException('Usuário não Encontrado');
    }
    return user;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const existingEmail = await this.userRepository.findOneBy({ email: createUserDto.email });
    if (existingEmail) {
      throw new BadRequestException('Email já está em uso.');
    }
    const newUser = Object.fromEntries(
      Object.entries(createUserDto).filter(([, value]) => value !== null && value !== undefined && value !== ''),
    ); // creating a object without the empty variables
    //const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }
}
