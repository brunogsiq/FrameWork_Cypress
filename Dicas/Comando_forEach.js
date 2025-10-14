it(`${teste}.${++complemento} - Exemplo - Utilizando array de informações.`, () =>
{
    cy.mount(<AddCard />)

    cy.contains('button', 'Adicionar').click();

    const alerts = [
        'Número do cartão é obrigatório',
        'Nome do titular é obrigatório',
        'Data de expiração é obrigatória',
        'CVV é obrigatório',
        'Selecione um banco'
    ]

    alerts.forEach((alert) => {
        cy.AlertError_HaveText(alert)
    })
});