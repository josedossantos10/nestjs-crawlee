import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, IsDate, IsEmail, IsInt, IsNumber, IsOptional, IsPhoneNumber, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome completo do usuário',
    example: 'João da Silva',
  })
  @IsAlphanumeric(undefined, { message: 'Caractere Invalido' })
  @MaxLength(150, { message: 'Tamanho máximo de 150 caracteres' })
  name: string; // Nome completo do usuário, obrigatório

  @ApiProperty({
    description: 'Email do usuário, único no sistema',
    example: 'usuario@email.com',
  })
  @IsEmail(undefined, { message: 'Formato de email Inválido' })
  @MaxLength(150, { message: 'Email acima de 150 caracteres' })
  email: string; // Email único, obrigatório

  @ApiProperty({
    description: 'Telefone do usuário com formato internacional ou nacional',
    example: '5511987654321',
    required: false,
  })
  @IsOptional()
  @IsNumber(undefined, { message: 'Só pode Conter Números' })
  @IsPhoneNumber(undefined) // Valida o formato do telefone
  telephone?: string; // Telefone do usuário, opcional

  @ApiProperty({
    description: 'Identificador do token relacionado ao usuário',
    example: 12345,
    required: false,
  })
  @IsOptional()
  @IsInt()
  id_token?: number; // Identificador do token, opcional

  @ApiProperty({
    description: 'Tipo ou plano de assinatura associado ao usuário',
    example: 1,
    required: false,
  })
  @IsOptional()
  @IsInt()
  subscription?: number;

  @ApiProperty({
    description: 'Data de Assinatura',
    example: '2024-11-15 14:30:00',
    required: false,
  })
  @IsOptional()
  @IsDate()
  subscriptionDate?: Date;
}
