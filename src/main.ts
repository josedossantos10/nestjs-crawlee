import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  app.disable('x-powered-by');
  app.disable('X-Powered-By');
  await app.listen(3004);

  console.log(`

  🚀 Aplicação iniciada!

  🌐 Aplicação disponível em: ${configService.get('SERVER_URL')}
  `);
}
bootstrap().catch((error) => {
  console.error('❌ Ocorreu um erro ao iniciar a aplicação:', error);
});
