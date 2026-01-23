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

const usuarios = [
    'standard_user',
    'locked_out_user',
    'problem_user',
    'performance_glitch_user',
    'error_user',
    'visual_user'
]

usuarios.forEach((user) => {
    it.only(`Deve testar o login do ${user}`, () => {
    cy.visit('/')
    cy.get('#user-name').type(user)
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // exemplo de validação
    cy.url().should('include', 'inventory.html')
    })
})