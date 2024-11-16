import { IsNotEmpty, IsString, IsUrl, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CriarBalcaoDto {
  /**
   * Nome do balcão, deve ser uma string não vazia com no máximo 100 caracteres.
   */
  @ApiProperty({
    description: 'Nome do balcão, até 100 caracteres',
    example: 'Hotmilhas',
  })
  @IsNotEmpty({ message: 'O nome do balcão é obrigatório.' })
  @IsString({ message: 'O nome do balcão deve ser uma string.' })
  @MaxLength(100, { message: 'O nome do balcão pode ter no máximo 100 caracteres.' })
  nome: string;

  /**
   * URL do site do balcão, deve ser uma string válida com no máximo 255 caracteres.
   */
  @ApiProperty({
    description: 'URL do site do balcão, até 255 caracteres',
    example: 'https://cotacaomilha.com.br',
  })
  @IsNotEmpty({ message: 'O url site do balcão é obrigatório.' })
  @IsString({ message: 'O url site do balcão deve ser uma string.' })
  @IsUrl({}, { message: 'O url site deve ser uma URL válida.' })
  @MaxLength(255, { message: 'O url site do balcão pode ter no máximo 255 caracteres.' })
  url_site: string;

  @ApiProperty({
    description: 'URL do site do balcão, até 255 caracteres',
    example: 'https://cotacaomilha.com.br/cotacao',
  })
  @IsNotEmpty({ message: 'O url cotacao do balcão é obrigatório.' })
  @IsString({ message: 'O url cotacao do balcão deve ser uma string.' })
  @IsUrl({}, { message: 'O url cotacao deve ser uma URL válida.' })
  @MaxLength(255, { message: 'O url cotacao do balcão pode ter no máximo 255 caracteres.' })
  url_cotacao: string;

  @ApiProperty({
    description: 'URL do login do balcão, até 255 caracteres',
    example: 'https://cotacaomilha.com.br/login',
  })
  @IsNotEmpty({ message: 'O url login do balcão é obrigatório.' })
  @IsString({ message: 'O url login do balcão deve ser uma string.' })
  @IsUrl({}, { message: 'O url login deve ser uma URL válida.' })
  @MaxLength(255, { message: 'O url login do balcão pode ter no máximo 255 caracteres.' })
  url_login: string;
}
