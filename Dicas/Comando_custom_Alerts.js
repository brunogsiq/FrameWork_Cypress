Cypress.Commands.add('AlertError_HaveText', (expect) =>
{
	cy.contains('.alert-error', expect)
		.should('be.visible')
});

it(`${teste}.${++complemento} - Campos obrigatório preenchidos - Número do cartão.`, () =>
{
    cy.mount(<AddCard />)

    cy.contains('button', 'Adicionar').click();

    cy.get('.bg-zinc-800')
        .eq(0)
        .type('4242424242424242');

    cy.AlertError_HaveText('Nome do titular é obrigatório');
    cy.AlertError_HaveText('Data de expiração é obrigatória');
    cy.AlertError_HaveText('CVV é obrigatório');
    cy.AlertError_HaveText('Selecione um banco');
});