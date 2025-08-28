
# **Location**

Exemplos de como obter a URL dentro da sua aplicação no Cypress.
Para referência completa dos comandos, acesse [docs.cypress.io](https://docs.cypress.io).

---

## **cy.hash()**

Para obter o **hash** atual da URL, use o comando:

```js
cy.hash()
```

Exemplo:

```js
cy.hash().should('be.empty')
```

---

## **cy.location()**

Para obter o objeto `window.location`, use o comando:

```js
cy.location()
```

Exemplo:

```js
cy.location().should((location) => {
  expect(location.hash).to.be.empty
  expect(location.href).to.eq('https://example.cypress.io/commands/location')
  expect(location.host).to.eq('example.cypress.io')
  expect(location.hostname).to.eq('example.cypress.io')
  expect(location.origin).to.eq('https://example.cypress.io')
  expect(location.pathname).to.eq('/commands/location')
  expect(location.port).to.eq('')
  expect(location.protocol).to.eq('https:')
  expect(location.search).to.be.empty
})
```

---

## **cy.url()**

Para obter a **URL atual**, use o comando:

```js
cy.url()
```

Exemplo:

```js
cy.url().should('eq', 'https://example.cypress.io/commands/location')
```

---