/*
    Instalar a depedência através do comando:
        npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator

    Local de configuração inicial será em:
        cypress.config.js

    Após, adicionar as seguintes linhas:
        module.exports = defineConfig({
        reporter: "mochawesome",
        reporterOptions: {
            reportDir: 'cypress/report',
            overwrite: true,
            html: true,
            json: false,
            timestamp: 'dd-mm-yyyy_HH-MM-ss',
            overwrite: false,
        },
        e2e: {
            ...
        }

    No arquivo package.json, adicionar a seguinte linha:
        "scripts": {
            "test": "cypress run --reporter mochawesome",
            "merge-reports": "mochawesome-merge --reportDir cypress/reports/mocha > cypress/reports/mochawesome-merged.json",
            "generate-report": "marge cypress/reports/mochawesome-merged.json -f report -o cypress/reports",
            "cy:run": "npm run test && npm run merge-reports && npm run generate-report"
        },

    Após toda instalação realizada, o cypress deverá ser executado local, Para isso, basta executar o comando: 
        npx cypress run
*/