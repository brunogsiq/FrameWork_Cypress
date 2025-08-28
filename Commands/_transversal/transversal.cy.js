# 📘 Cypress – Traversal (Percorrendo o DOM)

### 🔹 `.children()`

Para obter os filhos de elementos do DOM, use o comando `.children()`.

```js
cy.get('.traversal-breadcrumb')
  .children('.active')
  .should('contain', 'Data')
```

---

### 🔹 `.closest()`

Para obter o **ancestral mais próximo** do elemento no DOM, use `.closest()`.

```js
cy.get('.traversal-badge')
  .closest('ul')
  .should('have.class', 'list-group')
```

---

### 🔹 `.eq()`

Para pegar o elemento em um **índice específico**, use `.eq()`.

```js
cy.get('.traversal-list>li')
  .eq(1).should('contain', 'siamese')
```

---

### 🔹 `.filter()`

Para filtrar elementos que correspondem a um seletor específico, use `.filter()`.

```js
cy.get('.traversal-nav>li')
  .filter('.active').should('contain', 'About')
```

---

### 🔹 `.find()`

Para obter **descendentes** de um seletor, use `.find()`.

```js
cy.get('.traversal-pagination')
  .find('li')
  .find('a')
  .should('have.length', 7)
```

---

### 🔹 `.first()`

Para pegar o **primeiro elemento** dentro de um conjunto, use `.first()`.

```js
cy.get('.traversal-table td')
  .first().should('contain', '1')
```

---

### 🔹 `.last()`

Para pegar o **último elemento** dentro de um conjunto, use `.last()`.

```js
cy.get('.traversal-buttons .btn')
  .last().should('contain', 'Submit')
```

---

### 🔹 `.next()`

Para pegar o **próximo irmão** no DOM, use `.next()`.

```js
cy.get('.traversal-ul')
  .contains('apples')
  .next()
  .should('contain', 'oranges')
```

---

### 🔹 `.nextAll()`

Para pegar **todos os próximos irmãos** de um elemento, use `.nextAll()`.

```js
cy.get('.traversal-next-all')
  .contains('oranges')
  .nextAll()
  .should('have.length', 3)
```

---

### 🔹 `.nextUntil()`

Para pegar todos os próximos irmãos **até outro elemento**, use `.nextUntil()`.

```js
cy.get('#veggies')
  .nextUntil('#nuts')
  .should('have.length', 3)
```

---

### 🔹 `.not()`

Para **remover elementos** de um conjunto, use `.not()`.

```js
cy.get('.traversal-disabled .btn')
  .not('[disabled]')
  .should('not.contain', 'Disabled')
```

---

### 🔹 `.parent()`

Para obter o **elemento pai** direto, use `.parent()`.

```js
cy.get('.traversal-mark')
  .parent()
  .should('contain', 'Morbi leo risus')
```

---

### 🔹 `.parents()`

Para pegar **todos os pais** de um elemento até o `html`, use `.parents()`.

```js
cy.get('.traversal-cite')
  .parents()
  .should('match', 'blockquote')
```

---

### 🔹 `.parentsUntil()`

Para pegar todos os pais de um elemento **até outro elemento**, use `.parentsUntil()`.

```js
cy.get('.clothes-nav')
  .find('.active')
  .parentsUntil('.clothes-nav')
  .should('have.length', 2)
```

---

### 🔹 `.prev()`

Para pegar o **irmão anterior** de um elemento, use `.prev()`.

```js
cy.get('.birds').find('.active')
  .prev()
  .should('contain', 'Lorikeets')
```

---

### 🔹 `.prevAll()`

Para pegar **todos os irmãos anteriores**, use `.prevAll()`.

```js
cy.get('.fruits-list').find('.third')
  .prevAll()
  .should('have.length', 2)
```

---

### 🔹 `.prevUntil()`

Para pegar todos os irmãos anteriores **até outro elemento**, use `.prevUntil()`.

```js
cy.get('.foods-list').find('#nuts')
  .prevUntil('#veggies')
  .should('have.length', 3)
```

---

### 🔹 `.siblings()`

Para pegar **todos os irmãos** de um elemento, use `.siblings()`.

```js
cy.get('.traversal-pills .active')
  .siblings()
  .should('have.length', 2)
```

---