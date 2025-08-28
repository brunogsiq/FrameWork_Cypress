cy.wrap({ foo: 'bar' })
  .should('have.property', 'foo')
  .and('include', 'bar')
