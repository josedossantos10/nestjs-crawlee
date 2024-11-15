import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('usuario') // Nome da tabela no banco de dados
export class User {
  @PrimaryGeneratedColumn({
    comment: 'Identificador único da tabela (chave primária)',
    type: 'bigint',
  })
  @ApiProperty({
    description: 'Identificador único do usuário',
    example: 1,
  })
  id: number;

  @Column({
    type: 'int',
    nullable: true,
    comment: 'Identificador do token relacionado ao usuário (chave estrangeira, se aplicável)',
  })
  @ApiProperty({
    description: 'Identificador do token relacionado ao usuário',
    example: 12345,
    nullable: true,
  })
  id_token: number;

  @Column({
    type: 'varchar',
    length: 150,
    comment: 'Nome completo do usuário, até 150 caracteres',
  })
  @ApiProperty({
    description: 'Nome completo do usuário',
    example: 'João da Silva',
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 150,
    unique: true,
    comment: 'Email do usuário, único, até 150 caracteres',
  })
  @ApiProperty({
    description: 'Email do usuário, único no sistema',
    example: 'usuario@email.com',
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 15,
    nullable: true,
    comment: 'Telefone do usuário, até 15 caracteres, formato sugerido internacional',
  })
  @ApiProperty({
    description: 'Telefone do usuário com formato internacional ou nacional',
    example: '5511987654321',
    nullable: true,
  })
  telephone: string;

  @Column({
    type: 'int',
    nullable: true,
    comment: 'Código representando a assinatura, pode ser um enum',
  })
  @ApiProperty({
    description: 'Tipo ou plano de assinatura associado ao usuário',
    example: 1,
    nullable: true,
  })
  subscription: number;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'subscription_date',
    nullable: true,
    comment: 'Data e hora em que a assinatura foi criada ou registrada',
  })
  @ApiProperty({
    description: 'Data e hora em que a assinatura foi criada ou registrada',
    example: '2024-01-01T12:00:00Z',
    nullable: true,
  })
  subscriptionDate: Date;
}
