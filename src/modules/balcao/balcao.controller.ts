import { BadRequestException, Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Balcao } from './entities/balcao.entity';
import { BalcaoService } from './balcao.service';
import { ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { CriarBalcaoDto } from './dtos/criar-balcao.dto';

@Controller('balcao')
export class BalcaoController {
  constructor(private readonly balcaoService: BalcaoService) {}

  @Get()
  async listarTodos(): Promise<Balcao[]> {
    return this.balcaoService.listarTudo();
  }

  @Get(':id')
  async getBalcao(@Param('id', ParseIntPipe) id: number): Promise<Balcao> {
    return this.balcaoService.getBalcao(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: 'Balcão criado com sucesso.',
  })
  @ApiBadRequestResponse({
    description: 'Os dados fornecidos são inválidos.',
  })
  async criarBalcao(@Body() criarBalcaoDto: CriarBalcaoDto): Promise<Balcao> {
    try {
      // Chama o serviço para criar o balcão
      return await this.balcaoService.criarBalcao(criarBalcaoDto);
    } catch (error) {
      // Trata erros específicos para fornecer feedback ao cliente
      if (error.name === 'QueryFailedError') {
        throw new BadRequestException('Erro ao processar os dados fornecidos. Verifique os campos e tente novamente.');
      }
      throw error;
    }
  }
}
