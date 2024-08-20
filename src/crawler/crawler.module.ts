import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrawlerController } from './crawler.controller';
import { CrawlerService } from './crawler.service';

@Module({
  imports: [TypeOrmModule.forFeature([])], // Insira as entidades que serão usadas pelo módulo Crawler aqui
  controllers: [CrawlerController],
  providers: [CrawlerService],
})
export class CrawlerModule {}
