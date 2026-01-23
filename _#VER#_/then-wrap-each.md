# 🧩 1️⃣ `.then()` — trabalha com valores sincronamente

### 📖 O que é:

O `.then()` serve para **pegar o valor real** de algo que o Cypress retornou (um DOM, JSON, texto, etc.),
e então **usar lógica JavaScript normal** dentro dele.

O Cypress executa tudo de forma **assíncrona**, e `.then()` é a forma de **esperar o comando terminar** antes de manipular o resultado.

---

### 📘 Exemplo simples

```js
cy.get('.preco').then(($el) => {
  const preco = $el.text()
  cy.log(`Preço encontrado: ${preco}`)
  expect(preco).to.include('R$')
})
```

### 🧠 Explicando:

* O Cypress **pega o elemento** `.preco` da tela.
* Quando o comando terminar, ele **passa o resultado** (`$el`) para dentro do `.then()`.
* Lá dentro, você já pode usar **JavaScript puro** — `.text()`, `.split()`, `if`, etc.

---

### 🧩 Quando usar `.then()`

✅ Quando você precisa:

* Ler valores (`text`, `attr`, `val`, etc.)
* Fazer cálculos ou decisões com o retorno
* Integrar lógica JavaScript no fluxo Cypress

🚫 Evite usar `.then()` apenas para “encadear comandos Cypress” — ele **quebra a cadeia automática de retries** (por isso, se possível, prefira `should()` para assert simples).

---

# 🧩 2️⃣ `.wrap()` — transforma algo comum em um **objeto Cypress**

### 📖 O que é:

O `.wrap()` faz o inverso do `.then()`:

> Ele pega **um valor JavaScript comum** (objeto, array, string, jQuery)
> e o “envolve” para que você possa **usar comandos Cypress** sobre ele.

---

### 📘 Exemplo simples

```js
const frutas = ['maçã', 'uva', 'manga']

cy.wrap(frutas).should('include', 'uva')
```

Aqui o Cypress não conseguiria usar `.should()` diretamente sobre um array JS,
então o `.wrap()` “transforma” o array num **objeto Cypress**, permitindo usar os comandos encadeados (`should`, `each`, etc.).

---

### 🧠 Exemplo prático no DOM:

```js
cy.get('.produto').then(($el) => {
  // $el é jQuery normal
  cy.wrap($el).find('.preco').should('contain', 'R$')
})
```

Sem o `wrap`, o Cypress não reconheceria o `$el` dentro do contexto de comandos.
Com o `wrap`, você reativa a “mágica” do Cypress (esperas automáticas, retry, etc.).

---

### 🧩 Quando usar `.wrap()`

✅ Quando você:

* Está dentro de um `.then()` e quer continuar com comandos Cypress
* Quer transformar valores JS em objetos Cypress
* Precisa garantir retries automáticos após lógica JavaScript

---

# 🧩 3️⃣ `.each()` — percorre listas (arrays ou elementos DOM)

### 📖 O que é:

`.each()` serve para **iterar (loop)** sobre vários elementos **encontrados por um `cy.get()`**
ou sobre um **array que você envolveu com `cy.wrap()`**.

---

### 📘 Exemplo simples no DOM:

```js
cy.get('.produto').each(($el, index) => {
  cy.log(`Produto ${index + 1}: ${$el.text()}`)
})
```

> Para cada `.produto` encontrado, o Cypress executa o callback.

---

### 📘 Exemplo com array comum:

```js
const frutas = ['maçã', 'uva', 'manga']

cy.wrap(frutas).each((fruta) => {
  cy.log(`Testando fruta: ${fruta}`)
})
```

---

### 🧠 Regras úteis

* Dentro do `.each()`, `$el` é **jQuery**, então use `$el.text()`, `$el.attr()`, etc.
* Se quiser continuar usando Cypress (`cy.get`, `cy.wrap`, etc.), envolva o item:

  ```js
  cy.wrap($el).click()
  ```

---

# 🧱 Comparativo rápido

| Método        | Função                            | Quando usar                                       | Retorno                           |
| ------------- | --------------------------------- | ------------------------------------------------- | --------------------------------- |
| **`.then()`** | Pegar o valor real do comando     | Quando precisa manipular resultado ou lógica JS   | Valor real (string, objeto, etc.) |
| **`.wrap()`** | Transformar algo comum em Cypress | Quando quer continuar encadeando comandos Cypress | Objeto Cypress                    |
| **`.each()`** | Loop sobre itens                  | Quando quer testar ou iterar múltiplos elementos  | Um Cypress chain por item         |

---

# 📦 Exemplo completo unindo os três

```js
const frutas = ['maçã', 'uva', 'manga']

cy.wrap(frutas).each((fruta) => {
  cy.log(`Verificando: ${fruta}`)

  cy.get('.lista-frutas').then(($lista) => {
    // $lista é jQuery → usamos wrap para continuar com Cypress
    cy.wrap($lista).contains(fruta).should('exist')
  })
})
```

✅

* `.wrap(frutas)` → transforma array em objeto Cypress
* `.each()` → percorre cada fruta
* `.then()` → lê o DOM
* `.wrap()` dentro do `.then()` → volta para o contexto Cypress

---

# 🧠 Dica final

👉 Pense assim:

* **`.then()`** → “me dá o valor real pra eu trabalhar manualmente”
* **`.wrap()`** → “volta o valor pro mundo Cypress”
* **`.each()`** → “repete o processo pra cada item”