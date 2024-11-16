import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  app.disable('x-powered-by');
  app.disable('X-Powered-By');

  const config = new DocumentBuilder()
    .setTitle('AlertaAi API')
    .setDescription('API para cadastro, consulta e envio de alertas automáticos sobre cotações de milhas aéreas')
    .setVersion('1.0')
    .addServer(configService.get('SERVER_URL'), 'Servidor principal')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, documentFactory);

  await app.listen(3004);

  console.log(`

        +========================================================+
        |                                                        |
        |     ░░░░░█▀█░█░░░█▀▀░█▀▄░▀█▀░█▀█░░░█▀█░▀█▀░░░░░░░░     |
        |     ░░░░░█▀█░█░░░█▀▀░█▀▄░░█░░█▀█░░░█▀█░░█░░░░░░░░░     |
        |     ░░░░░▀░▀░▀▀▀░▀▀▀░▀░▀░░▀░░▀░▀░░░▀░▀░▀▀▀░░░░░░░░     |
        |     ░░░░░░░░░█▄█░▀█▀░█░░░█░█░█▀█░█▀▀░░░░░░░░░░░░░░     |
        |     ░░░░░░░░░█░█░░█░░█░░░█▀█░█▀█░▀▀█░░░░░░░░░░░░░░     |
        |     ░░░░░░░░░▀░▀░▀▀▀░▀▀▀░▀░▀░▀░▀░▀▀▀░░░░░░░░░░░░░░     |
        |                                                        |
        +========================================================+

  🚀 Aplicação iniciada!

  📚 Acesse a documentação Swagger em: ${configService.get('SERVER_URL')}/swagger

  🌐 Aplicação disponível em: ${configService.get('SERVER_URL')}
  `);
}
bootstrap().catch((error) => {
  console.error('❌ Ocorreu um erro ao iniciar a aplicação:', error);
});
