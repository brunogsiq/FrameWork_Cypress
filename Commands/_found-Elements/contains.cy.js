### 🔹 `cy.contains()`

Podemos encontrar elementos pelo **conteúdo de texto** com `cy.contains()`.

```js
cy.get('.query-list')
  .contains('bananas').should('have.class', 'third')

// podemos passar uma expressão regular
cy.get('.query-list')
  .contains(/^b\w+/).should('have.class', 'third')

cy.get('.query-list')
  .contains('apples').should('have.class', 'first')

// passando um seletor junto com o texto
cy.get('#querying')
  .contains('ul', 'oranges')
  .should('have.class', 'query-list')

cy.get('.query-button')
  .contains('Save Form')
  .should('have.class', 'btn')
```

---