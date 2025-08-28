# **Storage (Armazenamento)**

Exemplos de como gerenciar **localStorage** e **sessionStorage** no Cypress.
Para referência completa, acesse [docs.cypress.io](https://docs.cypress.io).

---

## **cy.clearLocalStorage()**

Para limpar todos os dados do **localStorage** da origem atual, use:

```js
cy.get('.ls-btn').click()
cy.get('.ls-btn').should(() => {
  expect(localStorage.getItem('prop1')).to.eq('red')
  expect(localStorage.getItem('prop2')).to.eq('blue')
  expect(localStorage.getItem('prop3')).to.eq('magenta')
})

cy.clearLocalStorage()
cy.getAllLocalStorage().should(() => {
  expect(localStorage.getItem('prop1')).to.be.null
  expect(localStorage.getItem('prop2')).to.be.null
  expect(localStorage.getItem('prop3')).to.be.null
})
```

🔹 Também é possível limpar apenas **uma chave específica**:

```js
cy.clearLocalStorage('prop1')
cy.getAllLocalStorage().should(() => {
  expect(localStorage.getItem('prop1')).to.be.null
  expect(localStorage.getItem('prop2')).to.eq('blue')
  expect(localStorage.getItem('prop3')).to.eq('magenta')
})
```

🔹 Ou usando uma **expressão regular**:

```js
cy.clearLocalStorage(/prop1|2/)
cy.getAllLocalStorage().should(() => {
  expect(localStorage.getItem('prop1')).to.be.null
  expect(localStorage.getItem('prop2')).to.be.null
  expect(localStorage.getItem('prop3')).to.eq('magenta')
})
```

---

## **cy.getAllLocalStorage()**

Para obter **todos os dados do localStorage** de todas as origens:

```js
cy.get('.ls-btn').click()

cy.getAllLocalStorage().should((storageMap) => {
  expect(storageMap).to.deep.equal({
    'https://example.cypress.io': {
      prop1: 'red',
      prop2: 'blue',
      prop3: 'magenta',
    },
  })
})
```

---

## **cy.clearAllLocalStorage()**

Para limpar o **localStorage de todas as origens**:

```js
cy.get('.ls-btn').click()

cy.clearAllLocalStorage()
cy.getAllLocalStorage().should(() => {
  expect(localStorage.getItem('prop1')).to.be.null
  expect(localStorage.getItem('prop2')).to.be.null
  expect(localStorage.getItem('prop3')).to.be.null
})
```

---

## **cy.getAllSessionStorage()**

Para obter **todos os dados do sessionStorage** de todas as origens:

```js
cy.get('.ls-btn').click()

cy.getAllSessionStorage().should((storageMap) => {
  expect(storageMap).to.deep.equal({
    'https://example.cypress.io': {
      prop4: 'cyan',
      prop5: 'yellow',
      prop6: 'black',
    },
  })
})
```

---

## **cy.clearAllSessionStorage()**

Para limpar o **sessionStorage de todas as origens**:

```js
cy.get('.ls-btn').click()

cy.clearAllSessionStorage()
cy.getAllSessionStorage().should(() => {
  expect(sessionStorage.getItem('prop4')).to.be.null
  expect(sessionStorage.getItem('prop5')).to.be.null
  expect(sessionStorage.getItem('prop6')).to.be.null
})
```

---

✅ **Resumo da Seção**

* **`cy.clearLocalStorage()`** → limpa localStorage da origem atual (pode ser chave específica ou regex).
* **`cy.getAllLocalStorage()`** → retorna todos os localStorages de todas as origens.
* **`cy.clearAllLocalStorage()`** → limpa todos os localStorages de todas as origens.
* **`cy.getAllSessionStorage()`** → retorna todos os sessionStorages de todas as origens.
* **`cy.clearAllSessionStorage()`** → limpa todos os sessionStorages de todas as origens.

---