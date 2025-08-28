Como utilizar:
    Crie o arquivo dando e dê um Nome.js na pasta PageObjects.
    Dentro do arquivo, crie uma classe com o nome do arquivo.
    Dentro da classe, crie os seletores CSS com o get.

Importando:
    No arquivo de teste, importe a classe com o comando:
        import { NomeDaClasse } from "../PageObjects/NomeDoArquivo"
    Crie uma variável para instanciar a classe:
        const nomeVariavel = new NomeDaClasse()
    Utilize os seletores CSS com a variável criada:
        nomeVariavel.seletorCSS

export class telaCadastroComSucesso
{
    //SELETORES CSS

    get logotipo() {
        return cy.get("[alt='Petlov']")
    }

    get tituloMensagem() {
        return cy.get("h1")
    }

    get textoMensagem() {
        return cy.get("body p")
    }

    get iconeBotaoVoltar() {
        return cy.get("span")
    }

    get textoBotaoVoltar() {
        return cy.get("strong")
    }

    get botaoVoltar() {
        return cy.get("a[href='/signup']")
    }
};

Arquivo Commands:

/// <reference types="cypress" /> 

import { telaHome } from "../../pageObjects/01_telaHome/telaHome";
import { telaCadastroComSucesso } from "../../pageObjects/03_telaCadastroConcluido/telaCadastroConcluido";

//Inicializa os Page Objects
const TelaHome = new telaHome();
const TelaCadastroComSucesso = new telaCadastroComSucesso();

Cypress.Commands.add("validarCriteriosDeAceiteTelaCadastroConcluido", () => 
{
    cy.validarRegrasDeNegocioTelaCadastro();

    TelaCadastroComSucesso.logotipo
        .should("be.visible");

    TelaCadastroComSucesso.tituloMensagem
        .should("be.visible");

    TelaCadastroComSucesso.textoMensagem
        .should("be.visible");

    TelaCadastroComSucesso.iconeBotaoVoltar
        .should("be.visible");

    TelaCadastroComSucesso.textoBotaoVoltar
        .should("be.visible");

    TelaCadastroComSucesso.botaoVoltar
        .should("be.visible");
});

Arquivo Spec:

/// <reference types="cypress" />

let tela = 2;
let funcao = 1;

describe(`${++tela}.${++funcao} - Tela Cadastro Concluido.`, () =>
{
	
	let cenario = 0;
	let teste = 0;

	beforeEach(() =>
	{
		cy.visit(Cypress.env("baseUrl"));

		cy.wait(2500);
	});

	context(`Cenário ${++cenario} - Validar regras de negócio.`, () =>
	{
		it(`Teste ${++teste}`, () =>
		{
			cy.validarRegrasDeNegocioTelaCadastroConcluido();
		});
	});
});

