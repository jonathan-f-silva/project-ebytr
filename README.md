# Projeto Ebytr ToDo

![Status do projeto: em progresso](https://img.shields.io/badge/status%20do%20projeto-em%20progresso-yellow)

Aplicação estilo lista de tarefas em desenvolvimento para o Desafio da Blitz de Carreira da Trybe.

Com esse app é possível:
- Listar e ordenar tarefas pela descrição, data de criação e status
- Criar, editar e remover tarefas
- Alterar status de uma tarefa

<!-- ## Demonstração -->
<!-- gif da aplicação -->
<!-- link do deploy -->

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

## Tecnologias utilizadas
- Mongo
- Node
- React
- Express

## [Plano de testes](docs/TESTING.md)

## Roadmap

### Frontend (api)
- [x] Listar tarefas
- [x] Adicionar tarefas
- [ ] Editar tarefas
- [ ] Remover tarefas
- [x] Estilização inicial

### Backend (api)
- [ ] GET `/todos`
- [ ] POST `/todos`
- [ ] PUT `/todos`
- [ ] DELETE `/todos`
