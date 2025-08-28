## 📘 Cypress – Seletores e Boas Práticas

### 🔹 `cy.get()`

- Para consultar o botão, use o comando **cy.get()**.

```js
cy.get('#query-btn').should('contain', 'Button')

cy.get('.query-btn').should('contain', 'Button')

cy.get('#querying .well>button:first').should('contain', 'Button')
//              ↲
// Use seletores CSS exatamente como no jQuery
```

- Para encontrar elementos por atributo `data`, utilize o seletor de atributo:

```js
cy.get('[data-test-id="test-example"]').should('have.class', 'example')
```

- O comando `cy.get()` retorna um objeto jQuery, e você pode obter seu atributo invocando `.attr()`:

```js
cy.get('[data-test-id="test-example"]')
  .invoke('attr', 'data-test-id')
  .should('equal', 'test-example')
```

- Ou também pegar uma propriedade CSS:

```js
cy.get('[data-test-id="test-example"]')
  .invoke('css', 'position')
  .should('equal', 'static')
```

- Outra forma é encadear asserções diretamente:

```js
cy.get('[data-test-id="test-example"]')
  .should('have.attr', 'data-test-id', 'test-example')
  .and('have.css', 'position', 'static')
```

---