import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
@Entity()
export class Balcao {
  @PrimaryGeneratedColumn({
    comment: 'Identificador único do balcão (chave primária)',
  })
  @ApiProperty({ description: 'Identificador único do balcão (chave primária)', example: 1 })
  id: number;

  @Column({
    type: 'varchar',
    length: 100,
    comment: 'Nome do balcão, até 100 caracteres',
  })
  @ApiProperty({ description: 'Nome do balcão, até 100 caracteres', example: 'Hotmilhas' })
  nome: string;

  @Column({
    type: 'varchar',
    length: 255,
    comment: 'URL do site do balcão, até 255 caracteres',
  })
  @ApiProperty({ description: 'URL do site do balcão, até 255 caracteres', example: 'https://cotacaomilha.com.br' })
  url_site: string;

  @Column({
    type: 'varchar',
    length: 255,
    comment: 'URL do login do balcão, até 255 caracteres',
  })
  @ApiProperty({ description: 'URL do login do balcão, até 255 caracteres', example: 'https://cotacaomilha.com.br/login' })
  url_login: string;

  @Column({
    type: 'varchar',
    length: 255,
    comment: 'URL da cotacao do balcão, até 255 caracteres',
  })
  @ApiProperty({ description: 'URL da cotacao do balcão, até 255 caracteres', example: 'https://cotacaomilha.com.br/cotacao' })
  url_cotacao: string;
}
