# 🎯 **Objetivo do `cy.session()`**

O **`cy.session()`** serve para **armazenar e restaurar o estado de uma sessão** entre testes.
Isso significa que você não precisa **repetir o login** em cada `it()` ou cenário de teste.

👉 Isso melhora:

* **Velocidade** → porque evita repetir logins demorados.
* **Estabilidade** → porque mantém os cookies, localStorage e sessionStorage consistentes.
* **Organização** → separa a lógica de autenticação do fluxo de testes.

---

# 🔹 **Exemplo simples – Reaproveitar login**

```js
describe('Exemplo com cy.session', () => {
  beforeEach(() => {
    // cria ou restaura a sessão "usuario1"
    cy.session('usuario1', () => {
      cy.visit('/login')
      cy.get('#email').type('teste@exemplo.com')
      cy.get('#senha').type('123456')
      cy.get('button[type="submit"]').click()

      // verifica que logou
      cy.url().should('include', '/dashboard')
    })
  })

  it('Deve acessar a página de perfil sem refazer login', () => {
    cy.visit('/perfil')
    cy.get('h1').should('contain', 'Perfil do Usuário')
  })

  it('Deve acessar a página de configurações sem refazer login', () => {
    cy.visit('/configuracoes')
    cy.get('h1').should('contain', 'Configurações')
  })
})
```

👉 Aqui, o login só roda **na primeira vez**.
Nos testes seguintes, o Cypress restaura a sessão salva.

---

# 🔹 **Exemplo com múltiplos usuários**

Você pode salvar sessões diferentes, cada uma com um nome:

```js
describe('Sessões de usuários diferentes', () => {
  it('Sessão do usuário administrador', () => {
    cy.session('admin', () => {
      cy.visit('/login')
      cy.get('#email').type('admin@exemplo.com')
      cy.get('#senha').type('senhaAdmin')
      cy.get('button[type="submit"]').click()
    })

    cy.visit('/dashboard')
    cy.get('h1').should('contain', 'Painel do Administrador')
  })

  it('Sessão do usuário comum', () => {
    cy.session('cliente', () => {
      cy.visit('/login')
      cy.get('#email').type('cliente@exemplo.com')
      cy.get('#senha').type('senhaCliente')
      cy.get('button[type="submit"]').click()
    })

    cy.visit('/meus-pedidos')
    cy.get('h1').should('contain', 'Meus Pedidos')
  })
})
```

---

# 🔹 **Exemplo usando validação da sessão**

Você pode passar uma função extra para garantir que a sessão ainda é válida:

```js
cy.session('usuarioValido', () => {
  cy.visit('/login')
  cy.get('#email').type('teste@exemplo.com')
  cy.get('#senha').type('123456')
  cy.get('button[type="submit"]').click()
}, {
  validate: () => {
    cy.getCookie('token').should('exist') // garante que o cookie de login ainda existe
  }
})
```

---

# ✅ Resumindo

* **`cy.session(nome, setupFn)`** → cria ou restaura sessão salva.
* Evita rodar login repetidamente em cada teste.
* Suporta **múltiplos usuários** e **validação de sessão**.
* Melhora a **velocidade e consistência** dos testes de autenticação.

---