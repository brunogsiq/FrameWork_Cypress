    //Validando uma url

    Ex:
        cy.url()
            .should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)