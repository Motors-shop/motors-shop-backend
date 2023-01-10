# Motors Shop API

## Sobre a aplicação

Motors Shop API é uma aplicação para criação e administração de veículos e comentários,
onde suas principais rotas contem um CRUD completo. <br/>
A aplicação permite que um usuário logado crie um novo veículo ou comentário, além de permitir que outros possam ver os mesmo de forma livre um suas rotas de listagem.

## Instruções:

1. Baixando dependências

```bash
yarn ou yarn install
```

2. Criando e preenchendo um .env seguindo o exemplo do .env.example

3. Rodando as migrações

```bash
yarn typeorm migration:run -d src/data-source
```

4. Iniciando a aplicação

```
yarn dev
```

Abra [http://localhost:3333/](http://localhost:3333/) para visualizá-lo no navegador.

Para parar a execução precione `Ctrl + c`
