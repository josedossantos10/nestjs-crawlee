import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.disable('x-powered-by');
  app.disable('X-Powered-By');
  await app.listen(3004);

  const serverUrl = 'http://localhost:3004';

  console.log(`

  🚀 Aplicação iniciada!

  📚 Acesse a documentação Swagger em: ${serverUrl}/documentation

  🌐 Aplicação disponível em: ${serverUrl}
  `);
}
bootstrap().catch((error) => {
  console.error('❌ Ocorreu um erro ao iniciar a aplicação:', error);
});
