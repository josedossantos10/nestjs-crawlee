
## Descrição

[nestjs-crawlle](https://github.com/josedossantos10/nestjs-crawlee) - É um sistema autônomo para verificação e validação de disponibilidade e integridade de informações em todas as páginas e arquivos dentro de um domínio principal. Esta feramenta foi desenvolvido com a linguagem TypeScript e os frameworks: [NestJS](https://github.com/nestjs/nest) para diponibilizar as APIs do projeto, [Crawlee](https://github.com/apify/crawlee) para realizar as operações de coleta e verificação das informações de um site e [TypeORM](https://github.com/typeorm) para armazenamento das informações em um banco de dados relacional PortgreSQL.

## Instalação

```bash
$ git clone https://github.com/josedossantos10/nestjs-crawlee.git
$ cd nestjs-crawlee
```
Atualize as variáveis de ambiente no arquivo *.env* para os de suua preferência.
## Construindo e levantando a ferramenta

```bash

# Modo de desenvolvimento, altere /.docker/entrypoint.sh para outros modos
$ docker compose up
```

## Modos e comandos para levantando a ferramenta

```bash
# Modo de desenvolvimento
$ npm run start

# Modo de observação
$ npm run start:dev

# Modo de produção
$ npm run start:prod
```

## Testes

```bash
# Testes unitários
$ npm run test

## Cobertura de testes
$ npm run test:cov
```
<div align="center" style="display: flex; justify-content: center; gap: 20px;">
  <div>
    <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="125" alt="Nest Logo" /></a>
    <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
  </div>
  <div href="https://crawlee.dev">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/apify/crawlee/master/website/static/img/crawlee-dark.svg?sanitize=true">
      <img alt="Crawlee" src="https://raw.githubusercontent.com/apify/crawlee/master/website/static/img/crawlee-light.svg?sanitize=true" width="400">
    </picture>
    <p>A web scraping and browser automation library</p>
  </div>
</div>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest