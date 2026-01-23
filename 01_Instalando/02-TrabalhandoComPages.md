Criando uma classe:

    export class telaCadastroComSucesso
    {
        //SELETORES CSS

        get logotipo() {
            return cy.get("[alt='Petlov']")
        }

        get tituloMensagem() {
            return cy.get("h1")
        }
    };

Arquivo Commands:

/// <reference types="cypress" /> 

import { telaCadastroComSucesso } from "../../pageObjects/telaCadastroConcluido/telaCadastroConcluido";

//Inicializa os Page Objects
    const TelaCadastroComSucesso = new telaCadastroComSucesso();

Cypress.Commands.add("validarCriteriosDeAceiteTelaCadastroConcluido", () => 
{
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