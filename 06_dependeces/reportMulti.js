/*
    Instalar a depedência através do comando:
        npm install cypress-multi-reporters --save-dev

    Para saber mais:
        https://www.npmjs.com/package/cypress-multi-reporters

    Adicionar em package.json:
        "scripts": {
        "test": "cypress run --reporter mochawesome",
        "merge-reports": "mochawesome-merge --reportDir cypress/reports/mocha > cypress/reports/mochawesome-merged.json",
        "generate-report": "marge cypress/reports/mochawesome-merged.json -f report -o cypress/reports",
        "cy:run": "npm run test && npm run merge-reports && npm run generate-report"
        },
*/

