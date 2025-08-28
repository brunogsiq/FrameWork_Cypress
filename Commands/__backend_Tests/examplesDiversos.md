```markdown
# Criando Código Reutilizável com Cypress

Hoje vamos explorar como criar código reutilizável no Cypress, focando em Comandos Customizados. Vou usar como exemplo o projeto wlsf82/gitlab-cypress.

## Estrutura de Arquivos

Dentro de `cypress/support/`, tenho os arquivos:
- `api_commands.js`: comandos nível de API
- `gui_commands.js`: comandos para GUI
- `e2e.js`: arquivo de importação dos comandos

Você pode ter quantos arquivos de comandos customizados quiser!

## Importação de Comandos

No arquivo `cypress/support/e2e.js`, importamos ambos arquivos de comandos:

```javascript
import './api_commands'
import './gui_commands'
```

## Teste de Criação de Projeto (API)

```javascript
describe('Create project', () => {
  beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const project = { name: faker.random.word() }

    cy.api_createProject(project).then(response => {
      expect(response.status).to.equal(201)
      expect(response.body.name).to.equal(project.name)
    })
  })
})
```

## Comando Customizado (API)

```javascript
const accessToken = Cypress.env('gitlab_access_token')

Cypress.Commands.add('api_createProject', project => cy.request({
  method: 'POST',
  url: `/api/v4/projects/?private_token=${accessToken}`,
  body: { name: project.name }
}))
```

## Teste de Criação de Projeto (GUI)

```javascript
describe('Create project', () => {
  beforeEach(() => {
    cy.api_deleteProjects()
    cy.sessionLogin()
  })

  it('successfull', () => {
    const project = { name: faker.random.uuid(), description: faker.random.words(5) }

    cy.gui_createProject(project)

    cy.url().should(
      'be.equal',
      `${Cypress.config('baseUrl')}${Cypress.env('user_name')}/${project.name}`
    )
    cy.contains(project.name).should('be.visible')
    cy.contains(project.description).should('be.visible')
  })
})
```

## Comando Customizado (GUI)

```javascript
Cypress.Commands.add('gui_createProject', project => {
  cy.visit('projects/new')

  cy.get('#project_name').type(project.name)
  cy.get('#project_description').type(project.description)
  cy.get('.qa-initialize-with-readme-checkbox').check()
  cy.contains('Create project').click()
})
```

Agora você tem funcionalidades de criação de projeto cobertas tanto na API quanto na GUI!

Para mais detalhes sobre os comandos customizados `api_deleteProjects` e `sessionLogin`, consulte o código do projeto.
```