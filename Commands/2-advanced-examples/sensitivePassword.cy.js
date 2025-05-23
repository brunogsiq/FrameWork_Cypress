/*
    Utilizando estratégia para não apresentar dados sensíveis

    Ex:
        cy.get("[data-qa-selector='password_field']")
            .type(password, { log: false })
*/