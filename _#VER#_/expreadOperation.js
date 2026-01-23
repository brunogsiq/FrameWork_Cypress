/*
    Com uma massa, realizando a modificação apenas no campo que desejar
*/

import React from 'react'
import AddCard from './AddCard';

let contexto = 1;
let cenario = 1;
let teste = 1;

Cypress.Commands.add('AlertError_HaveText', (expect) =>
{
	cy.contains('.alert-error', expect)
		.should('be.visible')
});

Cypress.Commands.add('preencheDadosCartao', (card) => {
	cy.get('[data-cy="number"]')
		.type(card.number)
	cy.get('[data-cy="holderName"]')
		.type(card.holderName)
	cy.get('[data-cy="expirationDate"]')
		.type(card.expirationDate)
	cy.get('[data-cy="cvv"]')
		.type(card.cvv)
	cy.get(`[data-cy="bank-${card.bank}"]`)
		.click()
})

Cypress.Commands.add('enviaDadosCartao', () => {
	cy.get('[data-cy="saveMyCard"]')
		.click()
})

context(`${contexto} - Teste de Componentes.`, () =>
{
	let complemento = 1;
	describe(`${cenario} - Adicionando Cartão Preenchimento inválido..`, () =>
	{
		const myCard = {
				number: '5167 5482 2213 9921',
				holderName: 'Bruno Siqueira',
				expirationDate: '12/40',
				cvv: '109',
				bank: 'nubank'
		}

		beforeEach(() => {
			cy.mount(<AddCard />)
		});

		it(`${teste}.${++complemento} - Validar cvv com menos de 3 digítos - Digita 2.`, () =>
		{
			cy.preencheDadosCartao({...myCard, cvv: '12'})

			cy.enviaDadosCartao()

			cy.AlertError_HaveText('CVV deve ter 3 ou 4 dígitos')
				.and('have.text', 'CVV deve ter 3 ou 4 dígitos')
		});
	});
});