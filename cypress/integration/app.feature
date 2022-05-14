# language: pt

Funcionalidade: Lista de tarefas Ebytr ToDo

  Eu quero ver um título e uma lista de tarefas quando abrir o app, juntamente
  com o campo de digitar tarefas e um botão que adicione a tarefa na lista.
  Eu quero poder adicionar uma tarefa na lista e ver suas informações.

  Cenário: Entrando na aplicação pela primeira vez
    Dado que eu entro no app
    Então eu vejo o título "Ebytr ToDo" na aba do navegador
    E eu vejo uma lista de tarefas vazia
    E eu vejo um campo de texto para digitar uma tarefa
    E eu vejo um botão para adicionar tarefas

  Cenário: Adicionando uma tarefa
    Dado que eu entro no app
    E eu vejo uma lista de tarefas vazia
    Quando eu digito uma tarefa com o texto "Estudar testes unitários"
    E eu clico no botão "Adicionar tarefa"
    Então eu vejo uma tarefa com o texto "Estudar testes unitários" na lista
    E o campo de texto está vazio
