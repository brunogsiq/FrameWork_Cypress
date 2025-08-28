/*
    Utilizando estratégia para não apresentar dados sensíveis

    Ex:
        cy.get("[data-qa-selector='password_field']")
            .type(password, { log: false })
*/

```markdown
# Protegendo Credenciais de Acesso no Cypress

Hoje vamos abordar como proteger credenciais de acesso, como usuário e senha, em testes end-to-end no Cypress.

## Utilizando o arquivo cypress.env.json

Em ambiente local de desenvolvimento, uma alternativa para armazenar dados sensíveis é o uso do arquivo `cypress.env.json`, que não é versionado (incluído no `.gitignore`).

Exemplo de conteúdo do `cypress.env.json`:

```json
{
  "user_name": "admin",
  "user_password": "s3creT-p@ssw0rd"
}
```

## Teste de Login

O teste de login pode ser implementado da seguinte forma:

```javascript
describe('Login', () => {
  it('com sucesso', () => {
    cy.visit('https://exemplo.com/login')

    cy.get('#user')
      .type(Cypress.env('user_name'))
    cy.get('#password')
      .type(Cypress.env('user_password'))
    cy.contains('Login').click()

    cy.get('.navbar-top .avatar')
      .should('be.visible')
  })
})
```

## Protegendo Senha no Modo Interativo

Para evitar que a senha seja exibida no modo interativo durante a execução dos testes, podemos adicionar a opção `{ log: false }` ao `.type()` da senha:

```javascript
describe('Login', () => {
  it('com sucesso', () => {
    cy.visit('https://exemplo.com/login')

    cy.get('#user')
      .type(Cypress.env('user_name'))
    cy.get('#password')
      .type(Cypress.env('user_password'), { log: false })
    cy.contains('Login').click()

    cy.get('.navbar-top .avatar')
      .should('be.visible')
  })
})
```

Dessa forma, garantimos a proteção dos dados sensíveis e a execução dos testes em diferentes ambientes de forma segura.
```

Essa abordagem permite manter a segurança dos dados sensíveis e garante a execução dos testes de forma segura em diferentes ambientes.