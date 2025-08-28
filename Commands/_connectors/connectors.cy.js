# **Connectors (Conectores)**

Exemplos de como conectar comandos no Cypress.
Para referência completa, acesse [docs.cypress.io](https://docs.cypress.io).

---

## **.each()**

Para iterar sobre os elementos do sujeito atual, use o comando **`.each()`**.

```js
cy.get('.connectors-each-ul>li')
  .each(function($el, index, $list){
    console.log($el, index, $list)
  })
```

Exemplo de lista iterada:

* Lara Williams
* William Grey
* Monica Pharrel

---

## **.its()**

Para obter as propriedades do sujeito atual, use o comando **`.its()`**.

```js
cy.get('.connectors-its-ul>li')
  // acessa a propriedade "length" e retorna o valor
  .its('length')
  .should('be.gt', 2)
```

Exemplo de lista validada:

* Chai
* Chai-jQuery
* Chai-Sinon

---

## **.invoke()**

Para invocar uma função em um sujeito atual, use o comando **`.invoke()`**.

```js
cy.get('.connectors-div').should('be.hidden')
  // chama o método jQuery "show" na div.container
  .invoke('show')
  .should('be.visible')
```

---

## **.spread()**

Para "espalhar" um array em argumentos individuais dentro de uma função de callback, use **`.spread()`**.

```js
const arr = ['foo', 'bar', 'baz']

cy.wrap(arr).spread(function(foo, bar, baz){
  expect(foo).to.eq('foo')
  expect(bar).to.eq('bar')
  expect(baz).to.eq('baz')
})
```

---

## **.then()**

Para invocar uma função de callback com o sujeito atual, use **`.then()`**.

```js
cy.get('.connectors-list>li').then(function($lis){
  expect($lis).to.have.length(3)
  expect($lis.eq(0)).to.contain('Walk the dog')
  expect($lis.eq(1)).to.contain('Feed the cat')
  expect($lis.eq(2)).to.contain('Write JavaScript')
})
```

➡️ Se o callback retornar um valor, ele será passado para o próximo callback (como uma *Promise*).

```js
cy.wrap(1)
  .then((num) => {
    expect(num).to.equal(1)
    return 2
  })
  .then((num) => {
    expect(num).to.equal(2)
  })
```

➡️ Se o callback não retornar nada (`undefined`), o valor original é passado adiante:

```js
cy.wrap(1)
  .then((num) => {
    expect(num).to.equal(1)
    // nada é retornado
  })
  .then((num) => {
    // recebe o valor original
    expect(num).to.equal(1)
  })
```

➡️ Se dentro do callback houver comandos do Cypress, o valor retornado pelo último comando será passado ao próximo `.then()`:

```js
cy.wrap(1)
  .then((num) => {
    expect(num).to.equal(1)
    // executa outro comando Cypress
    return cy.wrap(2)
  })
  .then((num) => {
    // recebe o valor do cy.wrap(2)
    expect(num).to.equal(2)
  })
```

Exemplo de lista conectada:

* Walk the dog
* Feed the cat
* Write JavaScript

---

✅ **Resumo da Seção**

* **`.each()`** → itera sobre elementos.
* **`.its()`** → acessa propriedades.
* **`.invoke()`** → chama métodos/funções em elementos.
* **`.spread()`** → espalha arrays como argumentos.
* **`.then()`** → executa callbacks e encadeia valores (semelhante a Promises, mas com comportamento Cypress).

---