# Mapeando elementos HTML e CSS

Exemplos de seletores CSS e XPath:

- **Âncora:**
  - `a[href='/onde-aceita']`
  - `a.vr-button.vr-button--negative[href='#rede-credenciada']`

- **Atributos:**
  - `[name=formComidaFavorita]`

## Explicação:

- **XPATH (XML Path Language):**
  - Linguagem de consulta para XML.
  - Exemplo: `//html/head/title`

- **CSS SELECTOR:**
  - Expressões para localizar elementos no CSS.
  - Exemplo: `div > p`

- **Query Seletor:**
  - Exemplo em JavaScript: `document.querySelectorAll('cssSelector');`

Comandos mais utilizados:

- **Seleção de todos os elementos:**
  - `$('*')`
  - `// *`

- **Selecionando um elemento 'a':**
  - `$('a')`
  - `$x('//a')`

Outros exemplos:

- **Selecionando input pelo atributo placeholder:**
  - `$('input[name="search_query"]')`
  - `$x('//input[@name="search_query"]')`
  - `$('input[placeholder*="Sea"]')`

- **Usando 'contains' com Xpath:**
  - `$x('//input[contains(@placeholder,"Sea")]')`

- **Selecionando elemento pelo texto:**
  - `$x('//*[text()="Lorem Ipsum"]')`
  - `$x('//*[contains(text(), "textoexemplo")]')`

- **Classe CSS e XPATH:**
  - Todos os elementos: `*` ou `//*`
  - Um elemento: `p` ou `//p`
  - Caminho absoluto: `html > body > title` ou `/html/body/title`
  - Query com atributo: `Input[placeholder="Search"]` ou `//input[@placeholder="Search"]`
  - Query com parte de atributo: `Input[placeholder*="Sea"]` ou `//input[contains(@placeholder, "Sear")]`
  - Filhos do elemento: `Form input:first-child` ou `//form/input[1]`
  - Classe: `.sear_query` ou `//*[@class="search_query form-controlac_input"]`
  - Id: `#search_query_top` ou `//*[@id="search_query_top"]`
  - Elemento pelo texto: `//*[text()="Come Visit Us"]` ou `//*[contains(text(), "Nort Carolina")]`

