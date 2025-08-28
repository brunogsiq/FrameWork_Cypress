/*
    Installation
    Install this package:

    npm i cypress-plugin-steps
    # or
    yarn add cypress-plugin-steps
    Import the plugin into your cypress/support/e2e.js file:

    import 'cypress-plugin-steps'
    // or
    require('cypress-plugin-steps')
    TypeScript support
    In most cases, types work just by installing plugin, but you can add the types to your tsconfig.json

    {
    "types": ["cypress-plugin-steps"]
    }
    This will add types for cy.step() and cy.section() command.

    Usage
    This will add two new commands to your Cypress library: cy.step() and cy.section() See the details below

        cy.step()
        This works similarly to cy.log() command, but in addition, will add numbering to your tests:

        it('numbers test steps', () => {

        cy.step('open a page')
        cy.visit('cypress/index.html')

        cy.step('find all primary colors')
        cy.get('.primary')

        cy.step('select blue')
        cy.get('.blue')

        });
        screenshot.png

    Error messages
        If your test fails, your scenario will be added to the error message. This way your scenario will be visible right on the error screenshot that Cypress does automatically:

    error scenario

        You can also see the scenario in terminal: error in terminal

    cy.section()
    Works similarly to cy.step() but will be more prominent in Cypress runner (adding '---' to the log message) and will reset counter. This way you can divide your test into multiple secions.

    sections

    TIP: rename all your cy.log() to cy.step() commands
    You can find and replace all your cy.log() commands by matching the word log with following regex:

    (?:cy\s*)?log\s*
*/