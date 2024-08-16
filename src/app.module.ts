import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrawlerModule } from './crawler/crawler.module';

@Module({
  imports: [CrawlerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
