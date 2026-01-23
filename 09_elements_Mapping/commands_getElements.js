//Projeto conexão QA

Cypress.Commands.add('getByDataTest', (selector) => {
    return cy.get(`[data-test=${selector}]`);
});


cy.getByDataTest('submit-button').click();
cy.getByDataTest('username-input').type('myUsername');
cy.getByDataTest('password-input').type('myPassword');
cy.getByDataTest('login-form').should('be.visible');