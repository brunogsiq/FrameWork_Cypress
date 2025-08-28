# **Cookies**

Exemplos de como gerenciar **cookies do navegador** no Cypress.
Para referência completa, acesse [docs.cypress.io](https://docs.cypress.io).

---

## **cy.getCookie()**

Obtém um cookie específico do navegador.

```js
cy.get('#getCookie .set-a-cookie').click()

// cy.getCookie() retorna um objeto de cookie
cy.getCookie('token').should('have.property', 'value', '123ABC')
```

---

## **cy.getCookies()**

Obtém todos os cookies do **domínio atual**.

```js
cy.getCookies().should('be.empty')

cy.get('#getCookies .set-a-cookie').click()

// cy.getCookies() retorna um array de cookies
cy.getCookies().should('have.length', 1).should((cookies) => {
  expect(cookies[0]).to.have.property('name', 'token')
  expect(cookies[0]).to.have.property('value', '123ABC')
  expect(cookies[0]).to.have.property('httpOnly', false)
  expect(cookies[0]).to.have.property('secure', false)
  expect(cookies[0]).to.have.property('domain')
  expect(cookies[0]).to.have.property('path')
})
```

---

## **cy.getAllCookies()**

Obtém todos os cookies do navegador, de **todos os domínios**.

```js
cy.getAllCookies().should('be.empty')

cy.setCookie('key', 'value')
cy.setCookie('key', 'value', { domain: 'example.com' })

// cy.getAllCookies() retorna um array de cookies
cy.getAllCookies().should('have.length', 2).should((cookies) => {
  expect(cookies[0]).to.have.property('name', 'key')
  expect(cookies[0]).to.have.property('value', 'value')
  expect(cookies[0]).to.have.property('httpOnly', false)
  expect(cookies[0]).to.have.property('secure', false)
  expect(cookies[0]).to.have.property('domain')
  expect(cookies[0]).to.have.property('path')

  expect(cookies[1]).to.have.property('name', 'key')
  expect(cookies[1]).to.have.property('value', 'value')
  expect(cookies[1]).to.have.property('httpOnly', false)
  expect(cookies[1]).to.have.property('secure', false)
  expect(cookies[1]).to.have.property('domain', 'example.com')
  expect(cookies[1]).to.have.property('path')
})
```

---

## **cy.setCookie()**

Define um cookie no navegador.

```js
cy.getCookies().should('be.empty')

cy.setCookie('foo', 'bar')

// cy.getCookie() retorna um objeto de cookie
cy.getCookie('foo').should('have.property', 'value', 'bar')
```

---

## **cy.clearCookie()**

Remove um cookie específico.

```js
cy.getCookie('token').should('be.null')

cy.get('#clearCookie .set-a-cookie').click()

cy.getCookie('token').should('have.property', 'value', '123ABC')

// cy.clearCookie() retorna null
cy.clearCookie('token')

cy.getCookie('token').should('be.null')
```

---

## **cy.clearCookies()**

Remove todos os cookies do **domínio atual**.

```js
cy.getCookies().should('be.empty')

cy.get('#clearCookies .set-a-cookie').click()

cy.getCookies().should('have.length', 1)

// cy.clearCookies() retorna null
cy.clearCookies()

cy.getCookies().should('be.empty')
```

---

## **cy.clearAllCookies()**

Remove todos os cookies do navegador, de **todos os domínios**.

```js
cy.getAllCookies().should('be.empty')

cy.setCookie('key', 'value')
cy.setCookie('key', 'value', { domain: 'example.com' })

cy.getAllCookies().should('have.length', 1)

// cy.clearAllCookies() retorna null
cy.clearAllCookies()

cy.getAllCookies().should('be.empty')
```

---

✅ **Resumo da Seção**

* **`cy.getCookie()`** → obtém um cookie específico.
* **`cy.getCookies()`** → obtém cookies do domínio atual.
* **`cy.getAllCookies()`** → obtém cookies de todos os domínios.
* **`cy.setCookie()`** → cria/atualiza um cookie.
* **`cy.clearCookie()`** → remove um cookie específico.
* **`cy.clearCookies()`** → remove cookies do domínio atual.
* **`cy.clearAllCookies()`** → remove cookies de todos os domínios.

---