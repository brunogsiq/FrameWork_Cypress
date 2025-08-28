# **Network Requests (Requisições de Rede)**

Exemplos de como lidar com **requisições HTTP** no Cypress.
Para referência completa, acesse [docs.cypress.io](https://docs.cypress.io).

---

## **cy.request()**

Para realizar uma requisição XHR, use o comando **`cy.request()`**.

```js
cy.request('https://jsonplaceholder.cypress.io/comments')
  .should((response) => {
    expect(response.status).to.eq(200)
    expect(response.body).to.have.length(500)
    expect(response).to.have.property('headers')
    expect(response).to.have.property('duration')
  })
```

---

### 🔹 Encadeando múltiplas requisições

Podemos usar os dados de uma requisição para alimentar outra:

```js
// Primeiro, buscar o userId do primeiro usuário
cy.request('https://jsonplaceholder.cypress.io/users?_limit=1')
  .its('body.0') // retorna o primeiro usuário
  .then((user) => {
    expect(user).property('id').to.be.a('number')

    // Cria um novo post em nome desse usuário
    cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
      userId: user.id,
      title: 'Cypress Test Runner',
      body: 'Fast, easy and reliable testing for anything that runs in a browser.',
    })
  })
  // Agora validamos o retorno da segunda requisição
  .then((response) => {
    expect(response).property('status').to.equal(201) // novo recurso criado
    expect(response).property('body').to.contain({
      title: 'Cypress Test Runner',
    })
    expect(response.body).property('id').to.be.a('number').and.to.be.gt(100)
    expect(response.body).property('userId').to.be.a('number')
  })
```

---

### 🔹 Salvando dados no contexto de teste

Podemos salvar dados de resposta com **`.as()`** para usá-los depois:

```js
cy.request('https://jsonplaceholder.cypress.io/users?_limit=1')
  .its('body.0')
  .as('user') // salva no contexto do teste
  .then(function () {
    cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
      userId: this.user.id,
      title: 'Cypress Test Runner',
      body: 'Fast, easy and reliable testing for anything that runs in a browser.',
    })
    .its('body').as('post') // salva o novo post
  })
  .then(function () {
    // Aqui temos acesso tanto a this.user quanto a this.post
    expect(this.post, 'post tem o userId correto')
      .property('userId').to.equal(this.user.id)
  })
```

---

## **cy.intercept()**

O comando **`cy.intercept()`** permite monitorar, manipular ou simular requisições de rede.

### 🔹 Interceptando GET

```js
let message = 'whoa, this comment does not exist'

cy.intercept('GET', '**/comments/*').as('getComment')
cy.get('.network-btn').click()

cy.wait('@getComment').its('response.statusCode')
  .should('be.oneOf', [200, 304])
```

---

### 🔹 Interceptando POST

```js
cy.intercept('POST', '**/comments').as('postComment')

cy.get('.network-post').click()

cy.wait('@postComment').should(({ request, response }) => {
  expect(request.body).to.include('email')
  expect(request.headers).to.have.property('content-type')
  expect(response && response.body).to.have.property('name', 'Using POST in cy.intercept()')
})
```

---

### 🔹 Simulando (stub) resposta para PUT

```js
cy.intercept({
  method: 'PUT',
  url: '**/comments/*',
}, {
  statusCode: 404,
  body: { error: message },
  headers: { 'access-control-allow-origin': '*' },
  delayMs: 500,
}).as('putComment')

cy.get('.network-put').click()
cy.wait('@putComment')

// Verifica a mensagem de erro simulada
cy.get('.network-put-comment').should('contain', message)
```

---

✅ **Resumo da Seção**

* **`cy.request()`** → faz requisições reais (GET, POST, etc.).
* **`cy.intercept()`** → monitora, altera ou simula requisições.
* Combine com **`.as()`** e **`cy.wait()`** para aguardar e validar as respostas.

---