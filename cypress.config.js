// Importa a função principal de configuração do Cypress
const { defineConfig } = require("cypress");

// Exporta as configurações do projeto de testes
module.exports = defineConfig({

    // Define o tamanho padrão da tela do navegador
	viewportWidth: 1440,
	viewportHeight: 900,

    // Grava vídeos dos testes automaticamente (útil em CI/CD)
	video: true,

    // Desativa a política de segurança do Chrome (CORS, iframes, etc.)
	chromeWebSecurity: false,

    // Captura automaticamente screenshots em caso de falha
	screenshotOnRunFailure: true,

    // Limpa vídeos e screenshots antigos antes de cada execução
	trashAssetsBeforeRuns: true,

    // Tempo máximo padrão de espera dos comandos Cypress (ex: cy.get)
	defaultCommandTimeout: 10000,

    // Tempo máximo para carregar uma página com cy.visit()
	pageLoadTimeout: 60000,

	// Ocultar / Esconder requisições http
	hideXHRInCommandLog: true,

    // Configuração de relatórios automáticos com o Mochawesome
	reporter: "mochawesome",
	reporterOptions: {
		reportDir: "cypress/reports/",   // Diretório onde serão salvos os relatórios
		overwrite: true,                 // Sobrescreve relatórios antigos
		html: true,                      // Gera relatório em HTML
		json: false,                     // Desativa saída JSON
		timestamp: "dd-mm-yyyy_HH-MM-ss" // Adiciona data/hora ao nome do relatório
	},

    // Configurações específicas para os testes E2E
	e2e: {
		// Define a URL base para comandos cy.visit('/') e cy.request('/')
		//baseUrl: "",

		//Configura possibilidade de fazer todos os testes na interface gráfica 
		experimentalRunAllSpecs: true,

		// Bloqueia chamadas externas que não influenciam nos testes
		blockHosts: [
			'*.google-analytics.com',
			'fonts.gstatic.com',
			'fonts.googleapis.com'
		],

		// Caminho padrão onde o Cypress buscará os arquivos de teste
		specPattern: "cypress/**/*.cy.js",

		// Função para configurar eventos e plugins do Node.js
		setupNodeEvents(on, config) {
		// Executa antes de iniciar todos os testes
			on('before:run', (details) => {
				console.log('Rodando testes... em', details.config.projectRoot)
			})

			// Executa após terminar todos os testes
			on('after:run', (results) => {
				console.log('Testes finalizados com status:', results.totalFailed ? 'Falhou' : 'Sucesso')
			})

			// Executa antes de cada spec (arquivo .cy.js)
			on('before:spec', (spec) => {
				console.log('Iniciando arquivo de teste:', spec.name)
			})

			// Executa após cada spec
			on('after:spec', (spec, results) => {
				console.log('Arquivo finalizado:', spec.name, '=>', results.stats.failures, 'falhas')
			})

			return config
		},			
	},

    // Define quantas vezes o Cypress deve tentar repetir um teste falho
	retries: {
		runMode: 1, // No modo "headless" (CI)
		openMode: 0 // No modo "interativo" (cypress open)
	},
});