import { Module } from '@nestjs/common';
import { UserController } from './usuario.controller';
import { UserService } from './usuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
