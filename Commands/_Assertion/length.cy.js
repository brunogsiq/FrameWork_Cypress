/*
    Length : cumprimento
        above: acima
        at least: pelo menos
        at most : no máximo
        below: abaixo
        eq: igual a
        greaterThan: maior que
        gt: mais de
        gte: maior ou igual a
        lessThan: menor que
        lt: menos que
        lte: menor ou igual
        within: dentro

    Ex:
        cy.get("caminho").each(($elemento) => {
            cy.wrap($elemento)
            .invoke("text")
            .then((elementoText) => {
            expect(elementoText.length).to.equal(18);
            });
        });

*/

cy.get('.todo-list li').should('have.length', 2)