# 🔹 **Hooks do Cypress/Mocha**

### 1. **`before()`**

* Executa **uma única vez antes de todos os testes** no `describe/context`.
* Bom para **setup global**, ex: preparar dados, resetar banco.

```js
before(() => {
  cy.log('Executa UMA vez antes de todos os testes')
})
```

---

### 2. **`beforeEach()`**

* Executa **antes de cada teste (`it`)**.
* Bom para **resetar estado**, abrir páginas, refazer login, etc.

```js
beforeEach(() => {
  cy.visit('/login')
})
```

---

### 3. **`afterEach()`**

* Executa **depois de cada teste (`it`)**.
* Bom para **limpeza**: remover dados temporários, fazer logout, screenshots em caso de erro.

```js
afterEach(() => {
  cy.log('Executa depois de cada teste')
})
```

---

### 4. **`after()`**

* Executa **uma única vez depois de todos os testes** no `describe/context`.
* Bom para **teardown global**, ex: fechar conexões, limpar mocks.

```js
after(() => {
  cy.log('Executa UMA vez após todos os testes')
})
```

---

# ✅ Exemplo completo com todos os hooks

```js
describe('Exemplo de Hooks', () => {
  before(() => {
    cy.log('👉 before: executa uma vez ANTES de todos os testes')
  })

  beforeEach(() => {
    cy.log('👉 beforeEach: executa ANTES de cada teste')
  })

  it('Teste 1', () => {
    cy.log('Rodando Teste 1')
  })

  it('Teste 2', () => {
    cy.log('Rodando Teste 2')
  })

  afterEach(() => {
    cy.log('👉 afterEach: executa DEPOIS de cada teste')
  })

  after(() => {
    cy.log('👉 after: executa uma vez DEPOIS de todos os testes')
  })
})
```

---

📌 **Resumo:**

* `before` → 1x antes de tudo.
* `beforeEach` → antes de cada `it`.
* `afterEach` → depois de cada `it`.
* `after` → 1x depois de tudo.

---
