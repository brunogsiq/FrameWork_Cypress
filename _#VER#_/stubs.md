## 🧠 1️⃣ Conceito-base: Mocks, Stubs e Spies

| Conceito | O que faz                                                                                                     | Exemplo no Cypress                                             |
| -------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **Mock** | É uma **resposta falsa (fake)** que você fornece para substituir algo real (ex: API, arquivo, função).        | `cy.intercept('GET', '/api/users', { fixture: 'users.json' })` |
| **Stub** | É uma **função falsa** que “imita” um método real, permitindo controlar o retorno e verificar se foi chamada. | `cy.stub(window, 'alert').as('alerta')`                        |
| **Spy**  | Apenas **observa** uma função real — não altera o comportamento, só monitora chamadas e parâmetros.           | `cy.spy(console, 'log').as('logConsole')`                      |

👉 Em resumo:

* **Mock:** finge o backend.
* **Stub:** finge o comportamento de uma função.
* **Spy:** espiona sem interferir.

---

## ⚙️ 2️⃣ Como o Cypress faz isso

O Cypress tem duas abordagens principais para "mockar":

### A) **Interceptação de rede (cy.intercept)**

Usado para **simular respostas da API** — é o que mais otimiza testes.

```js
cy.intercept('GET', '/api/users', {
  statusCode: 200,
  fixture: 'users.json'
}).as('getUsers')

cy.visit('/users')
cy.wait('@getUsers')
```

📦 Aqui o Cypress intercepta a chamada e devolve o conteúdo do fixture `users.json` no lugar da API real.

✅ **Benefícios:**

* Teste roda rápido e estável (sem depender do servidor).
* Você controla o que o front recebe.
* Pode simular cenários diferentes (erro 500, dados vazios, etc.).

---

### B) **Funções stubadas (cy.stub)**

Usado para **substituir métodos do browser ou funções internas.**

Exemplo 1 — substituir `window.alert()`:

```js
cy.visit('/login')

cy.stub(window, 'alert').as('alerta')

cy.get('#botao-login').click()

cy.get('@alerta').should('have.been.calledWith', 'Login inválido!')
```

Exemplo 2 — stubar uma função da sua app:

```js
cy.window().then((win) => {
  cy.stub(win.app, 'enviarFormulario').as('envioStub')
})

cy.get('form').submit()
cy.get('@envioStub').should('have.been.called')
```

---

### C) **Espionar sem alterar (cy.spy)**

Você observa uma função real sendo chamada.

```js
cy.window().then((win) => {
  cy.spy(win.console, 'log').as('consoleLog')
})

cy.get('#gerar-log').click()

cy.get('@consoleLog').should('have.been.calledWith', 'Ação executada!')
```

---

## 💡 3️⃣ Exemplos reais no dia a dia de QA

### 🧩 Exemplo 1: simular login bem-sucedido

```js
cy.intercept('POST', '/api/login', {
  statusCode: 200,
  body: { token: 'abc123', user: 'bruno' }
}).as('loginMock')

cy.visit('/login')
cy.get('#user').type('bruno')
cy.get('#pass').type('123')
cy.get('#btn-login').click()

cy.wait('@loginMock')
cy.url().should('include', '/dashboard')
```

---

### ⚠️ Exemplo 2: simular erro de servidor

```js
cy.intercept('POST', '/api/login', {
  statusCode: 500,
  body: { message: 'Erro interno!' }
}).as('loginErro')

cy.get('#btn-login').click()
cy.get('.toast-error').should('contain', 'Erro interno')
```

---

### 🧠 Exemplo 3: stubar localStorage

```js
cy.window().then((win) => {
  cy.stub(win.localStorage, 'setItem').as('salvarItem')
})

cy.get('#salvar').click()
cy.get('@salvarItem').should('have.been.calledWith', 'user', 'bruno')
```

---

## ⚡ 4️⃣ Quando usar mocks/stubs

| Caso                                                           | Melhor solução                                              |
| -------------------------------------------------------------- | ----------------------------------------------------------- |
| Precisa validar comportamento do front independente do backend | `cy.intercept()`                                            |
| Quer simular erro ou resposta diferente da API                 | `cy.intercept()` com `statusCode` custom                    |
| Quer validar chamadas de função                                | `cy.spy()`                                                  |
| Quer substituir completamente o comportamento                  | `cy.stub()`                                                 |
| Quer testar comportamento offline                              | `cy.intercept()` bloqueando chamadas (status 500 / timeout) |

---

## 🔍 5️⃣ Boas práticas

✅ **Mantenha fixtures organizadas:**

```
cypress/
 └── fixtures/
      ├── login_sucesso.json
      ├── login_erro.json
      └── usuarios.json
```

✅ **Nomeie interceptações:**

```js
cy.intercept('GET', '/api/users', { fixture: 'usuarios.json' }).as('getUsers')
cy.wait('@getUsers')
```

✅ **Combine com testes visuais:**
Mocka a API, e depois valida que o **DOM renderizou corretamente**.

✅ **Evite dependência externa:**
Mockar o backend é ótimo para rodar em **CI/CD sem internet**.

---

## 🧩 Exemplo completo (Login com intercept + validação)

```js
describe('Login com Mock', () => {
  it('Deve simular login com sucesso', () => {
    cy.intercept('POST', '/api/login', {
      statusCode: 200,
      body: { token: 'abc123', user: 'standard_user' }
    }).as('loginMock')

    cy.visit('/login')
    cy.get('#username').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#btn-login').click()

    cy.wait('@loginMock')
    cy.get('.welcome').should('contain', 'Bem-vindo, standard_user')
  })
})
```

---

## 📘 Resumo rápido

| Conceito | Descrição                      | Exemplo                                                 |
| -------- | ------------------------------ | ------------------------------------------------------- |
| **Mock** | Simula uma API ou dado externo | `cy.intercept('/api/users', { fixture: 'users.json' })` |
| **Stub** | Substitui uma função real      | `cy.stub(window, 'alert')`                              |
| **Spy**  | Observa uma função real        | `cy.spy(console, 'log')`                                |

---

massa! aqui vai um **fluxo completo** mostrando, no **mesmo spec**, como usar:

* `cy.intercept()` → **mock** de API (sucesso, erro e timeout)
* `cy.stub()` → **stub** de funções (`window.alert`, `localStorage.setItem`)
* `cy.spy()` → **espionar** `console.log`

Ajuste os seletores `data-cy` aos da sua aplicação.

---

# 📁 Estrutura recomendada

```
cypress/
  fixtures/
    login_success.json
    login_error.json
    profile.json
  e2e/
    login.mock.cy.js
  support/
    commands.js
    e2e.js
```

## 📦 fixtures

**`cypress/fixtures/login_success.json`**

```json
{
  "token": "abc123",
  "user": {
    "username": "standard_user",
    "name": "Bruno"
  }
}
```

**`cypress/fixtures/login_error.json`**

```json
{
  "message": "Credenciais inválidas"
}
```

**`cypress/fixtures/profile.json`**

```json
{
  "id": 101,
  "name": "Bruno Siqueira",
  "role": "QA"
}
```

---

## 🧪 spec: `cypress/e2e/login.mock.cy.js`

```js
/// <reference types="cypress" />

describe('Login – mocks, stubs e spies', () => {
  beforeEach(() => {
    // Espiona console.log (sem alterar comportamento)
    cy.window().then((win) => {
      cy.spy(win.console, 'log').as('consoleLog')
      cy.stub(win.localStorage, 'setItem').as('setItem')  // stub localStorage
      cy.stub(win, 'alert').as('alerta')                  // stub window.alert
    })

    cy.visit('/login') // ajuste a rota
    cy.get('[data-cy=input-username]').should('be.visible')
    cy.get('[data-cy=input-password]').should('be.visible')
    cy.get('[data-cy=btn-login]').should('be.visible')
  })

  it('✅ Login de sucesso (mock da API + spies/stubs)', () => {
    // Mock da API de login
    cy.intercept('POST', '**/api/login', {
      statusCode: 200,
      fixture: 'login_success.json'
    }).as('postLogin')

    // Mock da API de profile (depois do login)
    cy.intercept('GET', '**/api/profile', {
      statusCode: 200,
      fixture: 'profile.json'
    }).as('getProfile')

    // Ação de login
    cy.get('[data-cy=input-username]').type('standard_user')
    cy.get('[data-cy=input-password]').type('secret_sauce')
    cy.get('[data-cy=btn-login]').click()

    // Sincroniza com as chamadas
    cy.wait('@postLogin').its('response.statusCode').should('eq', 200)
    cy.wait('@getProfile').its('response.statusCode').should('eq', 200)

    // Validações de DOM
    cy.url().should('include', '/dashboard')
    cy.get('[data-cy=welcome]').should('contain.text', 'Bruno')

    // Não deve ter alert (stubado)
    cy.get('@alerta').should('not.have.been.called')

    // Deve salvar token no localStorage
    cy.get('@setItem').should('have.been.calledWith', 'auth_token', 'abc123')

    // Deve ter logado algo no console
    cy.get('@consoleLog').should('have.been.called')
  })

  it('❌ Login com erro (mock 401 + valida UI de erro)', () => {
    cy.intercept('POST', '**/api/login', {
      statusCode: 401,
      fixture: 'login_error.json'
    }).as('postLoginErro')

    cy.get('[data-cy=input-username]').type('locked_out_user')
    cy.get('[data-cy=input-password]').type('wrong_password')
    cy.get('[data-cy=btn-login]').click()

    cy.wait('@postLoginErro').its('response.statusCode').should('eq', 401)

    // UI de erro
    cy.get('[data-cy=toast-error]')
      .should('be.visible')
      .and('contain.text', 'Credenciais inválidas')

    // Pode disparar um alert na sua app? valide
    // cy.get('@alerta').should('have.been.calledWith', 'Credenciais inválidas')
  })

  it('🌐 Timeout/queda de rede (simulação sem backend)', () => {
    // Força erro de rede (sem resposta)
    cy.intercept('POST', '**/api/login', { forceNetworkError: true }).as('postLoginDown')

    cy.get('[data-cy=input-username]').type('standard_user')
    cy.get('[data-cy=input-password]').type('secret_sauce')
    cy.get('[data-cy=btn-login]').click()

    cy.wait('@postLoginDown')
    cy.get('[data-cy=toast-error]')
      .should('be.visible')
      .and('contain.text', 'Falha de conexão')
  })

  it('🐢 Resposta lenta (delay) e loader visível', () => {
    // Simula latência
    cy.intercept('POST', '**/api/login', (req) => {
      req.on('response', (res) => {
        res.setDelay(1500) // 1.5s
      })
      req.reply({ statusCode: 200, fixture: 'login_success.json' })
    }).as('postLoginLento')

    cy.get('[data-cy=input-username]').type('performance_glitch_user')
    cy.get('[data-cy=input-password]').type('secret_sauce')
    cy.get('[data-cy=btn-login]').click()

    // Loader aparece durante o request
    cy.get('[data-cy=loader]').should('be.visible')

    cy.wait('@postLoginLento')
    cy.get('[data-cy=loader]').should('not.exist')
    cy.url().should('include', '/dashboard')
  })
})
```

---

## 🔧 (Opcional) helpers em `support/commands.js`

```js
/// <reference types="cypress" />

Cypress.Commands.add('loginUI', (user, pass) => {
  cy.get('[data-cy=input-username]').clear().type(user)
  cy.get('[data-cy=input-password]').clear().type(pass)
  cy.get('[data-cy=btn-login]').click()
})
```

---

### 📝 Dicas rápidas

* **Mocks** (`cy.intercept`) te libertam do backend: estáveis, rápidos e reproduzíveis.
* **Stubs** (`cy.stub`) controlam e validam efeitos colaterais (alert, localStorage, funções internas).
* **Spies** (`cy.spy`) observam comportamento real sem alterar nada (ótimo para logs e métricas).
* Dê **aliases** com `as('...')` e sempre **`cy.wait('@alias')`** para sincronizar.
* Use **fixtures** para organizar massas e cenários (sucesso, erro, vazio, lento, etc.).

Se quiser, adapto o spec acima para os **seus endpoints e seletores reais** (manda um exemplo de rota e um print/HTML dos inputs/botão).
