# Regras e Estrutura de Testes

1. **Ordem de Construção das Funções:**

   - **Visita à URL/Link Desejado:**
     - Testar se todos os links são válidos.

   - **Validação de Critérios de Aceite:**
     - Testar toda a parte visual do sistema, incluindo CSS, texto em português e alertas.

   - **Validação Funcional Primária:**
     - Testar todas as funcionalidades básicas, como cliques, sem a necessidade de seguir um fluxo.

   - **Validação Funcional de Fluxos Positivos:**
     - Testar todos os fluxos existentes baseados em testes positivos.

   - **Validação Funcional de Fluxos Negativos:**
     - Testar todos os fluxos existentes baseados em testes negativos.

2. **Formato Padrão dos Testes:**

   - `Nº - Sw - Tela - Objetivo do Teste - Teste Realizado`
     - Exemplo: `01 - Web - Tela de Processamento - Validar processamento de taxa - Dados de datas e matriz válidos e existentes.`

3. **Regras para Codificação de Testes Visuais:**

   - As validações devem respeitar a ordem apresentada no código, seguindo a estrutura desenvolvida.

   - Validações em Elementos:
     - Sem Evento: Campos apenas visuais.
     - Com Evento: Campos de entrada, saída, botões.

   - Campos a serem validados incluem:
     - Alertas:
         - visíveis
         - tag HTML ou classe
         - atributos
         - CSS
         - texto
         - tempo de apresentação visivel e não visíveis.
     - Âncoras e Botões:
         - visíveis
         - habilitados ou não
         - tag HTML ou classe
         - atributos
         - CSS
         - texto
         - texto CSS.
     - Listas:
       - visíveis
       - tag HTML ou classe
       - atributos
       - CSS
       - texto
       - texto CSS.
     - Checkbox:
       - visíveis
       - atributos de check
       - mensagem, CSS.
     - Campos de Datas:
       - visíveis
       - tag HTML ou classe
       - atributos formcontrolname "begindate" ou "enddate"
       - placeholder "00/00/0000"
       - tipo, texto.
     - Ícones e Imagem:
       - visíveis
       - atributo role="img"
       - CSS
       - texto.
     - Textos:
         - visíveis
         - CSS
         - texto