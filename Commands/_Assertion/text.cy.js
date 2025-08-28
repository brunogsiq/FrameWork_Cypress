cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
cy.get('.todo-list li').last().should('have.text', 'Walk the dog')