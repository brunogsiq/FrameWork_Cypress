### 🔹 `cy.root()`

Podemos encontrar o elemento **raiz do DOM** com `cy.root()`.

```js
// Por padrão, root é o documento
cy.root().should('match', 'html')

cy.get('.query-ul').within(() => {
  // Dentro do "within", o root agora é o elemento <ul>
  cy.root().should('have.class', 'query-ul')
})
```