```markdown
# Testando APIs com Cypress usando ServeRest

Neste tutorial, vamos explorar como testar APIs com o Cypress, utilizando o projeto ServeRest, criado pelo Paulo Gonçalves para estudos de testes de APIs. Vamos nos concentrar em requisições do tipo GET.

## Busca por Usuários

```javascript
describe('GET usuarios', () => {
  it('busca usuários corretamente', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/usuarios'
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.usuarios[0].nome).to.equal('Fulano da Silva')
      expect(response.body.usuarios[0].email).to.equal('fulano@qa.com')
    })
  })
})
```

No código acima, além de verificar o status da resposta (200), também confirmamos se o nome e email do primeiro usuário estão de acordo com o esperado.

## Busca por Produtos

```javascript
describe('GET produtos', () => {
  it('busca produtos corretamente', () => {
    const expectedResult = [
      {
        nome: 'Logitech MX Vertical',
        descricao: 'Mouse',
        preco: 470,
        quantidade: 382```markdown
# Testando APIs com Cypress usando ServeRest

Neste tutorial, vamos explorar como testar APIs com o Cypress, utilizando o projeto ServeRest, criado pelo Paulo Gonçalves para estudos de testes de APIs. Vamos nos concentrar em requisições do tipo GET.

## Busca por Usuários

```javascript
describe('GET usuarios', () => {
  it('busca usuários corretamente', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/usuarios'
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.usuarios[0].nome).to.equal('Fulano da Silva')
      expect(response.body.usuarios[0].email).to.equal('fulano@qa.com')
    })
  })
})
```

No código acima, além de verificar o status da resposta (200), também confirmamos se o nome e email do primeiro usuário estão de acordo com o esperado.

## Busca por Produtos

```javascript
describe('GET produtos', () => {
  it('busca produtos corretamente', () => {
    const expectedResult = [
      {
        nome: 'Logitech MX Vertical',
        descricao: 'Mouse',
        preco: 470,
        quantidade: 382
      },
      {
        nome: 'Samsung 60 polegadas',
        descricao: 'TV',
        preco: 5240,
        quantidade: 49977
      }
    ]

    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/produtos'
    }).then((response) => {
      expect(response.status).to.equal(200);
      response.body.produtos.forEach((produto, indice) => {
        expect(produto.nome).to.equal(expectedResult[indice].nome)
        expect(produto.descricao).to.equal(expectedResult[indice].descricao)
        expect(produto.preco).to.equal(expectedResult[indice].preco)
        expect(produto.quantidade).to.equal(expectedResult[indice].quantidade)
      })
    })
  })
})
```

No teste acima, definimos um array com os produtos esperados e, após a requisição GET para `/produtos`, verificamos se os produtos retornados correspondem ao esperado.

## Busca por Carrinhos

```javascript
describe('GET carrinhos', () => {
  it('busca carrinhos por quantidade corretamente', () => {
    cy.request({```markdown
    # Testando APIs com Cypress usando ServeRest
    
    Neste tutorial, vamos explorar como testar APIs com o Cypress, utilizando o projeto ServeRest, criado pelo Paulo Gonçalves para estudos de testes de APIs. Vamos nos concentrar em requisições do tipo GET.
    
    ## Busca por Usuários
    
    ```javascript
    describe('GET usuarios', () => {
      it('busca usuários corretamente', () => {
        cy.request({
          method: 'GET',
          url: 'http://localhost:3000/usuarios'
        }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body.usuarios[0].nome).to.equal('Fulano da Silva')
          expect(response.body.usuarios[0].email).to.equal('fulano@qa.com')
        })
      })
    })
    ```
    
    No código acima, além de verificar o status da resposta (200), também confirmamos se o nome e email do primeiro usuário estão de acordo com o esperado.
    
    ## Busca por Produtos
    
    ```javascript
    describe('GET produtos', () => {
      it('busca produtos corretamente', () => {
        const expectedResult = [
          {
            nome: 'Logitech MX Vertical',
            descricao: 'Mouse',
            preco: 470,
            quantidade: 382
          },
          {
            nome: 'Samsung 60 polegadas',
            descricao: 'TV',
            preco: 5240,
            quantidade: 49977
          }
        ]
    
        cy.request({
          method: 'GET',
          url: 'http://localhost:3000/produtos'
        }).then((response) => {
          expect(response.status).to.equal(200);
          response.body.produtos.forEach((produto, indice) => {
            expect(produto.nome).to.equal(expectedResult[indice].nome)
            expect(produto.descricao).to.equal(expectedResult[indice].descricao)
            expect(produto.preco).to.equal(expectedResult[indice].preco)
            expect(produto.quantidade).to.equal(expectedResult[indice].quantidade)
          })
        })
      })
    })
    ```
    
    No teste acima, definimos um array com os produtos esperados e, após a requisição GET para `/produtos`, verificamos se os produtos retornados correspondem ao esperado.
    
    ## Busca por Carrinhos
    
    ```javascript
    describe('GET carrinhos', () => {
      it('busca carrinhos por quantidade corretamente', () => {
        cy.request({```markdown
# Testando APIs com Cypress usando ServeRest

Neste tutorial, vamos explorar como testar APIs com o Cypress, utilizando o projeto ServeRest, criado pelo Paulo Gonçalves para estudos de testes de APIs. Vamos nos concentrar em requisições do tipo GET.

## Busca por Usuários

```javascript
describe('GET usuarios', () => {
  it('busca usuários corretamente', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/usuarios'
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.usuarios[0].nome).to.equal('Fulano da Silva')
      expect(response.body.usuarios[0].email).to.equal('fulano@qa.com')
    })
  })
})
```

No código acima, além de verificar o status da resposta (200), também confirmamos se o nome e email do primeiro usuário estão de acordo com o esperado.

## Busca por Produtos

```javascript
describe('GET produtos', () => {
  it('busca produtos corretamente', () => {
    const expectedResult = [
      {
        nome: 'Logitech MX Vertical',
        descricao: 'Mouse',
        preco: 470,
        quantidade: 382
      },
      {
        nome: 'Samsung 60 polegadas',
        descricao: 'TV',
        preco: 5240,
        quantidade: 49977
      }
    ]

    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/produtos'
    }).then((response) => {
      expect(response.status).to.equal(200);
      response.body.produtos.forEach((produto, indice) => {
        expect(produto.nome).to.equal(expectedResult[indice].nome)
        expect(produto.descricao).to.equal(expectedResult[indice].descricao)
        expect(produto.preco).to.equal(expectedResult[indice].preco)
        expect(produto.quantidade).to.equal(expectedResult[indice].quantidade)
      })
    })
  })
})
```

No teste acima, definimos um array com os produtos esperados e, após a requisição GET para `/produtos`, verificamos se os produtos retornados correspondem ao esperado.

## Busca por Carrinhos

```javascript
describe('GET carrinhos', () => {
  it('busca carrinhos por quantidade corretamente', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/carrinhos?quantidadeTotal=3'
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.carrinhos.length).to.equal(1)
    })
  })
})
```

No último teste, buscamos por carrinhos com uma quantidade específica e verificamos se apenas um carrinho foi retornado no array de carrinhos.

Executando esses testes localmente, todos passaram em apenas 146ms. 🚀
```

Espero que este formato em Markdown seja útil para você!
          method: 'GET',
          url: 'http://localhost:3000/carrinhos?quantidadeTotal=3'
        }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body.carrinhos.length).to.equal(1)
        })
      })
    })
    ```
    
    No último teste, buscamos por carrinhos com uma quantidade específica e verificamos se apenas um carrinho foi retornado no array de carrinhos.
    
    Executando esses testes localmente, todos passaram em apenas 146ms. 🚀
    ```
    
    Espero que este formato em Markdown seja útil para você!
      method: 'GET',
      url: 'http://localhost:3000/carrinhos?quantidadeTotal=3'
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.carrinhos.length).to.equal(1)
    })
  })
})
```

No último teste, buscamos por carrinhos com uma quantidade específica e verificamos se apenas um carrinho foi retornado no array de carrinhos.

Executando esses testes localmente, todos passaram em apenas 146ms. 🚀
```

Espero que este formato em Markdown seja útil para você!
      },
      {
        nome: 'Samsung 60 polegadas',
        descricao: 'TV',
        preco: 5240,
        quantidade: 49977
      }
    ]

    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/produtos'
    }).then((response) => {
      expect(response.status).to.equal(200);
      response.body.produtos.forEach((produto, indice) => {
        expect(produto.nome).to.equal(expectedResult[indice].nome)
        expect(produto.descricao).to.equal(expectedResult[indice].descricao)
        expect(produto.preco).to.equal(expectedResult[indice].preco)
        expect(produto.quantidade).to.equal(expectedResult[indice].quantidade)
      })
    })
  })
})
```

No teste acima, definimos um array com os produtos esperados e, após a requisição GET para `/produtos`, verificamos se os produtos retornados correspondem ao esperado.

## Busca por Carrinhos

```javascript
describe('GET carrinhos', () => {
  it('busca carrinhos por quantidade corretamente', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/carrinhos?quantidadeTotal=3'
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.carrinhos.length).to.equal(1)
    })
  })
})
```

No último teste, buscamos por carrinhos com uma quantidade específica e verificamos se apenas um carrinho foi retornado no array de carrinhos.