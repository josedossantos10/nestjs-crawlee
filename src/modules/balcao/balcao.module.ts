import { Module } from '@nestjs/common';
import { BalcaoController } from './balcao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Balcao } from './entities/balcao.entity';
import { BalcaoService } from './balcao.service';

@Module({
  controllers: [BalcaoController],
  imports: [TypeOrmModule.forFeature([Balcao])],
  providers: [BalcaoService],
})
export class BalcaoModule {}
