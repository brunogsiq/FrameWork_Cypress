---

# 📌 Diferença entre `context`, `describe` e `it`

* **`context`**
  → Usado para **agrupar grandes áreas ou módulos** de testes.
  → Normalmente descreve uma **funcionalidade ou tela**.
  👉 Pensa nele como uma "categoria".

* **`describe`**
  → Usado para **detalhar cenários dentro de um contexto**.
  → Normalmente descreve **um conjunto de casos de teste semelhantes**.
  👉 Pensa nele como uma "subcategoria".

* **`it`**
  → Define um **teste individual** (um caso específico).
  👉 Pensa nele como a frase "deve fazer algo".

---

# ✅ Exemplo prático com suas telas

```js
// cypress/e2e/sistema.cy.js
context('Tela de Cadastro', () => {
  describe('Fluxo de cadastro com sucesso', () => {
    it('deve cadastrar um usuário válido', () => {
      cy.visit('/cadastro')
      cy.get('#nome').type('Bruno QA')
      cy.get('#email').type('bruno@example.com')
      cy.get('#senha').type('SenhaF0rte!123')
      cy.get('button[type="submit"]').click()

      cy.contains('Cadastro realizado com sucesso').should('be.visible')
    })
  })

  describe('Fluxo de cadastro sem sucesso', () => {
    it('não deve permitir cadastro com e-mail inválido', () => {
      cy.visit('/cadastro')
      cy.get('#nome').type('Bruno QA')
      cy.get('#email').type('email_invalido')
      cy.get('#senha').type('123')
      cy.get('button[type="submit"]').click()

      cy.contains('E-mail inválido').should('be.visible')
    })
  })
})

context('Tela de Login', () => {
  describe('Login com sucesso', () => {
    it('deve logar com credenciais corretas', () => {
      cy.visit('/login')
      cy.get('#email').type('bruno@example.com')
      cy.get('#senha').type('SenhaF0rte!123')
      cy.get('button[type="submit"]').click()

      cy.url().should('include', '/dashboard')
    })
  })

  describe('Login sem sucesso', () => {
    it('não deve logar com senha incorreta', () => {
      cy.visit('/login')
      cy.get('#email').type('bruno@example.com')
      cy.get('#senha').type('senhaErrada')
      cy.get('button[type="submit"]').click()

      cy.contains('Usuário ou senha inválidos').should('be.visible')
    })
  })
})

context('Tela de Contato', () => {
  describe('Mensagem enviada com sucesso', () => {
    it('deve enviar mensagem válida', () => {
      cy.visit('/contato')
      cy.get('#nome').type('Bruno QA')
      cy.get('#email').type('bruno@example.com')
      cy.get('#mensagem').type('Preciso de suporte, por favor.')
      cy.get('button[type="submit"]').click()

      cy.contains('Mensagem enviada com sucesso').should('be.visible')
    })
  })

  describe('Falha ao enviar mensagem', () => {
    it('não deve enviar mensagem sem preencher os campos obrigatórios', () => {
      cy.visit('/contato')
      cy.get('button[type="submit"]').click()

      cy.contains('Preencha os campos obrigatórios').should('be.visible')
    })
  })
})
```

---

# 🎯 Como pensar:

* **`context`** = Tela ou funcionalidade grande.
* **`describe`** = Agrupa cenários (sucesso, erro, etc.).
* **`it`** = Caso de teste específico.


