# **Aliasing (Apelidos)**

Exemplos de como criar apelidos para **elementos DOM** ou **recursos de rede** no Cypress, para referência posterior.
Para a documentação completa, acesse [docs.cypress.io](https://docs.cypress.io).

---

## **.as()**

### 🔹 Criando apelidos para elementos DOM

Para evitar repetir cadeias longas de seletores, use o comando **`.as()`** para criar um apelido.

```js
// Cadeia longa de comandos
// Podemos simplificar usando .as()
cy.get('.as-table')
  .find('tbody>tr').first()
  .find('td').first()
  .find('button').as('firstBtn')

// Para referenciar o apelido criado, use @
cy.get('@firstBtn').click()

cy.get('@firstBtn')
  .should('have.class', 'btn-success')
  .and('contain', 'Changed')
```

---

### 🔹 Criando apelidos para rotas (network requests)

Também é possível criar apelidos para **rotas interceptadas** e depois usá-los com `cy.wait()`.

```js
// Cria um alias para a rota interceptada
cy.intercept('GET', '**/comments/*').as('getComment')

// Quando o botão é clicado, a requisição é feita
cy.get('.network-btn').click()

// Espera a rota e valida o status da resposta
cy.wait('@getComment').its('response.statusCode').should('eq', 200)
```

---

📌 **Resumo da Seção**

* Use **`.as()`** para criar apelidos de elementos DOM e rotas.
* Use `@nomeDoAlias` para reutilizar no teste.
* Muito útil para **evitar duplicação** de seletores e para **aguardar requisições de rede**.

---