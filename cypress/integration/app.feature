# language: pt

Funcionalidade: Tela inicial do app

  Eu quero ver um título e uma lista de tarefas quando abrir o app

  Cenário: Entrando na aplicação pela primeira vez
    Dado que eu entro no app
    Quando eu clico no botão de login
    Então eu vejo o título "Ebytr ToDo"
    E eu vejo uma lista de tarefas vazia
    E eu vejo um campo para digitar uma tarefa
    E eu vejo um botão para adicionar tarefas
