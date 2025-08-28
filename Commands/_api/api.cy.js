# **Cypress API**

Exemplos de uso da **API do Cypress**.
Para referência completa, acesse [docs.cypress.io](https://docs.cypress.io).

---

## **Cypress.Commands.add()**

Para adicionar um comando customizado, use **`Cypress.Commands.add()`**.

```js
Cypress.Commands.add('console', {
  prevSubject: true,
}, (subject, method) => {
  method = method || 'log'

  // imprime o subject no console
  console[method]('The subject is', subject)
  return subject
})
```

---

## **Cypress.Cookies.debug()**

Para habilitar ou desabilitar o debug de cookies, use **`Cypress.Cookies.debug()`**.

```js
// O Cypress agora exibirá no console quando
// cookies forem definidos ou removidos
Cypress.Cookies.debug(true)

cy.setCookie('fakeCookie', '123ABC')
cy.clearCookie('fakeCookie')
cy.setCookie('fakeCookie', '123ABC')
cy.clearCookie('fakeCookie')
cy.setCookie('fakeCookie', '123ABC')
```

---

## **Cypress.arch**

Para obter o nome da arquitetura da CPU do sistema operacional, use **`Cypress.arch`**.

```js
expect(Cypress.arch).to.exist
```

---

## **Cypress.config()**

Para obter ou definir opções de configuração, use **`Cypress.config()`**.

```js
var myConfig = Cypress.config()

expect(myConfig).to.have.property('animationDistanceThreshold', 5)
expect(myConfig).to.have.property('baseUrl', null)
expect(myConfig).to.have.property('defaultCommandTimeout', 4000)
expect(myConfig).to.have.property('requestTimeout', 5000)
expect(myConfig).to.have.property('responseTimeout', 30000)
expect(myConfig).to.have.property('viewportHeight', 660)
expect(myConfig).to.have.property('viewportWidth', 1000)
expect(myConfig).to.have.property('pageLoadTimeout', 60000)
expect(myConfig).to.have.property('waitForAnimations', true)

expect(Cypress.config('pageLoadTimeout')).to.eq(60000)

Cypress.config('pageLoadTimeout', 20000)

expect(Cypress.config('pageLoadTimeout')).to.eq(20000)

Cypress.config('pageLoadTimeout', 60000)
```

---

## **Cypress.dom.isHidden()**

Para verificar se um elemento do DOM está oculto, use **`Cypress.dom.isHidden()`**.

```js
let hiddenP = Cypress.$('.dom-p p.hidden').get(0)
let visibleP = Cypress.$('.dom-p p.visible').get(0)

// nosso primeiro parágrafo tem a classe 'hidden'
expect(Cypress.dom.isHidden(hiddenP)).to.be.true
expect(Cypress.dom.isHidden(visibleP)).to.be.false
```

---

## **Cypress.env()**

Para obter ou definir variáveis de ambiente, use **`Cypress.env()`**.

```js
// definir múltiplas variáveis
Cypress.env({
  host: 'veronica.dev.local',
  api_server: 'http://localhost:8888/v1/',
})

// obter variável
expect(Cypress.env('host')).to.eq('veronica.dev.local')

// definir variável
Cypress.env('api_server', 'http://localhost:8888/v2/')
expect(Cypress.env('api_server')).to.eq('http://localhost:8888/v2/')

// obter todas as variáveis
expect(Cypress.env()).to.have.property('host', 'veronica.dev.local')
expect(Cypress.env()).to.have.property('api_server', 'http://localhost:8888/v2/')
```

---

## **Cypress.log()**

Controla o que é exibido no Command Log.

```js
Cypress.log()
```

---

## **Cypress.platform**

Para obter o nome do sistema operacional, use **`Cypress.platform`**.

```js
expect(Cypress.platform).to.exist
```

---

## **Cypress.version**

Para obter a versão do Cypress em execução, use **`Cypress.version`**.

```js
expect(Cypress.version).to.exist
```

---

✅ **Resumo da Seção**

* **`Cypress.Commands.add()`** → criar comandos customizados.
* **`Cypress.Cookies.debug()`** → ativar/desativar debug de cookies.
* **`Cypress.arch`** → retorna arquitetura da CPU.
* **`Cypress.config()`** → obter/definir configurações do Cypress.
* **`Cypress.dom.isHidden()`** → verificar se um elemento está oculto.
* **`Cypress.env()`** → manipular variáveis de ambiente.
* **`Cypress.log()`** → controlar logs exibidos.
* **`Cypress.platform`** → retorna sistema operacional.
* **`Cypress.version`** → retorna versão do Cypress.

---