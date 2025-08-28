Excelente 🚀 Essa seção é **muito importante** porque vai além de apenas clicar e digitar: ela permite **espionar funções, substituir métodos e manipular o tempo no navegador**.

Aqui está o **objetivo da seção Spies, Stubs & Clocks**:

---

# 🎯 Objetivo — Spies, Stubs & Clocks no Cypress

O objetivo é **aumentar o controle dos testes automatizados** ao permitir:

1. **Espionar métodos** (com *spies*).
2. **Substituir funções reais por simuladas** (com *stubs*).
3. **Controlar o tempo e eventos temporizados** (com *clocks* e *ticks*).

Isso é essencial quando você testa **lógica interna do código** ou **interações com APIs, timers e funções complexas**, sem depender do comportamento real do navegador/servidor.

---

## 🔎 **Spies (`cy.spy()`)**

* **Objetivo**: Monitorar chamadas de funções sem alterar seu comportamento.
* Usado para garantir que um método foi chamado, quantas vezes e com quais argumentos.
* Exemplo: verificar se uma função `foo()` foi chamada **2 vezes** após um `setTimeout`.

👉 **Quando usar**:

* Validar que callbacks foram executados.
* Confirmar que funções foram chamadas com os parâmetros corretos.

---

## 🛠️ **Stubs (`cy.stub()`)**

* **Objetivo**: Substituir funções reais por versões "falsas" controladas.
* Permite simular comportamentos, erros ou respostas sem executar o código original.
* Exemplo: substituir `greet()` para retornar `"Hi"` quando receber string, e lançar erro se receber número.

👉 **Quando usar**:

* Simular falhas de API.
* Testar fluxos sem depender de serviços externos.
* Forçar diferentes cenários sem mudar o código de produção.

---

## ⏱️ **Clocks (`cy.clock()` e `cy.tick()`)**

* **Objetivo**: Controlar o tempo dentro do navegador.
* `cy.clock()` congela a data/hora.
* `cy.tick(ms)` avança o tempo simulado.
* Exemplo: validar timers, animações ou expirações sem esperar de verdade.

👉 **Quando usar**:

* Testar código que depende de `setTimeout`, `setInterval` ou datas (`Date.now()`).
* Simular passagem de tempo para validar expiração de sessão.
* Garantir consistência independente do fuso horário.

---

## ✅ Benefícios gerais

* **Confiabilidade**: elimina dependências de tempo real e serviços externos.
* **Controle**: você decide o que funções e APIs retornam.
* **Velocidade**: não precisa esperar segundos/minutos para validar timers.
* **Flexibilidade**: simula cenários de sucesso, erro e exceções.

---

✨ **Em resumo:**
O objetivo dessa seção é dar ao QA **superpoderes para testar lógicas internas** (funções, timers, dependências externas) de forma **controlada, previsível e repetível**, sem depender do ambiente real.

---