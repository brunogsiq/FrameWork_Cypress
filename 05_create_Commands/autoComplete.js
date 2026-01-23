Para projetos com TypeScript
Esta é a abordagem recomendada e mais robusta, pois garante a tipagem correta dos comandos. 
Crie a definição de tipo: No diretório cypress / support /, modifique o arquivo index.d.ts para estender a interface Chainable do Cypress, adicionando a assinatura do seu comando.
    typescript
// cypress/support/index.d.ts
declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Comando personalizado para login
         * @example cy.login('usuario', 'senha')
         */
        login(username: string, password: string): Chainable<any>;
    }
}
Crie o comando customizado: No arquivo commands.ts(ou commands.js se preferir), implemente o comando usando Cypress.Commands.add().
    typescript
// cypress/support/commands.ts
Cypress.Commands.add('login', (username: string, password: string) => {
    cy.visit('/login');
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button').click();
});
Reinicie o editor: Se você usa o VS Code, pode ser necessário reiniciar o editor para que as alterações entrem em vigor. 
Para projetos com JavaScript
Se você não usa TypeScript, pode habilitar o IntelliSense adicionando um arquivo jsconfig.json na raiz do seu projeto. 
Crie o arquivo jsconfig.json: Crie um arquivo com esse nome na pasta raiz do seu projeto e adicione a seguinte configuração:
json
{
    "compilerOptions": {
        "allowJs": true,
            "baseUrl": "../node_modules",
                "types": ["cypress"]
    },
    "include": ["**/*.*"]
}
Adicione a "triple-slash directive": Adicione a seguinte linha no topo do seu arquivo de teste(.cy.js) para referenciar os tipos do Cypress:
    javascript
/// <reference types="Cypress" />
Adicione a "triple-slash directive" para o comando personalizado: Se você criar um arquivo.d.ts para a definição de tipo, adicione também a referência a esse arquivo no topo do seu arquivo de teste.
    javascript
/// <reference path="caminho/para/seu/arquivo.d.ts" />
Implemente o comando customizado: No arquivo commands.js(geralmente em cypress / support /), defina o seu comando. 
Por que é necessário fazer essa configuração ?
    O Cypress oferece o IntelliSense integrado para os comandos nativos.No entanto, para comandos customizados, é necessário informar ao seu editor de código(como o VS Code) que novas funções foram adicionadas ao objeto Cypress.Chainable.Essa configuração manual de tipagem é o que permite ao editor reconhecer e sugerir os seus comandos customizados. 