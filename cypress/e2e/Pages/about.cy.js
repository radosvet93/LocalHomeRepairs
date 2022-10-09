/// <reference types="cypress" />

describe('User is on About page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/about');
  });

  it('displays the heading text', () => {
    cy.get('h1').contains('About Page');
  });
});
