[
  {
    "tipo": "standard_user",
    "password": "secret_sauce"
  },
  {
    "tipo": "locked_out_user",
    "password": "secret_sauce"
  },
  {
    "tipo": "problem_user",
    "password": "secret_sauce"
  },
  {
    "tipo": "performance_glitch_user",
    "password": "secret_sauce"
  },
  {
    "tipo": "error_user",
    "password": "secret_sauce"
  },
  {
    "tipo": "visual_user",
    "password": "secret_sauce"
  }
]
📄 cypress/e2e/login.cy.js


describe('Login com múltiplos perfis', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Valida login de cada usuário', () => {
    cy.fixture('usuarios.json').then((usuarios) => {
      usuarios.forEach((usuario) => {
        cy.log(`🔹 Testando: ${usuario.tipo}`)
        cy.get('#user-name').clear().type(usuario.tipo)
        cy.get('#password').clear().type(usuario.password)
        cy.get('#login-button').click()

        // Validação genérica — personalize conforme comportamento esperado
        cy.get('body').then(($body) => {
          if ($body.find('.error-message-container').length) {
            cy.log(`Usuário ${usuario.tipo} bloqueado ou inválido`)
            cy.get('.error-message-container').should('be.visible')
          } else {
            cy.url().should('include', 'inventory.html')
            cy.get('#react-burger-menu-btn').click()
            cy.get('#logout_sidebar_link').click()
          }
        })
      })
    })
  })
})