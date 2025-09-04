//No arquivo e2e

Cypress.ElementSelector.defaults({
    selectorPriority: ['data-cy', 'data-test', 'data-testid', 'id', 'class', 'attributes', 'tag', 'nth-child']
})