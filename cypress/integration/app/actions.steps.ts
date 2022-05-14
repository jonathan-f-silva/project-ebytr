import { Given } from 'cypress-cucumber-preprocessor/steps';

import TEST_IDS from './testids';

const url = 'http://localhost:3000';

Given('que eu entro no app', () => {
  cy.visit(url);
});

Given('eu digito uma tarefa com o texto {string}', (texto) => {
  cy.get(TEST_IDS.todoInput)
    .type(texto);
});

Given('eu clico no botão {string}', (texto) => {
  cy.contains(texto).click();
});
