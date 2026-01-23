cy.window()
	.its('top')
	.invoke('alert', 'Hello world!')
---

Validar links através do href + visita + attr "target" "blank" "not.be.visible"
	Target blank, faz abrir em nova aba, porem o cypress não suporta multi abas

----

DRY - Don't Repeat Yourself
	Utilizar variáveis de ambiente - cypress.env.json

	//contrói um menu dinâmico, baseado em um array de objetos
	const menuItems = [
		{ name: 'Home', link: '/' },
		{ name: 'About', link: '/about' },
		{ name: 'Contact', link: '/contact' }
	];

	//depois utiliza o array para validar os itens do menu
	menuItems.forEach(item => {
		cy.get('nav').contains(item.name).should('have.attr', 'href', item.link);
	});	

	// Podemos também fazer os dinamicos testes de formulários, baseado em arrays de objetos
	[
		{ label: 'First Name', value: 'John' },
		{ label: 'Last Name', value: 'Doe' },
		{ label: 'Email', value: 'b@g.com' }
	].forEach(field => {
		it(`Valida o menu ${field.label}`, () => {
			cy.getElement(field.label).should('exist');
		});
	});
----

Para criar variaveis de ambiente no cypress, criar o arquivo cypress.env.json na raiz do projeto

{	
	"baseUrl": "https://automationpractice.com",
	"userEmail": "bruno"
	"userPassword": "siqueira"
}