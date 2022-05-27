# Projeto Ebytr ToDo

![Status do projeto: em progresso](https://img.shields.io/badge/status%20do%20projeto-em%20progresso-yellow)

Aplicação estilo lista de tarefas em desenvolvimento para o Desafio da Blitz de Carreira da Trybe.

Com esse app é possível:
- Listar e ordenar tarefas pela descrição, data de criação e status
- Criar, editar e remover tarefas
- Alterar status de uma tarefa

## Demonstração

![Adicionando duas tarefas do Ebytr ToDo](docs/ebytr-demo.gif)

> Acesse o [deploy da aplicação aqui](https://ebytr-jonathan-f-silva.cloud.okteto.net)

## Rodando localmente

É necessário ter [Git](https://git-scm.com), [Node 16](https://nodejs.org/pt-br/) e [Yarn](https://yarnpkg.com/getting-started/install) instalados na máquina. Para desenvolvimento, é recomendado usar o [VSCode](https://code.visualstudio.com).

- Clone o repositório
```shell
git clone https://github.com/jonathan-f-silva/project-ebytr
```

- Instale as dependências
```shell
yarn
```

- Para iniciar em modo de desenvolvimento
```shell
yarn dev
```

- Para abrir os testes E2E no Cypress
```shell
yarn cy:open
```

Caso tenha o Docker Compose instalado, é possível rodar o sistema usando
```shell
yarn compose:up
```

## Aprendizados e Tecnologias

Nesse projeto aprendi muitas coisas e coloquei em prática muitas ferramentas e
conceitos bacanas que queria utilizar, aqui uma lista:

### API e DB
- Mongo, Node e Express
- Utilização das arquiteturas MSC e REST na API
- Utilização de conceitos de SOLID e Clean Code para a criação de classes na API

### UI
- Vite React com Context API
- Chakra UI para estilização dos componentes da UI

### Testes e Qualidade de código
- Husky para checagem de código pré-push
- Typescript para tipagem estática
- Eslint para consistência do código
- Testes unitários e de integração com Mocha, RTL, Chai e Sinon
- Mock de API para os testes de UI com MSW
- Code coverage com NYC
- Stryker para testes de mutação
- Testes com casos de uso usando escrita natural com Gherkin, Cucumber e Cypress
- [Plano de testes](docs/TESTING.md)

### DevOps
- Proxy reverso com NGINX
- Docker para conteinerização da aplicação
- CI com GitHub Actions para testagem de código ao criar Pull Requests e fazer push
- Deploy do Docker Compose usando a plataforma Okteto
- [Roadmap](docs/ROADMAP.md)
