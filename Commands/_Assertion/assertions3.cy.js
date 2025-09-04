# **Assertions**

Exemplos de como verificar o **estado** ou o **comportamento** da sua aplicação no Cypress.
Para referência completa dos comandos, acesse [docs.cypress.io](https://docs.cypress.io).

---

## 🔹 **Implicit Assertions (Assertivas Implícitas)**

### **.should()**

Para fazer uma asserção sobre o elemento atual, use o comando `.should()`.

```js
cy.get('.assertion-table')
  .find('tbody tr:last').should('have.class', 'success')
  .find('td')
  .first()
  // verificando o texto do elemento de várias formas
  .should('have.text', 'Column content')
  .should('contain', 'Column content')
  .should('have.html', 'Column content')
  // chai-jquery usa "is()" para verificar se o elemento bate com o seletor
  .should('match', 'td')
  // para comparar o conteúdo do texto com regex,
  // é necessário invocar o método jQuery .text()
  // e então verificar usando expressão regular
  .invoke('text')
  .should('match', /column content/i)
```

➡️ Uma forma melhor de verificar o texto de um elemento com expressão regular é usar `cy.contains`:

```js
cy.get('.assertion-table')
  .find('tbody tr:last')
  .contains('td', /column content/i) // encontra o elemento com regex
  .should('be.visible')
```

---

### **.and()**

Para encadear múltiplas assertivas, use `.and()`:

```js
cy.get('.assertions-link')
  .should('have.class', 'active')
  .and('have.attr', 'href')
  .and('include', 'cypress.io')
```

---

## 🔹 **Explicit Assertions (Assertivas Explícitas)**

### **expect**

Usado para fazer verificações no estilo **BDD**.

```js
expect(true).to.be.true

const o = { foo: 'bar' }
expect(o).to.equal(o)
expect(o).to.deep.equal({ foo: 'bar' })

// usando expressão regular
expect('FooBar').to.match(/bar$/i)
```

---

### **assert**

Usado para verificações no estilo **TDD**.

```js
const person = { name: 'Joe', age: 20 }
assert.isObject(person, 'value is object')
```

---

## 🔹 **Should com Função de Callback**

Se precisar de verificações mais complexas, você pode passar uma **função** dentro do `.should(cb)`.
Essa função será **reatentada automaticamente até passar** ou o teste expirar.

```js
cy.get('.assertions-p').find('p')
  .should(($p) => {
    // retorna uma lista com os textos dos <p>
    let texts = $p.map((i, el) => Cypress.$(el).text())
    texts = texts.get() // converte para array simples

    // array deve ter tamanho 3
    expect(texts).to.have.length(3)

    // cada texto esperado
    expect(texts, 'has expected text in each paragraph').to.deep.eq([
      'Some text from first p',
      'More text from second p',
      'And even more text from third p',
    ])
  })
```

---

### Exemplo verificando **classe e texto**:

```js
cy.get('.docs-header').find('div')
  // .should(cb) será reexecutado até passar
  .should(($div) => {
    expect($div).to.have.length(1)

    const className = $div[0].className
    expect(className).to.match(/heading-/)
  })
  // .then(cb) não é reexecutado
  .then(($div) => {
    expect($div).to.have.text('Introduction')
  })
```

---

### Criando seus próprios erros no callback:

```js
cy.get('.docs-header').find('div')
  .should(($div) => {
    if ($div.length !== 1) {
      throw new Error('Did not find 1 element')
    }
    const className = $div[0].className
    if (!className.match(/heading-/)) {
      throw new Error(`Could not find class "heading-" in ${className}`)
    }
  })
```

---

### Comparando texto entre dois elementos:

```js
let text

const normalizeText = (s) => s.replace(/\s/g, '').toLowerCase()

cy.get('.two-elements')
  .find('.first')
  .then(($first) => {
    text = normalizeText($first.text()) // salva o texto do primeiro
  })

cy.get('.two-elements')
  .find('.second')
  .should(($div) => {
    const secondText = normalizeText($div.text())
    expect(secondText, 'second text').to.equal(text)
  })
```

---

### Exemplo com número aleatório (reexecuta até estar no intervalo certo):

```js
cy.get('#random-number')
  .should(($div) => {
    const n = parseFloat($div.text())
    expect(n).to.be.gte(1).and.be.lte(10)
  })
```

---

✅ **Resumo da Seção**

* Use **`.should()`** e **`.and()`** para assertivas implícitas.
* Use **`expect`** (BDD) e **`assert`** (TDD) para assertivas explícitas.
* O **`.should(cb)`** permite criar verificações personalizadas e o Cypress reexecuta automaticamente até passar.

---