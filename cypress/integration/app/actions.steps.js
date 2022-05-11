import { Given } from "cypress-cucumber-preprocessor/steps";

const url = "https://localhost:3000";

Given(`que eu entro no app`, () => {
  cy.visit(url);
});
