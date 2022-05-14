import { Given } from 'cypress-cucumber-preprocessor/steps';

const url = 'http://localhost:3000';

Given('que eu entro no app', () => {
  cy.visit(url);
});
