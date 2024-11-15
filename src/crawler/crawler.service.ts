import { ProcessedRequest, UnprocessedRequest } from '@crawlee/types';
import { Injectable } from '@nestjs/common';
import { gotScraping, PlaywrightCrawler, Sitemap } from 'crawlee';
import { Link } from 'src/utils/intefaces/link.interface';

@Injectable()
export class CrawlerService {
  ALLOW_EXTENSIONS = ['pdf', 'csv', 'ods', 'xls'];
  async removerDuplicados(data: Link[]): Promise<Link[]> {
    const uniqueLinks: Link[] = [];
    data.forEach((link: Link) => {
      if (link?.url?.length > 0) {
        const newObj = {} as Link;
        const ext = link.url.split('.').pop();
        newObj.url = link.url;
        newObj['ext'] = ext.length < 5 && this.ALLOW_EXTENSIONS.includes(ext) ? ext : '';

        if (uniqueLinks.findIndex((x) => x.url === newObj.url) === -1) {
          uniqueLinks.push(newObj);
        }
      }
    });
    return uniqueLinks;
  }
  async rastrearLinks(url: string[], maxProfundidade: number = 10): Promise<Link[]> {
    const linksP: ProcessedRequest[][] = [];
    const linksU: UnprocessedRequest[][] = [];
    let result: Link[] = [];

    const crawler = new PlaywrightCrawler({
      async requestHandler({ enqueueLinks }) {
        const res = await enqueueLinks({
          skipNavigation: false,
          strategy: 'all',
        });
        linksP.push(res.processedRequests);
        linksU.push(res.unprocessedRequests);
      },
      maxRequestRetries: 1,
      maxRequestsPerCrawl: maxProfundidade,
    });

    await crawler.run(url);

    const combinedLinks = [...linksU, ...linksP];
    combinedLinks.forEach((links: (ProcessedRequest | UnprocessedRequest)[]) => {
      links.forEach((link) => {
        result.push({ url: link.uniqueKey, ext: '', status: '' });
      });
    });
    const totalLinks = result.length;
    result = await this.removerDuplicados(result);
    console.log(`Númuero de links encontados: ${totalLinks}. Links únicos: ${result.length}`);

    return result;
  }

  async obterLinksSitemap(url: string): Promise<Link[]> {
    const urls = (await Sitemap.load(url)).urls;
    const links: Link[] = urls.map((url) => ({ url, ext: '', status: '' }));

    return links;
  }

  async rastrearLinksSitemap(url: string): Promise<Link[]> {
    const crawler = new PlaywrightCrawler({
      async requestHandler({ request, log }) {
        log.info(request.url);
      },
      maxRequestsPerCrawl: 10, // Limitar a quantidade de requisições para 10 (0 para ilimitado)
    });

    const { urls } = await Sitemap.load(url);
    await crawler.addRequests(urls);

    await crawler.run();

    return urls.map((url) => ({ url, ext: '', status: '' }));
  }

  async testarLinks(data: Link[]): Promise<Link[]> {
    // const result: Link[] = [];
    const result: Link[] = [];
    for (const link of data) {
      try {
        const res: any = await gotScraping({ url: link.url });
        link['status'] = res.statusCode;
        result.push(link);
        // console.log('Success: ', link);
      } catch (error) {
        // console.error('Error: ', error);
      }
    }
    return result;
  }
}
