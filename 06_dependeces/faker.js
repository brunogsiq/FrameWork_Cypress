/*
Instalação e como usar: https://fakerjs.dev/guide/
    npm install @faker-js/faker --save-dev
    
    Exemplos:
        Dentro do arquivo de teste, função, onde será necessário utilizar o Faker, inserir:
        import { faker } from '@faker-js/faker';
        const randomName = faker.name.fullName(); // Rowan Nikolaus
        const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

        const randomName = faker.name.fullName(); // Rowan Nikolaus
        const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

        CommonJS
        const { faker } = require('@faker-js/faker');

        const randomName = faker.name.fullName(); // Rowan Nikolaus
        const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

        Browser#
        <script type="module">
        import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

        // Caitlyn Kerluke
        const randomName = faker.name.fullName();

        // Rusty@arne.info
        const randomEmail = faker.internet.email();
        </script>

const { faker } = require('@faker-js/faker');
const FirstName = faker.name.firstName('male');
const LastName = faker.name.lastName('male');
const DayBorn = faker.datatype.number({ min: 1, max: 31 });
const MonthBorn = faker.datatype.number({ min: 1, max: 12 });
const YearBorn = faker.datatype.number({ min: 1900, max: 2024 });
const Email = faker.internet.email();
const Password = faker.internet.password(12, false, /[\w\d\S]*[\w\d\S\?][\w\d\S]AQUI TEM UM ASTERISCO/);
const ConfirmPassword = Password;

    cy.get(loc.tela_Cadastro.primeiroNome)
        .should('be.visible')
        .type(FirstName)

    cy.get(loc.tela_Cadastro.ultimoNome)
        .should('be.visible')
        .type(LastName)

    cy.get(loc.tela_Cadastro.dataNascimento)
        .eq(0)
        .should('be.visible')
        .select(DayBorn)

    cy.get(loc.tela_Cadastro.dataNascimento)
        .eq(1)
        .should('be.visible')
        .select(MonthBorn)

    cy.get(loc.tela_Cadastro.dataNascimento)
        .eq(2)
        .should('be.visible')
        .select(YearBorn)

    cy.get(loc.tela_Cadastro.email)
        .should('be.visible')
        .type(Email)

    cy.get(loc.tela_Cadastro.tituloFormulario)
        .eq(2)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(68, 68, 68)')
        .and('contain', 'Options')

    cy.get(loc.tela_Cadastro.noticiasCheck)
        .should('be.visible')
        .and('have.attr', 'type', 'checkbox')
        .and('have.attr', 'data-val', 'true')
        .click()

    cy.get(loc.tela_Cadastro.tituloFormulario)
        .eq(3)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(68, 68, 68)')
        .and('contain', 'Your Password')

    cy.get(loc.tela_Cadastro.senha)
        .should('be.visible')
        .and('have.attr', 'type', 'password')
        .type(Password)

    cy.get(loc.tela_Cadastro.confirmaSenha)
        .should('be.visible')
        .and('have.attr', 'type', 'password')
        .type(ConfirmPassword)

    cy.wait(5000)

    cy.get(loc.tela_Cadastro.botaoCadastrar)
        .should('be.visible')
        .and('have.css', 'background-color', 'rgb(74, 178, 241)')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
        .and('contain', 'Register')
        .click()

    cy.get(loc.tela_Cadastro.confirmaRegistro)
        .should('be.visible')
        .and('have.css', 'color', 'rgb(76, 177, 124)')
        .and('contain', 'Your registration completed')
*/