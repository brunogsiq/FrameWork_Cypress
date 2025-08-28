# **Spies, Stubs & Clocks**

Exemplos de como usar **stubs**, **spies** e **controlar o tempo do relógio**.
Para referência completa, acesse [docs.cypress.io](https://docs.cypress.io).

---

## **cy.spy()**

Para envolver um método em um *spy*, use o comando **`cy.spy()`**.

```js
const obj = {
  foo () {},
}

const spy = cy.spy(obj, 'foo').as('anyArgs')

obj.foo()

expect(spy).to.be.called
```

O `cy.spy()` tenta novamente até que as asserções que o seguem passem.

```js
const obj = {
  foo () {},
}

cy.spy(obj, 'foo').as('foo')

setTimeout(() => {
  obj.foo()
}, 500)

setTimeout(() => {
  obj.foo()
}, 2500)

cy.get('@foo').should('have.been.calledTwice')
```

---

## **cy.stub()**

Para criar um *stub* e/ou substituir uma função por ele, use o comando **`cy.stub()`**.

```js
let obj = {
  foo () {},
}

const stub = cy.stub(obj, 'foo').as('foo')

obj.foo('foo', 'bar')

expect(stub).to.be.called
```

---

## **cy.clock()**

Para controlar o tempo no navegador, use o comando **`cy.clock()`**.

```js
// cria a data em UTC para ser sempre igual
// independentemente do fuso horário local
const now = new Date(Date.UTC(2017, 2, 14)).getTime()

cy.clock(now)
cy.visit('https://example.cypress.io/commands/spies-stubs-clocks')
cy.get('#clock-div').click()
cy.get('#clock-div')
  .should('have.text', '1489449600')
```

---

## **cy.tick()**

Para avançar o tempo no navegador, use o comando **`cy.tick()`**.

```js
// cria a data em UTC para ser sempre igual
// independentemente do fuso horário local
const now = new Date(Date.UTC(2017, 2, 14)).getTime()

cy.clock(now)
cy.visit('https://example.cypress.io/commands/spies-stubs-clocks')
cy.get('#tick-div').click()
cy.get('#tick-div')
  .should('have.text', '1489449600')

cy.tick(10000) // passaram-se 10 segundos
cy.get('#tick-div').click()
cy.get('#tick-div')
  .should('have.text', '1489449610')
```

---

## **cy.stub() combinando com argumentos**

Os *stubs* podem corresponder dependendo dos argumentos.
Veja todos os *matchers* possíveis em [Sinonjs.org](https://sinonjs.org).

```js
const greeter = {
  /**
    * Cumprimenta uma pessoa
    * @param {string} name
  */
  greet (name) {
    return `Hello, ${name}!`
  },
}

cy.stub(greeter, 'greet')
  .callThrough() // chamadas não correspondentes chamam o método real
  .withArgs(Cypress.sinon.match.string).returns('Hi')
  .withArgs(Cypress.sinon.match.number).throws(new Error('Invalid name'))

expect(greeter.greet('World')).to.equal('Hi')
expect(() => greeter.greet(42)).to.throw('Invalid name')
expect(greeter.greet).to.have.been.calledTwice

// chamadas não correspondentes usam o método original
expect(greeter.greet()).to.equal('Hello, undefined!')
```

---

## **Matchers para argumentos de chamadas**

Exemplo de como usar *Sinon matchers* (veja mais em [Sinonjs.org](https://sinonjs.org)):

```js
const calculator = {
  /**
    * retorna a soma de dois números
    * @param a {number}
    * @param b {number}
  */
  add (a, b) {
    return a + b
  },
}

const spy = cy.spy(calculator, 'add').as('add')

expect(calculator.add(2, 3)).to.equal(5)

// verificar valores exatos
expect(spy).to.be.calledWith(2, 3)

// verificar que foi chamado com dois números
expect(spy).to.be.calledWith(Cypress.sinon.match.number, Cypress.sinon.match.number)

// verificar valores específicos
expect(spy).to.be.calledWith(Cypress.sinon.match(2), Cypress.sinon.match(3))

// aceitar qualquer valor
expect(spy).to.be.calledWith(Cypress.sinon.match.any, 3)

// aceitar valores de uma lista
expect(spy).to.be.calledWith(Cypress.sinon.match.in([1, 2, 3]), 3)

// usar função customizada como matcher
const isEven = (x) => x % 2 === 0

expect(spy).to.be.calledWith(Cypress.sinon.match(isEven, 'isEven'), 3)

// combinar matchers com and/or
const isGreaterThan = (limit) => (x) => x > limit
const isLessThan = (limit) => (x) => x < limit

expect(spy).to.be.calledWith(
  Cypress.sinon.match.number,
  Cypress.sinon.match(isGreaterThan(2), '> 2').and(Cypress.sinon.match(isLessThan(4), '< 4'))
)

expect(spy).to.be.calledWith(
  Cypress.sinon.match.number,
  Cypress.sinon.match(isGreaterThan(200), '> 200').or(Cypress.sinon.match(3))
)

// matchers também podem ser usados com assertions BDD
cy.get('@add').should('have.been.calledWith',
  Cypress.sinon.match.number, Cypress.sinon.match(3)
)

// criar alias para matchers
const { match: M } = Cypress.sinon

cy.get('@add').should('have.been.calledWith', M.number, M(3))
```

---

✅ **Resumo da Seção**

* **`cy.spy()`** → espiona chamadas de funções sem alterá-las.
* **`cy.stub()`** → substitui funções reais por simuladas (retornos controlados).
* **`cy.clock()`** → congela o tempo no navegador.
* **`cy.tick()`** → avança o tempo de forma simulada.
* **Sinon matchers** → permitem validar os argumentos usados nas chamadas.

---