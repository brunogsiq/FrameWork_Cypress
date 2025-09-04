// cypress/e2e/cadastro.cy.js
context('Tela de Cadastro', () => {
  // cria ou restaura a sessão após concluir o cadastro (apenas 1x)
  beforeEach(() => {
    cy.session('usuario-cadastrado', () => {
      // e-mail único para não conflitar com cadastros anteriores
      const email = `qa.teste+${Date.now()}@exemplo.com`

      cy.visit('/signup')
      cy.get('#name').type('Bruno QA')
      cy.get('#email').type(email)
      cy.get('#password').type('SenhaF0rte!123')
      cy.get('#terms').check()
      cy.get('button[type="submit"]').click()

      // valida que entrou logado após o cadastro
      cy.url().should('include', '/dashboard')
      cy.getCookie('auth_token').should('exist')
    }, {
      // garante que a sessão ainda é válida ao restaurar
      validate: () => {
        cy.getCookie('auth_token').should('exist')
      }
    })
  })

  describe('Fluxos após cadastro (sessão restaurada)', () => {
    it('deve acessar a página de Perfil já autenticado', () => {
      cy.visit('/profile')
      cy.contains('h1', 'Meu Perfil').should('be.visible')
    })

    it('deve acessar Configurações sem refazer login', () => {
      cy.visit('/settings')
      cy.contains('h1', 'Configurações').should('be.visible')
    })
  })
})
