#
# 🧑‍💻 Development
#
FROM node:20-bookworm


RUN apt-get update && apt-get install -y \
    bash \
    tzdata \
    && rm -rf /var/lib/apt/lists/*

# Set to dev environment
# ENV NODE_ENV development

# Configurar o fuso horário
ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN npm i -g @nestjs/cli@10.2.1
RUN npx -y playwright@1.46.0 install --with-deps



# Definir usuário 'node'
# USER node

WORKDIR /home/node/app

COPY . .