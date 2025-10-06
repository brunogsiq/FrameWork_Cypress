/*
    Instalar a depedência através do comando:
        npm i -D cypress-mochawesome-reporter@latest

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
            setupNodeEvents(on, config) {
                require("cypress-mochawesome-reporter/plugin")(on);
                return config;
            },
        }

    No arquivo package.json, adicionar a seguinte linha:
        "scripts": {
		"test": "cypress run --reporter mochawesome --reporter-options reportDir=cypress/reports/mocha,overwrite=false,html=false,json=true",
		"merge-reports": "mochawesome-merge cypress/reports/mocha/*.json > cypress/reports/mochawesome-merged.json",
		"generate-report": "marge cypress/reports/mochawesome-merged.json -f report -o cypress/reports",
		"cy:run": "npm run test && npm run merge-reports && npm run generate-report"
	},

    Após toda instalação realizada, o cypress deverá ser executado local, Para isso, basta executar o comando: 
        npx cypress run
*/