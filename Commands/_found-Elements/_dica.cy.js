### ✅ Boas Práticas: Selecionando Elementos

Prefira sempre usar **atributos dedicados** (`data-cy` ou `data-test`) em vez de classes ou IDs comuns.

```js
// 🚫 Muito ruim – genérico demais
cy.get('button').click()

// 🚫 Ruim – acoplado a estilo, sujeito a mudanças
cy.get('.btn.btn-large').click()

// ⚠️ Médio – depende do atributo name
cy.get('[name=submission]').click()

// ⚠️ Médio – depende de ID usado também no estilo
cy.get('#main').click()

// 🙂 Melhor – ID + acessibilidade com role
cy.get('#main[role=button]').click()

// 🙂 Melhor – mas depende de texto que pode mudar
cy.contains('Submit').click()

// ✅ Melhor prática – isolado de mudanças de estilo/texto
cy.get('[data-cy=submit]').click()
```
