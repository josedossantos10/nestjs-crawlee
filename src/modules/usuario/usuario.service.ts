import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/criar-usuario.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Usuario)
    private readonly userRepository: Repository<Usuario>,
  ) {}

  async getUser(id: number): Promise<Usuario> {
    const user = await this.userRepository.findOneBy({ id: id });
    if (!user) {
      throw new NotFoundException('Usuário não Encontrado');
    }
    return user;
  }

  async criarUsuario(createUserDto: CreateUserDto): Promise<Usuario> {
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
