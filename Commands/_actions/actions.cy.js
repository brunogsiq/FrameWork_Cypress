# 📘 Cypress – Actions (Ações em elementos do DOM)

### 🔹 `.type()`

Para digitar em um elemento DOM, use o comando `.type()`.

```js
cy.get('.action-email').type('fake@email.com')
cy.get('.action-email').should('have.value', 'fake@email.com')

// .type() com sequências de caracteres especiais
cy.get('.action-email').type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
cy.get('.action-email').type('{del}{selectall}{backspace}')

// .type() com modificadores de tecla
cy.get('.action-email').type('{alt}{option}') // equivalentes
cy.get('.action-email').type('{ctrl}{control}') // equivalentes
cy.get('.action-email').type('{meta}{command}{cmd}') // equivalentes
cy.get('.action-email').type('{shift}')

// Delay de 0.1s entre cada tecla
cy.get('.action-email').type('slow.typing@email.com', { delay: 100 })
cy.get('.action-email').should('have.value', 'slow.typing@email.com')

// Forçando digitação mesmo se desabilitado ou invisível
cy.get('.action-disabled').type('disabled error checking', { force: true })
cy.get('.action-disabled').should('have.value', 'disabled error checking')
```

---

### 🔹 `.focus()`

Para dar foco em um elemento DOM.

```js
cy.get('.action-focus').focus()
cy.get('.action-focus').should('have.class', 'focus')
  .prev().should('have.attr', 'style', 'color: orange;')
```

---

### 🔹 `.blur()`

Para remover o foco (blur) de um elemento DOM.

```js
cy.get('.action-blur').type('About to blur')
cy.get('.action-blur').blur()
cy.get('.action-blur').should('have.class', 'error')
  .prev().should('have.attr', 'style', 'color: red;')
```

---

### 🔹 `.clear()`

Para limpar um campo de texto.

```js
cy.get('.action-clear').type('Clear this text')
cy.get('.action-clear').should('have.value', 'Clear this text')
cy.get('.action-clear').clear()
cy.get('.action-clear').should('have.value', '')
```

---

### 🔹 `.submit()`

Para submeter um formulário.

```js
cy.get('.action-form')
  .find('[type="text"]').type('HALFOFF')

cy.get('.action-form').submit()
cy.get('.action-form').next().should('contain', 'Your form has been submitted!')
```

---

### 🔹 `.click()`

Para clicar em um elemento DOM.

```js
cy.get('.action-btn').click()

// Clicar em posições específicas
cy.get('#action-canvas').click('topLeft')
cy.get('#action-canvas').click('bottomRight')

// Clicar em coordenadas (x, y)
cy.get('#action-canvas').click(80, 75)

// Clicar em múltiplos elementos
cy.get('.action-labels>.label').click({ multiple: true })

// Forçar clique mesmo invisível
cy.get('.action-opacity>.btn').click({ force: true })
```

---

### 🔹 `.dblclick()`

Para dar **duplo clique** em um elemento.

```js
cy.get('.action-div').dblclick()
cy.get('.action-div').should('not.be.visible')
cy.get('.action-input-hidden').should('be.visible')
```

---

### 🔹 `.rightclick()`

Para clicar com o **botão direito**.

```js
cy.get('.rightclick-action-div').rightclick()
cy.get('.rightclick-action-div').should('not.be.visible')
cy.get('.rightclick-action-input-hidden').should('be.visible')
```

---

### 🔹 `.check()`

Para marcar checkboxes ou radios.

```js
cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').check()
cy.get('.action-radios [type="radio"]').check('radio1')

// Array de valores
cy.get('.action-multiple-checkboxes [type="checkbox"]').check(['checkbox1', 'checkbox2'])

// Forçando seleção
cy.get('.action-radios [type="radio"]').check('radio3', { force: true })
```

---

### 🔹 `.uncheck()`

Para desmarcar checkboxes.

```js
cy.get('.action-check [type="checkbox"]').uncheck()
cy.get('.action-check [type="checkbox"]').should('not.be.checked')

// Com valor específico
cy.get('.action-check [type="checkbox"]').uncheck('checkbox1')

// Array de valores
cy.get('.action-check [type="checkbox"]').uncheck(['checkbox1', 'checkbox3'])
```

---

### 🔹 `.select()`

Para selecionar opções de um `<select>`.

```js
// Seleção por texto
cy.get('.action-select').select('apples').should('have.value', 'fr-apples')

// Seleção múltipla
cy.get('.action-select-multiple')
  .select(['apples', 'oranges', 'bananas'])
  .invoke('val')
  .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])

// Seleção por value
cy.get('.action-select').select('fr-bananas')
```

---

### 🔹 `.scrollIntoView()`

Para rolar até que um elemento fique visível.

```js
cy.get('#scroll-horizontal button').scrollIntoView().should('be.visible')
```

---

### 🔹 `.scrollTo()`

Para rolar janela ou elemento até uma posição.

```js
// Scroll para o final da página
cy.scrollTo('bottom')

// Scroll em elemento
cy.get('#scrollable-vertical').scrollTo(250, 250)
cy.get('#scrollable-both').scrollTo('75%', '25%')
```

---

### 🔹 `.trigger()`

Para disparar eventos manualmente.

```js
cy.get('.trigger-input-range')
  .invoke('val', 25)
  .trigger('change')

cy.get('.trigger-input-range')
  .get('input[type=range]').siblings('p')
  .should('have.text', '25')
```

---