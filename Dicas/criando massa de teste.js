//Digamos que eu precise gerar uma massa de teste dentro do meu arquivo:

var pessoa = {
    nome: 'Nome Teste Sobrenome Teste',
    cpf: '0109191001091910',
    email: 'emailteste@teste.com',
    telefone: '+55 01 90109 1910'
}

Quando for realizar o teste automatizado:

    Se estivermos preenchendo nome, e entre outros dados da "Pessoas criada", somente mapear a continua inserindo o comando.

    Exemplo:
    cy.get('elemento')
        .type(pessoa.nome);