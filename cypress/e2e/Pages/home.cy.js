/// <reference types="cypress" />

describe('User is on Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('displays the heading text', () => {
    cy.get('h1').contains('Hello world!');
  });
});
