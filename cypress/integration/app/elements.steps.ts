import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('eu vejo o título {string}', (title) => {
  cy.title().should('include', title);
});
