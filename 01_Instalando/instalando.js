Claro! Aqui está o guia em **Markdown**, direto aqui na tela para você usar no seu README ou salvar como `.md` quando quiser:

---

# 📘 Guia de Instalação do Cypress

## 1. Pré-requisitos

* Ter o **Node.js** instalado.
* Garantir que o **Node.js** e o **npm** estão configurados nas variáveis de ambiente.

### Verificação de versões

```bash
npm -v   # versão do npm
node -v  # versão do Node.js
```

---

## 2. Iniciando o Projeto

1. Crie uma pasta e abra no **VS Code**.
2. No terminal integrado, inicialize o projeto Node.js:

```bash
npm init --yes
```

> Responde **sim** a todas as perguntas.

ou

```bash
npm init
```

> Permite responder os detalhes manualmente.
> **Obs:** quando perguntar por **test command**, insira:
>
> ```
> npx cypress open
> ```

---

## 3. Instalando o Cypress

Instale o Cypress e adicione como dependência de desenvolvimento:

```bash
npm install cypress@latest --save-dev
```

ou

```bash
npm i cypress --save
```

---

## 4. Executando o Cypress

### Interface Gráfica:

```bash
npx cypress open
```

### Execução em background:

```bash
npx cypress run
```

---

## 5. Possíveis Erros e Correções

**Erro:**

```
Could not find a Cypress configuration file in this folder:
```

**Correção:**

```bash
npx cypress open --config-file theNewCypressConfigPath
```
## Para tests de componentes no terminal deverá ser utilizado o comando

    npx cypress run --component