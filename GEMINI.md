# GEMINI.md - Contexto do Projeto "Meu Apoio Diário" (V8 - MAX)

## Visão Geral do Projeto

Este diretório contém o código-fonte da versão **V8 - MAX** (identificada internamente como v12 no título) da aplicação **"Meu Apoio Diário"**.

É uma **Single Page Application (SPA)** estática, construída com tecnologias web fundamentais, projetada como uma ferramenta de **suporte terapêutico, auto-regulação e função executiva** para o Rodrigo (perfil AuDHD + PDA).

### Filosofia do Projeto
*   **Neuro-Afirmativo:** O design e o conteúdo validam a neurodivergência, focando em suporte e não em "cura".
*   **"Cérebro Externo":** Atua como um auxiliar para monitoramento de estado, tomada de decisão e acesso rápido a estratégias de enfrentamento.
*   **Baixa Fricção:** A interface é projetada para ser usada em estados de baixa energia ou sobrecarga (botões grandes, textos curtos, feedback visual imediato).

## Stack Tecnológico

*   **HTML5:** Estrutura semântica. Uso extensivo de `data-attributes` para lógica de UI.
*   **CSS3:** Estilização responsiva e acessível. Uso de Variáveis CSS (`:root`) para temas (Calma, Alerta, Sobrecarga).
*   **JavaScript (Vanilla ES6+):**
    *   Sem frameworks (React, Vue, etc.).
    *   Sem build steps (Webpack, Babel).
    *   Lógica baseada em manipulação direta do DOM e funções globais (`window.funcName`).

## Estrutura de Arquivos

*   **`index.html`:** O esqueleto da aplicação. Contém todo o conteúdo de todas as abas (ocultas/exibidas via CSS).
*   **`script.js`:** O cérebro da aplicação.
    *   Gerencia a navegação por abas (`openTab`).
    *   Contém os dados estáticos para quizzes (`hyperfocusData`, `musicQuizData`, `pdaQuizData`, `hadQuizData`).
    *   **`analyzeState()`:** Função central que lê os inputs do Check-in e gera sugestões terapêuticas personalizadas.
*   **`style.css`:** O visual. Define a aparência dos componentes e o sistema de cores semântico.

## Funcionalidades Principais (Abas)

1.  **✓ Check-in:** Monitoramento de Regulação (Zonas), Energia, Sensorial, Humor, Dor Física e Demandas. Fornece feedback imediato.
2.  **⚙️ Ferramentas:** Utilitários de regulação rápida:
    *   Respiração (Box Breathing).
    *   Grounding (5-4-3-2-1).
    *   **Hiperfoco:** Gerador de prompts e Quizzes para distração positiva.
3.  **🛡️ Estratégias (Atualizado 2025):** Acordeões com guias práticos:
    *   **Chaves PDA:** Foco em Linguagem Declarativa e Resolução Colaborativa (CPS).
    *   **Crises:** Foco em Segurança, Regulação do Sistema Nervoso e Validação.
    *   **Sensorial:** Estratégias de Ambiente, Ruído Marrom e Propriocepção.
    *   **Inércia:** Nova seção sobre "Navegando a Inércia Autista e Transições".
4.  **🧩 Aprender (Autismo/Tópicos/Social):** Base de conhecimento sobre neurodivergência (Meltdowns, Burnout, Mascaramento, etc.).
5.  **🚀 Aprender Gemini:** Tutorial meta-cognitivo para criação de prompts.
6.  **❓ PDA:** Quiz de auto-reflexão sobre o perfil de Evitação de Demandas.
7.  **📊 HAD:** Escala Hospitalar de Ansiedade e Depressão para auto-reflexão (Implementado v12.1).
8.  **💡 Inspiração:** Estudos de caso e relatos de experiências autistas.

## Atualizações Recentes (v12.1 - Dez 2025)

### Conteúdo Terapêutico
*   **Modernização PDA:** Substituição de conceitos antigos por "Linguagem Declarativa" e "CPS" (Collaborative Problem Solving).
*   **Foco no Sistema Nervoso:** Atualização das estratégias de crise para priorizar a regulação fisiológica (Vagal Brake, Descanso Monotrópico).
*   **Sensorial:** Adição de "Ruído Marrom" e "Reset Digital".
*   **Inércia:** Nova estratégia específica para lidar com a Inércia Autista (momentum, pontes de transição).

### Correções Técnicas
*   **Fix Crítico HTML:** Correção de um erro de aninhamento (`</div>` faltante na aba Estratégias) que impedia a visualização das abas subsequentes.
*   **Refatoração JS/CSS:** A função `openTab` foi limpa para remover estilos inline (`style.display`), delegando a visibilidade inteiramente para a classe CSS `.active`. Isso previne conflitos de renderização.

## Diretrizes de Desenvolvimento

Ao editar este projeto, siga estritamente estas regras:

1.  **Mantenha Simples (KISS):** Não introduza dependências externas. O app deve rodar offline.
2.  **Padrão de Código JS:** Use funções globais (`window.funcName`) para handlers de eventos no HTML.
3.  **CSS Seguro:** Use as variáveis definidas no `:root`.
4.  **Preservação de Conteúdo:** O texto nas abas de "Estratégias" e "Aprender" é terapêutico. Alterações devem ser baseadas em evidências/melhores práticas (como a atualização 2025 realizada).
5.  **Estrutura HTML:** Atenção redobrada ao fechamento de tags `</div>` ao editar seções longas como os acordeões.

## Como Executar

Simplesmente abra o arquivo `index.html` em qualquer navegador moderno.