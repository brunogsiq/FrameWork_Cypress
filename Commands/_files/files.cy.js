
# **Files (Arquivos)**

Exemplos de como usar arquivos no Cypress para **representar dados**, **ler dados** ou **escrever dados**.
Para referência completa, acesse [docs.cypress.io](https://docs.cypress.io).

---

## **cy.fixture()**

Carregar um **fixture** (arquivo de dados) com o comando **`cy.fixture()`**.

```js
// Ao invés de escrever uma resposta inline,
// podemos usar o conteúdo de um arquivo fixture.

// Quando a aplicação faz um Ajax GET para **/comments/*
// o Cypress intercepta e responde com os dados de "example.json"
cy.intercept('GET', '**/comments/*', { fixture: 'example.json' }).as('getComment')

// O clique dispara a requisição
cy.get('.fixture-btn').click()

// Verificamos a resposta vinda do fixture
cy.wait('@getComment').its('response.body')
  .should('have.property', 'name')
  .and('include', 'Using fixtures to represent data')
```

---

## **cy.fixture() ou require()**

Também é possível carregar JSON fixtures usando `require`.

```js
// JSON fixture carregado via require
const requiredExample = require('../../fixtures/example')

beforeEach(() => {
  // Carrega o arquivo example.json e guarda no contexto do teste
  cy.fixture('example.json').as('example')
})

it('cy.fixture ou require', function () {
  // Aqui podemos acessar "this.example" porque usamos function() {} e não arrow function
  expect(this.example, 'fixture no contexto do teste')
    .to.deep.equal(requiredExample)

  // Também podemos usar cy.wrap para comparar
  cy.wrap(this.example, 'fixture vs require')
    .should('deep.equal', requiredExample)
})
```

---

## **cy.readFile()**

Para **ler** o conteúdo de um arquivo, use **`cy.readFile()`**.

```js
// Caminho do arquivo é relativo à raiz do projeto
cy.readFile('cypress.config.js').then((json) => {
  expect(json).to.be.an('object')
})
```

---

## **cy.writeFile()**

Para **escrever** conteúdo em um arquivo, use **`cy.writeFile()`**.

```js
// Usando resposta de uma requisição para gerar fixture automaticamente
cy.request('https://jsonplaceholder.cypress.io/users')
  .then((response) => {
    cy.writeFile('cypress/fixtures/users.json', response.body)
  })

cy.fixture('users').should((users) => {
  expect(users[0].name).to.exist
})
```

➡️ Também é possível gravar objetos/arrays diretamente:

```js
cy.writeFile('cypress/fixtures/profile.json', {
  id: 8739,
  name: 'Jane',
  email: 'jane@example.com',
})

cy.fixture('profile').should((profile) => {
  expect(profile.name).to.eq('Jane')
})
```

---

✅ **Resumo da Seção**

* **`cy.fixture()`** → carrega dados de arquivos fixture (JSON, txt, etc.).
* **`require()`** → alternativa para carregar JSON diretamente.
* **`cy.readFile()`** → lê arquivos locais.
* **`cy.writeFile()`** → grava arquivos (pode ser usado para gerar fixtures dinâmicos).

---

👉 Quer que eu siga para a próxima seção **Cookies (cy.getCookie, cy.setCookie, cy.clearCookie)** ou prefere **Local Storage / Session Storage** primeiro?
