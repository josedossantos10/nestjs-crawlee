import { Body, Controller, Post } from '@nestjs/common';
import { Link } from 'src/utils/intefaces/link.interface';
import { CrawlerService } from './crawler.service';

@Controller('crawler')
export class CrawlerController {
  constructor(private readonly crawlerService: CrawlerService) { }

  @Post('sitemap')
  async obterLinksSitemap(@Body() body: { url: string }) {
    return this.crawlerService.obterLinksSitemap(body.url);
  }

  @Post('rastrear')
  async rastrearLinks(
    @Body() body: { urls: string[]; maxProfundidade: number },
  ) {
    return this.crawlerService.rastrearLinks(body.urls, body.maxProfundidade);
  }

  @Post('testar')
  async testarLinks(@Body() body: Link[]) {
    return this.crawlerService.testarLinks(body);
  }
}
