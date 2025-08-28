/*
    Features
        cy.api() command, that will information about the API call, such as URL, headers, response and more to the UI frame
        all of the info can be viewed in a time-travel snapshots
        simple table for viewing cookies
        JSON data object and array folding
        color coding of methods in UI view and in timeline
        calculating size of the response
        combine API calls with UI
        hide sensitive headers and auth information
        requestMode to add cy.api() features to cy.request() command
        TypeScript support
        Installation
        Install this package:

        npm i cypress-plugin-api
        # or
        yarn add cypress-plugin-api
        Import the plugin into your cypress/support/e2e.js file:

        import 'cypress-plugin-api'
        // or
        require('cypress-plugin-api')
        Usage
        You can now use cy.api() command. This command works exactly like cy.request() but in addition to calling your API, it will print our information about the API call in your Cypress runner.

        Snapshot only mode
        If you want to combine your API calls with your UI test, you can now use snapshotOnly mode, that will hide the plugin UI view after command ends. You can access it within the timeline.

        snapshotOnly mode is set to false by default. To set up snapshotOnly mode, add following to your test configuration:

        it('my UI & API test', { env: { snapshotOnly: true } }, () => {

        cy.visit('/') // open app
        cy.api('/item') // call api
        cy.get('#myElement') // still able to access element on page

        })
        or you can add the configuration to your cypress.config.{js,ts} file:

        import { defineConfig } from 'cypress'

        export default defineConfig({
        e2e: {
            setupNodeEvents(on, config) {
            },
            env: {
            snapshotOnly: true
            }
        },
        })
        Hiding credentials
        You can hide your credentials by passing hideCredentials option to your env configuration. This will hide all the credentials from UI, but you can still access them via console. This option is set to false by default.

        it('my secret test', { env: { hideCredentials: true } }, () => {

        cy.api({
            url: '/',
            headers: {
                authorization: Cypress.env('myToken')
            }
            })

        })
        The result will look like this:

        Cypress plugin for testing API

        You can also hide any credentials you want by defining array of keys in hideCredentialsOptions,

        it('my secret test', { 
        env: { 
            hideCredentials: true, 
            hideCredentialsOptions: {
            headers: ['authorization'],
            auth: ['pass'],
            body: ['username'],
            query: ['password']
            }
        }
        }, () => {

        cy.api({
            url: '/',
            headers: {
                authorization: Cypress.env('myToken') // hidden
            },
            auth: {
                pass: Cypress.env('myPass') // hidden
            },
            body: {
                username: Cypress.env('myUser') // hidden
            },
            qs: {
                password: Cypress.env('password') // hidden
            }
            })

        })
        This will override all the defaults set by hideCredentials.

        requestMode - enable UI for cy.request() command
        This setting adds all the functionality of cy.api() command to cy.request(). It’s set to false by default. This means that when you call cy.request() in your test, it will show UI.

        TypeScript support
        In most cases, types work just by installing plugin, but you can add the types to your tsconfig.json

        {
        "types": ["cypress-plugin-api"]
        }
        This will add types for cy.api() command, it’s returned values as well as env properties.

        Issues
        All the issues can be found on issues page, feel free to open any new ones or contribute with your own code.
*/