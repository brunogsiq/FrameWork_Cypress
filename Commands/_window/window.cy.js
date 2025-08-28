Aqui está a tradução para o português, mantendo os comandos Cypress no formato original:

---

# **Window**

Exemplos de como referenciar `window` e outras propriedades de `window` no Cypress.
Para uma referência completa dos comandos, acesse [docs.cypress.io](https://docs.cypress.io).

---

## **cy.window()**

Para obter o objeto global `window`, use o comando:

```js
cy.window()
```

Exemplo:

```js
cy.window().should('have.property', 'top')
```

---

## **cy.document()**

Para obter o objeto `document`, use o comando:

```js
cy.document()
```

Exemplo:

```js
cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
```

---

## **cy.title()**

Para obter o título da página, use o comando:

```js
cy.title()
```

Exemplo:

```js
cy.title().should('include', 'Kitchen Sink')
```

---