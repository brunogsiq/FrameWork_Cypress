# **Navigation**

Exemplos de como navegar entre páginas dentro da sua aplicação com Cypress.
Para referência completa dos comandos, acesse [docs.cypress.io](https://docs.cypress.io).

---

## **cy.go()**

Para **voltar** ou **avançar** no histórico do navegador, use o comando:

```js
cy.go()
```

Exemplo:

```js
cy.location('pathname').should('include', 'navigation')

cy.go('back')
cy.location('pathname').should('not.include', 'navigation')

cy.go('forward')
cy.location('pathname').should('include', 'navigation')

// simulando clique no botão Voltar
cy.go(-1)
cy.location('pathname').should('not.include', 'navigation')

// simulando clique no botão Avançar
cy.go(1)
cy.location('pathname').should('include', 'navigation')
```

---

## **cy.reload()**

Para **recarregar a página**, use o comando:

```js
cy.reload()
```

Recarregar a página sem usar o cache:

```js
cy.reload(true)
```

---

## **cy.visit()**

Para visitar uma página remota, use o comando:

```js
cy.visit('https://example.cypress.io/commands/navigation', {
  timeout: 50000, // aumenta o tempo total para o carregamento
  onBeforeLoad: function(contentWindow){
    // contentWindow é o objeto window da página remota antes de carregar
  },
  onLoad: function(contentWindow){
    // contentWindow é o objeto window da página remota após carregar
  }
})
```

---