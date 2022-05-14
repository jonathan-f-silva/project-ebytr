# language: pt

Funcionalidade: Tela inicial do app

  Eu quero ver um título e uma lista de tarefas quando abrir o app, juntamente
  com o campo de digitar tarefas e um botão que adicione a tarefa na lista.

  Cenário: Entrando na aplicação pela primeira vez
    Dado que eu entro no app
    Então eu vejo o título "Ebytr ToDo" na aba do navegador
    E eu vejo uma lista de tarefas vazia
    E eu vejo um campo de texto para digitar uma tarefa
    E eu vejo um botão para adicionar tarefas
