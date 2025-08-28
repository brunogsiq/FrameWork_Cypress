# **cy.wait()**

O comando `cy.wait()` é usado para **esperar um tempo específico** ou **aguardar a resolução de um recurso** (como uma requisição de rede).

---

## 🔹 Esperando um tempo fixo (não recomendado em excesso)

```js
cy.get('.wait-input1').type('Wait 1000ms after typing')
cy.wait(1000)

cy.get('.wait-input2').type('Wait 1000ms after typing')
cy.wait(1000)

cy.get('.wait-input3').type('Wait 1000ms after typing')
cy.wait(1000)
```

➡️ Isso aguarda **1000ms (1 segundo)** entre as ações.
⚠️ **Boas práticas**: evite usar esperas fixas, prefira aguardar condições ou recursos.

---

## 🔹 Esperando por requisições de rede

Podemos escutar chamadas de rede com `cy.intercept()` e então esperar a resposta com `cy.wait()`.

```js
// Escutando requisições GET para comments/*
cy.intercept('GET', '**/comments/*').as('getComment')

// O clique no botão dispara a requisição
cy.get('.network-btn').click()

// Aguarda a requisição e valida o status da resposta
cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304])
```

---

## 📌 Boas práticas

* Evite esperas fixas (`cy.wait(1000)`) — use apenas quando **realmente necessário**.
* Prefira esperar **requisições de rede** ou condições específicas.
* O Cypress já tem **retry automático**, então use seletores e assertivas para garantir estabilidade.

🔗 Mais informações:

* *Asserting Network Calls from Cypress Tests* (blog)
* *Unit testing application code recipe*
* Evite hard-coded waits → use o **retry-ability** embutido no Cypress.

---