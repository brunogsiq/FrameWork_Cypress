# 📘 Padrão de Checklist de Componentes

### 🔑 Estrutura Base (se aplica a todos)

1. **Visível** – aparece na tela no estado esperado
2. **Texto** – rótulo, valor, placeholder corretos
3. **CSS / Estilo** – cor, fonte, tamanho, formato (negrito, itálico, sublinhado), contraste AA/AAA
4. **Tipo / Estrutura** – tag HTML, tipo de entrada, classe ou atributo esperado
5. **Acessibilidade** – `aria-*`, navegação por teclado, leitura por screen reader
6. **Responsividade** – layout não quebra em diferentes resoluções

---

## 🚨 Alertas

* Visível
* Texto correto e contextual (sucesso, erro, aviso)
* CSS coerente (cor verde/vermelho/amarelo, contraste)
* Estrutura: `role="alert"` ou classe `.toast`
* Tempo de exibição / desaparecimento automático
* Posição na tela

---

## 🔗 Âncoras e Botões

* Visível
* Texto correto / `aria-label` quando ícone
* CSS (hover, focus, active, cor do botão, ícone alinhado)
* Estrutura: `<a>`, `<button>` + atributos (`href`, `target`, `rel`)
* Tipo: habilitado ou desabilitado
* Ação: clique dispara evento esperado
* Previne duplo clique / múltiplos submits

---

## 📋 Listas

* Visível
* Texto de cada item correto
* CSS: destaque de item ativo, cores, formato
* Estrutura: `ul/li`, `ol/li`, classes consistentes
* Quantidade mínima/máxima de itens
* Ordem coerente (alfabética, cronológica)
* Estado vazio tratado com mensagem

---

## ✅ Checkbox / Switch / Radio

* Visível
* Texto/label correto
* CSS (cor de ativo/inativo, foco, hover)
* Estrutura: atributo `checked` / `name` no grupo
* Tipo: marca/desmarca corretamente
* Apenas um radio selecionado em grupo
* Mensagem de validação clara

---

## 📅 Campos Datas

* Visível
* Texto correto (placeholder, label)
* CSS (máscara aplicada, cor de erro/sucesso)
* Estrutura: `formcontrolname`, `placeholder`, tag `input`
* Tipo: `date` ou `text` com máscara
* Validação: data mínima/máxima, intervalo coerente
* Ícone de calendário funcional
* Navegação por teclado

---

## 🏢 Campo Matriz (CNPJ/CPF)

* Visível
* Texto correto (placeholder, label)
* CSS (formatação de máscara, cor de erro)
* Estrutura: `formcontrolname="fiscalNumber"` ou similar
* Tipo: `text` ou `number` com máscara
* Validação de formato (regex, dígitos verificadores)
* Mensagem de erro clara

---

## 🌟 Ícones e Imagens

* Visível
* Texto alternativo (`alt`, `aria-label`) correto
* CSS: tamanho, cor, alinhamento
* Estrutura: `role="img"`, `<img>`
* Proporção e resolução adequadas
* Responsividade (não distorcer, não cortar)

---

## 📝 Textos

* Visível
* Texto correto (label, mensagem, conteúdo)
* CSS: cor, tamanho, fonte, formato (negrito, itálico, sublinhado)
* Estrutura: `<p>`, `<span>`, `<h*>` coerentes
* Alinhamento e capitalização corretos
* Idioma (`lang="pt-BR"`)

---

## 🔍 Campos de Entrada (Input / Textarea)

* Visível
* Texto correto (placeholder, label, valor inicial)
* CSS: estilo do campo ativo/inativo, borda de erro/sucesso
* Estrutura: tag `<input>` / `<textarea>`, tipo (`text`, `email`, `password`, `number`)
* Tipo: aceita apenas valores válidos
* Validação (mín/max, regex, obrigatoriedade)
* Mensagem de erro clara
* Autocomplete habilitado/desabilitado corretamente

---

## 🔽 Dropdowns / Selects

* Visível
* Texto correto (placeholder, opções)
* CSS: cor de opção selecionada, hover
* Estrutura: `<select>/<option>` ou customizado
* Tipo: seleção simples ou múltipla
* Ordem das opções coerente
* Estado desabilitado / vazio tratado

---

## 📊 Tabelas

* Visível
* Texto correto em cabeçalhos e células
* CSS: linhas pares/ímpares, destaque em seleção
* Estrutura: `<table>`, `<th>`, `<td>` com `scope` correto
* Ordenação e filtros funcionam
* Paginação e estados (carregando, vazio, erro)

---

## 📑 Modais / Popups / Sidebars

* Visível ao abrir
* Texto correto no título e botões
* CSS: centralização, overlay, borda
* Estrutura: `role="dialog"`, botões de fechar
* Fecha com `Esc` ou clique fora
* Conteúdo rolável e acessível

---

## 🔄 Carregamento / Spinners / Skeletons

* Visível durante operação
* Texto alternativo (“Carregando…”)
* CSS: animação consistente, não poluída
* Some quando dados chegam
* Não trava navegação

---

## 📂 Upload / Download

* Visível
* Texto correto (nome de arquivo, mensagens)
* CSS: preview, barra de progresso
* Estrutura: `input type="file"`
* Tipos e tamanhos aceitos
* Cancelar/remover arquivo
* Download abre e válido

---

## 🌐 Navegação / Menus

* Visível
* Texto correto (links, labels)
* CSS: item ativo destacado, hover/focus
* Estrutura: `<nav>`, `<ul>/<li>` coerentes
* Funciona no mobile (menu hamburguer)
* Breadcrumb presente e coerente

---

## 🔒 Login / Autenticação

* Visível
* Texto correto (placeholder usuário/senha)
* CSS: campo erro, botão desabilitado/enabled
* Estrutura: campos `input`, botão submit
* Funções: lembrar usuário, mostrar/ocultar senha
* Mensagem clara em erro
* Redirecionamento correto pós-login

---

## 🧾 Formulários

* Visível
* Texto correto em labels e mensagens
* CSS: campos válidos/ inválidos, estados
* Estrutura: `<form>`, atributos `required`, `name`
* Validação ao blur e ao submit
* Reset limpa todos os campos
* Botão submit habilita/desabilita conforme validade
* Feedback claro após envio

---

## 🎨 Tooltips / Ajuda

* Visível no hover/foco
* Texto correto e legível
* CSS: seta, cor, contraste
* Estrutura: `role="tooltip"`
* Some ao sair
* Não sobrepõe elementos críticos

---

## 🔔 Notificações

* Visível
* Texto correto (mensagens, contadores)
* CSS: estado não lido vs lido
* Estrutura: `role="status"`, lista de itens
* Botão “limpar tudo” funcional
* Responsividade

---

## 📱 Responsividade / Cross-browser

* Visível em diferentes resoluções
* Texto não corta nem sobrepõe
* CSS: adaptação correta (grid, flex, media queries)
* Estrutura: layout fluido ou responsivo
* Funciona em navegadores principais
* Elementos clicáveis ≥ 44px

---

## ⚙️ Filtros e Buscas Internas

* Visível
* Texto correto (placeholder “Buscar…”)
* CSS: campo ativo, foco
* Estrutura: input de busca ou select múltiplo
* Retorna resultados coerentes
* Vazio tratado com mensagem
* Performance aceitável

---

## 📍 Mapas / Geolocalização

* Visível
* Texto alternativo (descrição do mapa)
* CSS: responsividade, proporção
* Estrutura: iframe, canvas ou lib JS (Google Maps, Leaflet)
* Marcadores exibidos
* Zoom e navegação funcionam
* Permissão de localização tratada

---

## 📈 Gráficos / Dashboards

* Visível
* Texto correto em legendas, rótulos, tooltips
* CSS: cores legíveis, contraste para daltônicos
* Estrutura: canvas/svg
* Valores corretos
* Atualização em tempo real (se aplicável)
* Exportação disponível

---

## 🎥 Mídia (Áudio/Vídeo)

* Visível
* Texto alternativo ou legenda correta
* CSS: player responsivo
* Estrutura: `<audio>`, `<video>` com `controls`
* Play, pause, stop, volume
* Legendas sincronizadas
* Acessibilidade (atalhos teclado)

---

## 🔄 Estados Offline / Erro de Rede

* Visível (mensagem clara)
* Texto correto e amigável
* CSS: banner de erro, cor coerente
* Estrutura: componente de fallback
* Opção “tentar novamente”
* Reconexão automática (quando aplicável)

---

## 🔑 Autorização / Perfis de Usuário

* Visível apenas para perfis corretos
* Texto coerente em mensagens de acesso negado
* CSS: estado bloqueado/oculto
* Estrutura: controle condicional de renderização
* Acesso restrito não disponível por URL direta

---

## 🧩 Componentes Customizados

* Visível
* Texto correto (stepper, labels, botões de carrossel)
* CSS: transições, alinhamento, responsividade
* Estrutura: drag and drop, stepper, slider
* Funcionalidade completa (arrastar, avançar, retroceder)
* Acessibilidade garantida

---