### 🔹 `cy.within()`

Podemos localizar elementos **dentro de um elemento específico** com `.within()`.

```js
cy.get('.query-form').within(() => {
  cy.get('input:first').should('have.attr', 'placeholder', 'Email')
  cy.get('input:last').should('have.attr', 'placeholder', 'Password')
})
```

---