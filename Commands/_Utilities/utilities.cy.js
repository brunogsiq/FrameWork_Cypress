# **Utilities (Utilitários)**

Exemplos de uso de métodos de outras bibliotecas comumente utilizadas no Cypress.
Para referência completa, acesse [docs.cypress.io](https://docs.cypress.io).

---

## **Cypress.\_**

Para chamar um método do **Lodash**, use **`Cypress._.method()`**.

```js
cy.request('https://jsonplaceholder.cypress.io/users')
.then((response) => {
  let ids = Cypress._.chain(response.body).map('id').take(3).value()

  expect(ids).to.deep.eq([1, 2, 3])
})
```

---

## **Cypress.\$**

Para chamar um método do **jQuery**, use **`Cypress.$`**.

```js
let $li = Cypress.$('.utility-jquery li:first')

cy.wrap($li).should('not.have.class', 'active')
cy.wrap($li).click()
cy.wrap($li).should('have.class', 'active')
```

Exemplo de lista:

* 5 Watches
* 14 Sweaters
* 22 Scarves

---

## **Cypress.Blob**

Para trabalhar com **blobs**, converter strings e outras funções utilitárias, use **`Cypress.Blob`**.

```js
cy.get('.utility-blob').then(($div) => {
  // converte imagem em dataURL string
  return Cypress.Blob.imgSrcToDataURL('https://example.cypress.io/assets/img/javascript-logo.png', undefined, 'anonymous')
  .then((dataUrl) => {
    // cria um elemento <img> e define o src para o dataUrl
    let img = Cypress.$('<img>', { src: dataUrl })

    // adiciona a imagem ao DOM
    $div.append(img)

    cy.get('.utility-blob img').click()
    cy.get('.utility-blob img').should('have.attr', 'src', dataUrl)
  })
})
```

---

## **Cypress.minimatch**

Para testar *glob patterns* em strings, use **`Cypress.minimatch`**.

```js
Cypress.minimatch('/users/1/comments', '/users/*/comments', {
  matchBase: true,
})
```

---

## **Cypress.Promise**

Para instanciar uma nova **Bluebird Promise**, use **`Cypress.Promise`**.

```js
let waited = false

function waitOneSecond () {
  // retorna uma promise que resolve após 1 segundo
  return new Cypress.Promise((resolve, reject) => {
    setTimeout(() => {
      waited = true
      resolve('foo')
    }, 1000)
  })
}

cy.then(() =>
  // retorna a promise para o cy.then() que espera até resolver
  waitOneSecond().then((str) => {
    expect(str).to.eq('foo')
    expect(waited).to.be.true
  })
)
```

---

✅ **Resumo da Seção**

* **`Cypress._`** → usa métodos do Lodash (ex: map, chain, take).
* **`Cypress.$`** → usa jQuery diretamente.
* **`Cypress.Blob`** → manipula blobs e conversão de imagens/base64.
* **`Cypress.minimatch`** → testa padrões globais em strings.
* **`Cypress.Promise`** → cria e manipula Promises (Bluebird).

---