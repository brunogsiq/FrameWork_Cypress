```markdown
# Identificando Elementos por Texto no Cypress

Na “pitada de Cypress” de hoje, vamos aprender como identificar elementos por seu texto. Às vezes, não conseguimos encontrar um seletor CSS único para um elemento, mas podemos identificá-lo pelo texto que o caracteriza.

## Exemplo 1: cy.contains()

No primeiro exemplo, identificamos um elemento por seu texto, independentemente do tipo do elemento. Essa abordagem é útil quando sabemos que apenas um elemento terá o texto desejado.

```javascript
cy.contains('Um texto qualquer')
```

Também podemos verificar se o elemento está visível:

```javascript
cy.contains('Um texto qualquer').should('be.visible')
```

## Exemplo 2: cy.get('a:contains(texto)')

No segundo exemplo, identificamos um elemento do tipo anchor (<a>) que contenha o texto desejado e verificamos se ele está visível.

```html
<a href="https://udemy.com/user/walmyr/">Cursos</a>
```

```javascript
cy.get('a:contains(Cursos)').should('be.visible')
```

Dessa forma, procuramos um elemento anchor com o texto "Cursos" e verificamos se está visível.

## Exemplo 3: cy.contains() com seletor

No terceiro exemplo, utilizamos novamente o cy.contains() para identificar um elemento e verificar se ele está visível.

```javascript
cy.contains('a', 'Cursos').should('be.visible')
```

Aqui, especificamos um seletor CSS 'a' como primeiro argumento e o texto "Cursos" como segundo argumento, garantindo que o texto esteja contido no elemento correto e visível.

Essas são algumas maneiras de identificar elementos por seu texto no Cypress, tornando nossos testes mais flexíveis e robustos.
```