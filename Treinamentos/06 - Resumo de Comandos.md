
# Guia de Comandos Avançados Cypress

Abaixo estão os principais comandos encontrados na pasta `2-advanced-examples` do Cypress, com uma explicação simples e um exemplo para cada.

---

## `actions.cy.js`

**Quando usar:** Para simular ações do usuário (digitar, clicar, arrastar, etc).  
**Exemplo:**
```js
cy.get('input').type('Olá mundo')
```

---

## `aliasing.cy.js`

**Quando usar:** Para criar atalhos (`alias`) de elementos ou requisições.  
**Exemplo:**
```js
cy.get('input').as('campoTexto')
cy.get('@campoTexto').type('Texto')
```

---

## `assertions.cy.js`

**Quando usar:** Para validar valores ou comportamentos esperados.  
**Exemplo:**
```js
cy.get('button').should('be.visible')
```

---

## `connectors.cy.js`

**Quando usar:** Para conectar comandos encadeados com `.find()`, `.eq()`, etc.  
**Exemplo:**
```js
cy.get('ul').find('li').eq(2).should('contain', 'Item 3')
```

---

## `cookies.cy.js`

**Quando usar:** Para manipular cookies (setar, limpar, verificar).  
**Exemplo:**
```js
cy.setCookie('token', '123abc')
cy.getCookie('token').should('have.property', 'value', '123abc')
```

---

## `cypress_api.cy.js`

**Quando usar:** Para usar a API interna do Cypress (como `Cypress._`, `Cypress.env`).  
**Exemplo:**
```js
Cypress.env('usuario', 'admin')
```

---

## `files.cy.js`

**Quando usar:** Para interagir com arquivos (upload, leitura, etc).  
**Exemplo:**
```js
cy.readFile('cypress/fixtures/dados.json').should('exist')
```

---

## `location.cy.js`

**Quando usar:** Para verificar ou mudar a URL atual.  
**Exemplo:**
```js
cy.location('pathname').should('eq', '/dashboard')
```

---

## `misc.cy.js`

**Quando usar:** Comandos diversos (como `end`, `debug`, `log`).  
**Exemplo:**
```js
cy.log('Finalizando teste')
```

---

## `navigation.cy.js`

**Quando usar:** Para testar navegação de páginas.  
**Exemplo:**
```js
cy.visit('/inicio')
cy.go('back')
```

---

## `network_requests.cy.js`

**Quando usar:** Para interceptar, esperar ou mockar requisições.  
**Exemplo:**
```js
cy.intercept('GET', '/api/usuarios').as('getUsuarios')
cy.wait('@getUsuarios')
```

---

## `querying.cy.js`

**Quando usar:** Para buscar elementos usando diferentes métodos.  
**Exemplo:**
```js
cy.contains('Enviar')
cy.get('.btn')
```

---

## `spies_stubs_clocks.cy.js`

**Quando usar:** Para espiar ou mockar funções e controlar o tempo.  
**Exemplo:**
```js
const relogio = cy.clock()
relogio.tick(1000)
```

---

## `storage.cy.js`

**Quando usar:** Para manipular o localStorage e sessionStorage.  
**Exemplo:**
```js
cy.setLocalStorage('tema', 'escuro')
cy.getLocalStorage('tema').should('eq', 'escuro')
```

---

## `traversal.cy.js`

**Quando usar:** Para navegar entre elementos do DOM.  
**Exemplo:**
```js
cy.get('ul > li').first().should('contain', 'Primeiro item')
```

---

## `utilities.cy.js`

**Quando usar:** Para usar funções utilitárias (`Cypress._`, `Cypress.$`).  
**Exemplo:**
```js
const texto = Cypress._.capitalize('cypress')
```

---

## `viewport.cy.js`

**Quando usar:** Para simular diferentes tamanhos de tela.  
**Exemplo:**
```js
cy.viewport(320, 480) // Mobile
```

---

## `waiting.cy.js`

**Quando usar:** Para esperar por elementos ou ações.  
**Exemplo:**
```js
cy.wait(2000)
```

---

## `window.cy.js`

**Quando usar:** Para acessar a `window` do navegador.  
**Exemplo:**
```js
cy.window().should('have.property', 'localStorage')
```

---

> 📌 Esses exemplos são simples para fins de aprendizado e podem ser adaptados ao seu contexto de testes reais.
