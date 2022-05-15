import { Then } from 'cypress-cucumber-preprocessor/steps';

import TEST_IDS from './testids';

Then('eu vejo o título {string} na aba do navegador', (title) => {
  cy.title().should('include', title);
});

Then('eu vejo uma lista de tarefas vazia', () => {
  cy.contains('Sem tarefas. Adicione uma!');
});

Then('eu vejo um campo de texto para digitar uma tarefa', () => {
  cy.get(TEST_IDS.todoInput);
});

Then('eu vejo um botão para adicionar tarefas', () => {
  cy.contains('Adicionar tarefa');
});

Then('eu vejo uma tarefa com o texto {string} na lista', (texto) => {
  cy.get(TEST_IDS.todoList)
    .contains(texto);
});

Then('o campo de texto para digitar uma tarefa está vazio', () => {
  cy.get(TEST_IDS.todoInput)
    .should('have.value', '');
});
