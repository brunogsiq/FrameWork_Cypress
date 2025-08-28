// cy.end é útil quando você deseja encerrar a cadeia
// e forçar o Cypress a consultar novamente desde o elemento raiz
cy.get('.misc-table').within(() => {
  // encerra a cadeia atual e retorna null
  cy.contains('Cheryl').click().end()

  // consulta novamente a tabela inteira
  cy.contains('Charles').click()
})
