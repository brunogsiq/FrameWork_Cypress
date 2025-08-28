// executa um comando do sistema
cy.exec('echo Jane Lane')
  .its('stdout').should('contain', 'Jane Lane')

// podemos usar Cypress.platform para escolher o comando certo
cy.log(`Platform ${Cypress.platform} architecture ${Cypress.arch}`)

if (Cypress.platform === 'win32') {
  cy.exec('print cypress.config.js')
    .its('stderr').should('be.empty')
} else {
  cy.exec('cat cypress.config.js')
    .its('stderr').should('be.empty')

  cy.exec('pwd')
    // para Cypress 14 e abaixo, use 'code' em vez de 'exitCode'
    .its('exitCode').should('eq', 0)
}
