import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('eu vejo o título {string} na aba do navegador', (title) => {
  cy.title().should('include', title);
});

Then('eu vejo uma lista de tarefas vazia', () => {
  cy.contains('Sem tarefas. Adicione uma!');
});

Then('eu vejo um campo de texto para digitar uma tarefa', () => {
  cy.get('input[placeholder="Digite uma tarefa"]');
  // cy.contains('input');
});

Then('eu vejo um botão para adicionar tarefas', () => {
  cy.contains('Adicionar tarefa');
});
