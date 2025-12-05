// === INÍCIO SCRIPT ===

// --- Dados Globais ---
// (Data definitions: hyperfocusData, musicQuizData, etc. - remain the same as you provided)
const hyperfocusData = {
    wot: ["Conversa com personagem WoT? Quem/Qual pergunta?", "Qual Ajah? Por quê?", "Tecnologia moderna inútil/perigosa em WoT?", "Sua teoria menos popular sobre WoT?", "Aiel com internet, como seria a cultura?"],
    ai: ["IA aprender idiomas instantaneamente, impacto no ESL?", "Aplicação IA + otimista? E pessimista?", "IA criar roteiros, faria final melhor p/ sua série?", "Como IA ajudaria autistas no dia a dia?", "Pergunta filosófica p/ IA superinteligente?"],
    tech: ["Gadget antigo que sente falta? Por quê?", "Inventar aparelho eletrônico, qual função?", "Tecnologia atual obsoleta em 10 anos?", "TVs gigantes ou projetores?", "Opinião sobre 'internet das coisas'?"],
    pc: ["Montar PC ou comprar pronto?", "Peça de hardware + superestimada?", "PC dos sonhos (sem limite $)?", "Jogo com config. + absurda?", "Guerra AMD vs Intel vs Nvidia?"]
};
const musicQuizData = [
    { q: "Nome completo Madonna?", o: ["Madonna Louise Veronica", "Madonna Louise Ciccone", "Madonna Veronica Ritchie", "Madonna Maria Ciccone"], a: 1, f: "É Madonna Louise Ciccone." },
    { q: "Madonna nasceu onde?", o: ["Detroit, MI", "Nova York, NY", "Bay City, MI", "Los Angeles, CA"], a: 2, f: "Nasceu em Bay City, Michigan." },
    { q: "Primeiro single Madonna (1982)?", o: ["Holiday", "Borderline", "Lucky Star", "Everybody"], a: 3, f: "'Everybody' foi o 1º." },
    { q: "Álbum de 1984 ('Material Girl')?", o: ["Madonna", "Like a Virgin", "True Blue", "Like a Prayer"], a: 1, f: "'Like a Virgin' (1984)." },
    { q: "Shakira nasceu onde?", o: ["Bogotá", "Medellín", "Cali", "Barranquilla"], a: 3, f: "Nasceu em Barranquilla, Colômbia." },
    { q: "Álbum ANTES do crossover global?", o: ["Magia", "Laundry Service", "Pies Descalzos", "El Dorado"], a: 2, f: "'Pies Descalzos' (1995)." },
    { q: "Álbum crossover inglês (2001)?", o: ["Fijación Oral, Vol. 1", "Laundry Service", "Sale el Sol", "Dónde Están los Ladrones?"], a: 1, f: "'Laundry Service' (2001)." },
    { q: "Música Copa 2010?", o: ["La La La (Brazil 2014)", "Dare (La La La)", "Waka Waka (This Time for Africa)", "Hips Don't Lie"], a: 2, f: "'Waka Waka' (2010)." },
    { q: "Kylie Minogue, novela início?", o: ["Home and Away", "Neighbours", "A Country Practice", "Flying Doctors"], a: 1, f: "'Neighbours'." },
    { q: "Hit retorno Kylie (2001)?", o: ["Locomotion", "I Should Be So Lucky", "Can't Get You Out of My Head", "Spinning Around"], a: 2, f: "'Can't Get You Out of My Head' (2001)." }
];
const eslQuizData = [
    { q: "Tempo verbal p/ exp. passada sem tempo exato?", o: ["Simple Past", "Past Continuous", "Present Perfect", "Past Perfect"], a: 2, f: "Present Perfect (e.g., 'I have visited')." },
    { q: "CLT foca em:", o: ["Gramática", "Tradução", "Interação/Uso real", "Repetição"], a: 2, f: "CLT prioriza comunicação." },
    { q: "'Phrasal verbs' (look up) são:", o: ["Verbo+Subst", "Verbo+Adv/Prep", "Adj+Verbo", "Prep+Subst"], a: 1, f: "Verbo + Advérbio/Preposição." },
    { q: "Exemplo 'countable noun'?", o: ["Water", "Information", "Advice", "Chair"], a: 3, f: "'Chair' (cadeira) é contável." },
    { q: "IPA ajuda com:", o: ["Gramática", "Vocab.", "Pronúncia", "Escrita"], a: 2, f: "IPA representa sons p/ pronúncia." }
];
const storyPromptsData = [
    "Controle remoto p/ pausar/avançar/retroceder sua vida por 1h. O q fazer?",
    "Acorda falando com animais (só 1 tipo). Qual? Pq?",
    "Seu hobby vira magia. Como usar?",
    "Portal no guarda-roupa p/ versões da sua casa. O q procurar?",
    "Nuvens de algodão doce c/ sabores. Sabor da + rara? Efeito?",
    "Trocar corpo c/ personagem WoT por 1 dia. Quem? 1ª ação?",
    "IA realiza desejo tecnológico c/ condição estranha. Qual desejo/condição?"
];
const pdaQuizData = [
    { q: "Resiste/evita pedidos (mesmo simples)?", o: ["Nunca/Raro", "Às vezes", "Frequente", "Quase Sempre"], v: [0, 1, 2, 3] },
    { q: "Usa desculpas, distração, negociação p/ evitar?", o: ["Nunca/Raro", "Às vezes", "Frequente", "Quase Sempre"], v: [0, 1, 2, 3] },
    { q: "Sente barreira interna p/ fazer algo q *quer*?", o: ["Nunca/Raro", "Às vezes", "Frequente", "Quase Sempre"], v: [0, 1, 2, 3] },
    { q: "Ansiedade/pânico com expectativas, prazos, regras?", o: ["Nunca/Raro", "Às vezes", "Frequente", "Quase Sempre"], v: [0, 1, 2, 3] },
    { q: "Forte necessidade de controle?", o: ["Nunca/Raro", "Às vezes", "Frequente", "Quase Sempre"], v: [0, 1, 2, 3] },
    { q: "Emoções mudam rápido/intenso sob pressão?", o: ["Nunca/Raro", "Às vezes", "Frequente", "Quase Sempre"], v: [0, 1, 2, 3] },
    { q: "Envolve-se em fantasia/role-play (p/ lidar/evitar)?", o: ["Nunca/Raro", "Às vezes", "Frequente", "Quase Sempre"], v: [0, 1, 2, 3] },
    { q: "Bom em masking (mesmo cansativo)?", o: ["Nunca/Raro", "Às vezes", "Frequente", "Quase Sempre"], v: [0, 1, 2, 3] },
    { q: "Reações extremas (pânico, fuga, shutdown) s/ controle?", o: ["Nunca/Raro", "Às vezes", "Frequente", "Quase Sempre"], v: [0, 1, 2, 3] },
    { q: "Dificuldade c/ limites ou 'não'?", o: ["Nunca/Raro", "Às vezes", "Frequente", "Quase Sempre"], v: [0, 1, 2, 3] },
    { q: "Capacidade de lidar varia c/ ansiedade/cansaço?", o: ["Nunca/Raro", "Às vezes", "Frequente", "Quase Sempre"], v: [0, 1, 2, 3] },
    { q: "Já descrito como controlador/mandão (p/ reduzir ansiedade)?", o: ["Nunca/Raro", "Às vezes", "Frequente", "Quase Sempre"], v: [0, 1, 2, 3] }
];
const hadQuizData = [
    // Subescala Ansiedade (A) - Ímpares
    { q: "Eu me sinto tensa(o) ou contraída(o):", o: ["A maior parte do tempo", "Boa parte do tempo", "De vez em quando", "Nunca"], v: [3, 2, 1, 0], subscale: 'A' },
    { q: "Eu sinto uma espécie de medo, como se alguma coisa ruim fosse acontecer:", o: ["Sim, de jeito muito forte", "Sim, mas não tão forte", "Um pouco, mas isso não me preocupa", "Nada disso"], v: [3, 2, 1, 0], subscale: 'A' },
    { q: "Estou com a cabeça cheia de preocupações:", o: ["A maior parte do tempo", "Boa parte do tempo", "De vez em quando", "Raramente"], v: [3, 2, 1, 0], subscale: 'A' },
    { q: "Consigo ficar sentado(a) à vontade e me sentir relaxado(a):", o: ["Sim, quase sempre", "Muitas vezes", "Poucas vezes", "Nunca"], v: [0, 1, 2, 3], subscale: 'A' },
    { q: "Eu tenho uma sensação ruim de medo, como um frio na barriga ou um aperto no estômago:", o: ["Nunca", "De vez em quando", "Muitas vezes", "Quase sempre"], v: [0, 1, 2, 3], subscale: 'A' },
    { q: "Eu me sinto inquieta(o), como se eu não pudesse ficar parada(o) em lugar nenhum:", o: ["Sim, demais", "Bastante", "Um pouco", "Não me sinto assim"], v: [3, 2, 1, 0], subscale: 'A' },
    { q: "De repente, tenho a sensação de entrar em pânico:", o: ["A quase todo momento", "Várias vezes", "De vez em quando", "Não senti isso"], v: [3, 2, 1, 0], subscale: 'A' },
    // Subescala Depressão (D) - Pares
    { q: "Eu ainda sinto que gosto das mesmas coisas de antes:", o: ["Sim, do mesmo jeito que antes", "Não tanto quanto antes", "Só um pouco", "Já não consigo ter prazer em nada"], v: [0, 1, 2, 3], subscale: 'D' },
    { q: "Dou risada e me divirto quando vejo coisas engraçadas:", o: ["Do mesmo jeito que antes", "Atualmente um pouco menos", "Atualmente bem menos", "Não consigo mais"], v: [0, 1, 2, 3], subscale: 'D' },
    { q: "Eu me sinto alegre:", o: ["Nunca", "Poucas vezes", "Muitas vezes", "A maior parte do tempo"], v: [3, 2, 1, 0], subscale: 'D' },
    { q: "Eu estou lenta(o) para pensar e fazer coisas:", o: ["Quase sempre", "Muitas vezes", "Poucas vezes", "Nunca"], v: [3, 2, 1, 0], subscale: 'D' },
    { q: "Eu perdi o interesse em cuidar da minha aparência:", o: ["Completamente", "Não estou mais me cuidando como eu deveria", "Talvez não tanto quanto antes", "Me cuido do mesmo jeito que antes"], v: [3, 2, 1, 0], subscale: 'D' },
    { q: "Fico animada(o) esperando as coisas boas que estão por vir:", o: ["Do mesmo jeito que antes", "Um pouco menos que antes", "Bem menos do que antes", "Quase nunca"], v: [0, 1, 2, 3], subscale: 'D' },
    { q: "Consigo sentir prazer quando assisto a um bom programa de televisão, de rádio ou quando leio alguma coisa:", o: ["Quase sempre", "Várias vezes", "Poucas vezes", "Quase nunca"], v: [0, 1, 2, 3], subscale: 'D' }
];

// --- Variáveis Globais ---
let currentStoryIndex = 0;
let currentQuizData = [];
let currentQuestionIndex = 0;
let quizScore = 0;
let currentPdaQuizData = [];
let currentPdaQuestionIndex = 0;
let pdaScores = {};
let currentHadQuizData = [];
let currentHadQuestionIndex = 0;
let hadScores = {}; // Armazena { optionIndex: number, score: number }

// --- Funções de Inicialização e Utilidade ---

function initializeOptionButtons() {
    const groups = new Set();
    document.querySelectorAll(".option-button[data-group]").forEach(btn => {
        groups.add(btn.dataset.group);
    });

    groups.forEach(group => {
        const groupButtons = document.querySelectorAll(`.option-button[data-group="${group}"]`);
        const hiddenInput = getElem(group);
        let selectedButton = document.querySelector(`.option-button[data-group="${group}"].selected`);

        // If no button is pre-selected, select the first one
        if (!selectedButton && groupButtons.length > 0) {
            selectedButton = groupButtons[0];
            selectedButton.classList.add("selected");
        }

        // Ensure only one is selected and update hidden input
        let firstSelectedFound = false;
        groupButtons.forEach(btn => {
            if (btn.classList.contains("selected")) {
                if (firstSelectedFound) {
                    btn.classList.remove("selected");
                } else {
                    firstSelectedFound = true;
                    if (hiddenInput) {
                        hiddenInput.value = btn.dataset.value;
                    }
                }
            }
        });
         // If somehow still no selection, default hidden input from first button if possible
         if (!firstSelectedFound && hiddenInput && groupButtons.length > 0){
               hiddenInput.value = groupButtons[0].dataset.value;
         }
    });
}

// Updated to handle pain slider display
function initializeRangeSliders() {
    document.querySelectorAll('input[type=range]').forEach(slider => {
        // More robustly find the associated display span
        let display = null;
        const label = slider.parentElement?.querySelector(`label[for='${slider.id}']`);
        if (label) {
            display = label.querySelector('.range-value-display');
        }
        // Fallback for structures where label is sibling or parent element contains span
        if (!display) {
            display = slider.previousElementSibling?.querySelector('.range-value-display') || slider.parentElement?.querySelector('.range-value-display');
        }

        if (display) {
            display.textContent = slider.value; // Set initial value display
            slider.addEventListener('input', (event) => {
                display.textContent = event.target.value; // Update display on move
            });
        }
    });
}


function getElem(id) {
    return document.getElementById(id);
}

// --- Funções de Evento ---

window.selectButton = function (button) {
    const group = button.dataset.group;
    if (!group) return;

    document.querySelectorAll(`.option-button[data-group="${group}"]`).forEach(btn => {
        btn.classList.remove("selected");
    });
    button.classList.add("selected");

    const hiddenInput = getElem(group);
    if (hiddenInput) {
        hiddenInput.value = button.dataset.value;
    }
}

window.toggleCollapsible = function (contentId, button) {
    const content = getElem(contentId);
    const arrow = button.querySelector(".section-arrow");
    if (content) {
        content.classList.toggle("active");
        if (arrow) arrow.classList.toggle("rotated");
    }
}

window.toggleAccordion = function (button) {
    // Não precisa de event.preventDefault() aqui, pois o <button> não tem ação padrão de navegação.
    const content = button.nextElementSibling;
    const arrow = button.querySelector(".accordion-arrow");
    if (content && content.classList.contains("accordion-content")) {
        content.classList.toggle("active");
        if (arrow) arrow.classList.toggle("rotated");
    }
}

// MODIFICADO: Adicionado event.preventDefault()
window.openTab = function (event, tabId) {
    console.log(`Attempting to open tab: ${tabId}`);
    // Previne o comportamento padrão se chamado por um evento de clique em link/botão
    if (event && event.preventDefault) {
         event.preventDefault();
    }

    const allTabs = document.querySelectorAll(".tab-content");
    console.log(`Found ${allTabs.length} tab content elements.`);
    allTabs.forEach(content => {
        content.classList.remove("active");
    });
    document.querySelectorAll(".tab-button").forEach(button => {
        button.classList.remove("active");
    });

    const tabToShow = getElem(tabId);
    if (tabToShow) {
        console.log(`Tab element "${tabId}" found. activating.`);
        tabToShow.classList.add("active");
    } else {
        console.error(`Tab element "${tabId}" NOT found!`);
    }

    let clickedButton = null;
    if (event && event.currentTarget && event.currentTarget.classList.contains('tab-button')) {
         // Se o evento veio diretamente de um botão de aba
        clickedButton = event.currentTarget;
    } else {
         // Tenta encontrar o botão da aba correspondente (útil se chamado por link interno)
        clickedButton = document.querySelector(`.tab-button[onclick*="'${tabId}'"]`);
    }

    if (clickedButton) {
        clickedButton.classList.add("active");
    }

    // Only scroll if triggered by an event on a tab button itself
    if (event && event.currentTarget && event.currentTarget.classList.contains('tab-button')) {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Se chamado por link interno (que usará openTabAndScroll ou openAccordionByTitle), o scroll será tratado lá.
}

// Função openTabAndScroll já tratava preventDefault corretamente
window.openTabAndScroll = function (event, tabId, elementId) {
    if (event) event.preventDefault(); // Já estava correto
    openTab(null, tabId); // Open tab without scrolling or default event handling

    setTimeout(() => {
        const targetElement = getElem(elementId);
        if (targetElement) {
            const parentContent = targetElement.closest('.collapsible-content:not(.active), .accordion-content:not(.active)');
            if (parentContent) {
                const parentButton = parentContent.previousElementSibling;
                if (parentButton && (parentButton.matches('.collapsible-button') || parentButton.matches('.accordion-button'))) {
                    parentContent.classList.add('active');
                    const arrow = parentButton.querySelector('.section-arrow, .accordion-arrow');
                    if (arrow) arrow.classList.add('rotated');
                }
            }
            // Scroll slightly above the element for better visibility
            const elementRect = targetElement.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            const offsetPosition = absoluteElementTop - 20; // Adjust offset as needed

            window.scrollTo({
                 top: offsetPosition,
                 behavior: 'smooth'
            });

            // Highlight
            targetElement.classList.add('highlight-section');
            setTimeout(() => {
                targetElement.classList.remove('highlight-section');
            }, 1500);
        } else {
            console.warn(`Element ID "${elementId}" not found in tab "${tabId}". Scrolling to tab start.`);
            const tabElement = getElem(tabId);
            if (tabElement) {
                 window.scrollTo({ top: tabElement.offsetTop, behavior: 'smooth'});
            }
        }
    }, 150); // Slightly increased delay for tab switch
}

// MODIFICADO: Adicionado event.preventDefault()
window.openAccordionByTitle = function(event, title, tabId) {
    // Previne o comportamento padrão se chamado por um evento de clique em link
    if (event && event.preventDefault) {
        event.preventDefault();
    }

    const tabButton = document.querySelector(`.tab-button[onclick*="'${tabId}'"]`);
    if (tabButton) {
        openTab(null, tabId); // Open tab without scrolling or default event handling
    } else {
        console.warn(`Tab button for "${tabId}" not found.`);
    }

    setTimeout(() => {
        const tabContent = getElem(tabId);
        if (!tabContent) {
            console.warn(`Tab content "${tabId}" not found.`);
            return;
        }
        let targetButton = null;
        tabContent.querySelectorAll('.accordion-button').forEach(button => {
            // More robust check: Ensure button has text content before checking includes
            const buttonText = button.textContent?.trim().toLowerCase() || "";
            const searchTitle = title.trim().toLowerCase();
            // Usar includes() pode ser arriscado se houver títulos semelhantes.
            // Idealmente, usar um data-attribute ou um ID mais específico seria melhor,
            // mas vamos manter a lógica atual por enquanto.
            if (buttonText.includes(searchTitle)) {
                targetButton = button;
            }
        });

        if (targetButton) {
            const content = targetButton.nextElementSibling;
            const arrow = targetButton.querySelector('.accordion-arrow');
            if (content && !content.classList.contains('active')) {
                content.classList.add('active');
                if (arrow) arrow.classList.add('rotated');
            }
            // Scroll slightly above the element
             const elementRect = targetButton.getBoundingClientRect();
             const absoluteElementTop = elementRect.top + window.pageYOffset;
             const offsetPosition = absoluteElementTop - 20; // Adjust offset
             window.scrollTo({ top: offsetPosition, behavior: 'smooth'});

            const accordionItem = targetButton.closest('.accordion-item');
            if (accordionItem) {
                accordionItem.classList.add('highlight-section');
                setTimeout(() => {
                    accordionItem.classList.remove('highlight-section');
                }, 1500);
            }
        } else {
            console.warn(`Accordion with title containing "${title}" not found in tab "${tabId}". Scrolling to tab start.`);
             const tabElement = getElem(tabId);
             if (tabElement) {
                   window.scrollTo({ top: tabElement.offsetTop, behavior: 'smooth'});
             }
        }
    }, 150); // Delay
}


window.ensureSectionOpen = function(contentId) {
    const content = getElem(contentId);
    const button = content?.previousElementSibling;

    if (content && button && button.matches('.collapsible-button, .accordion-button')) {
         const parentTab = content.closest('.tab-content');
         if(parentTab) {
              openTab(null, parentTab.id); // Open the correct tab first (sem evento)
         } else {
               console.warn("Could not determine parent tab for ensureSectionOpen:", contentId);
               return; // Exit if tab unknown
         }

         if (!content.classList.contains('active')) {
               content.classList.add('active');
               button.querySelector('.section-arrow, .accordion-arrow')?.classList.add('rotated');
         }
         setTimeout(() => {
               const elementRect = button.getBoundingClientRect();
               const absoluteElementTop = elementRect.top + window.pageYOffset;
               const offsetPosition = absoluteElementTop - 20; // Adjust offset
               window.scrollTo({ top: offsetPosition, behavior: 'smooth'});

               const container = button.closest('.collapsible-container, .accordion-item');
                if(container) {
                    container.classList.add('highlight-section');
                    setTimeout(() => container.classList.remove('highlight-section'), 1500);
                }
         }, 150); // Delay allows tab to open
    } else {
         console.warn("Could not find content/button for ensureSectionOpen:", contentId);
    }
}

window.showNewStoryPrompt = function () {
    const promptElement = getElem("story-prompt");
    if (promptElement && storyPromptsData.length > 0) {
        currentStoryIndex = (currentStoryIndex + 1) % storyPromptsData.length;
        promptElement.textContent = storyPromptsData[currentStoryIndex];
    }
}

// ===========================================================
// === analyzeState FUNCTION (Includes Meltdown Suggestions AND reads/uses Pain Inputs) ===
// ===========================================================
window.analyzeState = function () {
    try {
        // --- Coleta de Dados do Check-in (Including NEW Pain Inputs) ---
        const lightLevel = parseInt(getElem("light-level")?.value) || 1;
        const soundLevel = parseInt(getElem("sound-level")?.value) || 1;
        const textureNotice = getElem("texture-notice")?.value.trim() || "";
        const smellNotice = getElem("smell-notice")?.value.trim() || "";
        const energyLevel = parseInt(getElem("energy-level")?.value) || 3;
        const focusClarity = parseInt(getElem("focus-clarity")?.value) || 3;
        const thoughtPace = getElem("thought-pace")?.value || "normal";
        const interoceptionClarity = getElem("interoception-clarity")?.value || "media";
        const bodySignals = getElem("body-signals-v2")?.value.trim() || "";
        const regulationZone = getElem("regulation-zone")?.value || "alerta";
        const sleepQuality = getElem("sleep-quality")?.value || "media";
        const generalMood = getElem("general-mood")?.value || "neutro";
        const socialEnergy = getElem("social-energy")?.value || "nenhuma";
        const maskingEffort = getElem("masking-effort")?.value || "nenhum";
        const demandAnxiety = getElem("demand-anxiety")?.value || "baixa";
        const controlNeed = getElem("control-need")?.value || "baixa";
        const predictability = getElem("predictability")?.value || "normal";
        // --- NEW: Read Pain Inputs ---
        const painLevel = parseInt(getElem("pain-level")?.value) || 0;
        const painLocation = getElem("pain-location")?.value.trim() || "";
        // --- END NEW ---

        // --- Análise e Cálculo de Estresse/Alertas ---
        let stressScore = 0;
        let isHyperfocusPossible = regulationZone === "alerta" && energyLevel >= 4 && focusClarity >= 4;
        let alerts = [];
        let suggestions = [];
        let initialFeedbackHTML = null;

        // Calcula pontuação e adiciona alertas (Original + Pain)
        if (lightLevel > 3) { stressScore += (lightLevel - 3); alerts.push("Luz incômoda."); }
        if (soundLevel > 3) { stressScore += (soundLevel - 3); alerts.push("Sons incômodos."); }
        if (textureNotice.length > 0) { stressScore += 1; alerts.push(`Textura: ${textureNotice}.`); }
        if (smellNotice.length > 0) { stressScore += 1; alerts.push(`Cheiro: ${smellNotice}.`); }
        if (energyLevel < 3) { stressScore += (3 - energyLevel); alerts.push("Energia baixa."); }
        if (focusClarity < 3) { stressScore += (3 - focusClarity); alerts.push("Concentração difícil."); }
        if (thoughtPace === "muito_rapido") { stressScore += 2; alerts.push("Pensamentos muito rápidos."); }
        else if (thoughtPace === "rapido") { stressScore += 1; alerts.push("Pensamentos rápidos."); }
        if (sleepQuality === "ruim") { stressScore += 2; alerts.push("Sono ruim."); }
        else if (sleepQuality === "media") { stressScore += 1; alerts.push("Sono médio."); }
        else if (sleepQuality === "deslocado") { stressScore += 1; alerts.push("Sono deslocado."); }
        if (generalMood === "negativo" || generalMood === "irritado") { stressScore += 2; alerts.push(`Humor ${generalMood}.`); }
        if (interoceptionClarity === "dificil") { stressScore += 2; alerts.push("Interocepção difícil."); }
        if (bodySignals.length > 0) { stressScore += 1; alerts.push(`Sinais: ${bodySignals}.`); }
        if (regulationZone === "sobrecarga") { stressScore += 6; alerts.push("Zona de Sobrecarga!"); }
        else if (regulationZone === "agitada") { stressScore += 3; alerts.push("Zona Agitada."); }
        if (socialEnergy === "muita") { stressScore += 3; alerts.push("Gasto social alto."); }
        else if (socialEnergy === "media") { stressScore += 1; alerts.push("Gasto social moderado."); }
        if (maskingEffort === "alto") { stressScore += 3; alerts.push("Masking alto."); }
        else if (maskingEffort === "medio") { stressScore += 1; alerts.push("Masking médio."); }
        if (demandAnxiety === "evitando") { stressScore += 4; alerts.push("Evitando demandas ativamente!"); }
        else if (demandAnxiety === "alta") { stressScore += 3; alerts.push("Ansiedade alta com demandas."); }
        else if (demandAnxiety === "media") { stressScore += 1; alerts.push("Resistência a demandas."); }
        if (controlNeed === "alta") { stressScore += 2; alerts.push("Necessidade alta de controle/flexibilidade."); }
        if (predictability === "muito_inesperado") { stressScore += 2; alerts.push("Dia imprevisível."); }
        else if (predictability === "algumas_surpresas") { stressScore += 1; alerts.push("Surpresas no dia."); }
        // --- NEW: Factor Pain into Alerts/Stress ---
        if (painLevel > 3) { // Significant pain
             stressScore += (painLevel - 2); // Add proportionally more to stress
             alerts.push(`Dor significativa (Nível ${painLevel}${painLocation ? ': ' + painLocation : ''}).`);
        } else if (painLevel > 0) { // Some pain
             stressScore += 1; // Add baseline stress for any pain
             alerts.push(`Dor presente (Nível ${painLevel}${painLocation ? ': ' + painLocation : ''}).`);
        }
        // --- END NEW ---

        // --- Geração do Feedback ---
        const feedbackArea = getElem("feedback-area");
        const feedbackContent = getElem("feedback-content");
        if (!feedbackArea || !feedbackContent) return;

        // Define o feedback inicial (MODIFICADO: Removido '; return false;' dos onclicks gerados)
        if (regulationZone === "sobrecarga") {
            initialFeedbackHTML = `<p class="font-semibold text-red mb-3">🚨 Zona de Sobrecarga! Prioridade: segurança/redução estímulos. <a href="#strategy-overload" onclick="openTabAndScroll(event, 'tab-strategies', 'strategy-overload')" class="link-interno" style="color: var(--danger-color); font-weight: bold;">Ver estratégias JÁ?</a></p>`;
        } else if (regulationZone === "calma" && stressScore < 3 && generalMood === "positivo" && sleepQuality === "boa" && demandAnxiety === "baixa" && painLevel < 2) { // Added pain check here
            initialFeedbackHTML = `<p class="font-semibold text-green mb-3">✅ Zona Calma/poucos alertas. Ótimo! Explore <span class="link-interno" onclick="openTab(event, 'tab-tools')">Ferramentas</span>, <span class="link-interno" onclick="openTab(event, 'tab-inspiration')">Inspiração</span> ou <span class="link-interno" onclick="openTab(event, 'tab-learn-autism')">Aprender</span>?</p>`;
        } else if (regulationZone === "agitada") {
            initialFeedbackHTML = `<p class="font-semibold text-yellow mb-3">⚠️ Zona Agitada. Aja preventivamente. <a href="#strategy-anxiety" onclick="openTabAndScroll(event, 'tab-strategies', 'strategy-anxiety')" class="link-interno" style="color: var(--warning-color); font-weight: bold;">Ver estratégias p/ ansiedade?</a></p>`;
        }

        // Gera sugestões baseadas no estado (WITH NEW MELTDOWN/SHUTDOWN SUGGESTIONS INTEGRATED)
        const highStressThreshold = 10;
        const mediumStressThreshold = 5;

        // MODIFICADO: Removido '; return false;' dos onclicks gerados nas sugestões
        if (regulationZone === "sobrecarga" || stressScore >= highStressThreshold) {
             if (!initialFeedbackHTML?.includes("strategy-overload")) {
                 suggestions.push(`Prioridade: segurança/redução estímulos. Veja <a href="#strategy-overload" onclick="openTabAndScroll(event, 'tab-strategies', 'strategy-overload')" class="link-interno font-semibold">Estratégias Crise</a>.`);
             }
             suggestions.push(`Considere as <a href="#strategy-pda-keys" onclick="openTabAndScroll(event, 'tab-strategies', 'strategy-pda-keys')" class="link-interno font-semibold">Chaves PDA</a> para reduzir demandas percebidas.`);
             suggestions.push("Seja gentil consigo. Permita-se descansar e recuperar.");
             // --- NEW SUGGESTIONS FOR OVERLOAD ---
             suggestions.push(`Focus on safety and reducing stimuli *now*. Use your <span class="link-interno" onclick="openTabAndScroll(event, 'tab-strategies', 'strategy-overload')">Crisis Plan</span>.`);
             suggestions.push(`Remember this is temporary and involuntary. Access <span class="link-interno" onclick="openTabAndScroll(event, 'tab-tools', 'relaxation-content')">Relax tools</span> when able.`);
             // --- END NEW SUGGESTIONS ---
        } else if (regulationZone === "agitada" || stressScore >= mediumStressThreshold) {
             if (!initialFeedbackHTML?.includes("strategy-anxiety")) {
                 suggestions.push(`Aja preventivamente. Veja <a href="#strategy-anxiety" onclick="openTabAndScroll(event, 'tab-strategies', 'strategy-anxiety')" class="link-interno font-semibold">Estratégias Ansiedade</a>.`);
             }
             suggestions.push(`Faça uma <span class="link-interno" onclick="openTabAndScroll(event, 'tab-tools', 'relaxation-content')">pausa relax</span> ou use uma <span class="link-interno" onclick="openTabAndScroll(event, 'tab-tools', 'hyperfocus-content')">distração positiva</span>.`);
             suggestions.push(`Verifique necessidades básicas (água, comida, banheiro, descanso).`);
             if(demandAnxiety !== "baixa" || controlNeed === "alta") {
                 suggestions.push(`Explore as <a href="#strategy-pda-keys" onclick="openTabAndScroll(event, 'tab-strategies', 'strategy-pda-keys')" class="link-interno font-semibold">Chaves PDA</a> para abordagens indiretas e flexíveis.`);
             }
             if (sleepQuality !== "boa") { suggestions.push(`Sono afetado? Veja <span class="link-interno" onclick="openAccordionByTitle(event, 'Sono e Ritmos', 'tab-learn-topics')">dicas</span>/<span class="link-interno" onclick="openTabAndScroll(event, 'tab-strategies', 'strategy-sleep')">estratégias</span>.`); }
             if (interoceptionClarity === "dificil") { suggestions.push(`Pratique <span class="link-interno" onclick="openAccordionByTitle(event, 'Interocepção', 'tab-learn-autism')">interocepção</span> com gentileza.`); }
             // --- NEW SUGGESTIONS FOR AGITATED ---
             suggestions.push(`Pay attention to <span class="link-interno" onclick="openAccordionByTitle(event, 'Sinais de Alerta', 'tab-learn-autism')">Rumble Signs</span>. What triggered this feeling?`);
             suggestions.push(`Consider proactive regulation: stimming, sensory adjustment, or reducing upcoming demands using <span class="link-interno" onclick="openTabAndScroll(event, 'tab-strategies', 'strategy-pda-keys')">PDA keys</span>.`);
             // --- END NEW SUGGESTIONS ---
        } else {
              // Original Low stress / Calma suggestions
              if (!initialFeedbackHTML) { suggestions.push("Mantenha autoconhecimento/cuidado."); }
              suggestions.push(`Explore <span class="link-interno" onclick="openTabAndScroll(event, 'tab-tools', 'hyperfocus-content')">interesses</span> ou <span class="link-interno" onclick="openTabAndScroll(event, 'tab-tools', 'relaxation-content')">relaxamento</span>.`);
              if (interoceptionClarity !== "clara") { suggestions.push(`Continue praticando <span class="link-interno" onclick="openAccordionByTitle(event, 'Interocepção', 'tab-learn-autism')">interocepção</span>.`); }
              if (maskingEffort !== "nenhum") { suggestions.push(`Reflita sobre o custo do <span class="link-interno" onclick="openAccordionByTitle(event, 'Masking', 'tab-learn-autism')">masking</span>.`); }
              if (sleepQuality !== "boa") { suggestions.push(`Considere <span class="link-interno" onclick="openAccordionByTitle(event, 'Sono e Ritmos', 'tab-learn-topics')">dicas sono</span>/<span class="link-interno" onclick="openTabAndScroll(event, 'tab-strategies', 'strategy-sleep')">estratégias</span>.`); }
               if(demandAnxiety !== "baixa" || controlNeed !== "baixa") {
                    suggestions.push(`Mesmo bem, lembre-se das <a href="#strategy-pda-keys" onclick="openTabAndScroll(event, 'tab-strategies', 'strategy-pda-keys')" class="link-interno">Chaves PDA</a> para manter a flexibilidade.`);
                 }
        }

        // Original general suggestions check
        if (isHyperfocusPossible && regulationZone === "alerta") {
            suggestions.push(`🌟 Energia/Foco Altos! Lembre-se de pausas/hidratação/<span class="link-interno" onclick="openTabAndScroll(event, 'tab-tools', 'hyperfocus-content')">alongamentos</span> para evitar burnout.`);
        }
        if (demandAnxiety !== "baixa" && regulationZone !== "sobrecarga") { // Don't suggest quiz during overload
            suggestions.push(`🤔 Ansiedade com Demandas? Explore a <span class="link-interno" onclick="openTab(event, 'tab-pda-quiz')">Auto-Reflexão PDA</span> e <span class="link-interno" onclick="openAccordionByTitle(event, 'Ciclo Demanda', 'tab-learn-topics')">info</span>.`);
        }
        // --- NEW: Add suggestion if pain is present ---
        if (painLevel > 0 && regulationZone !== "sobrecarga") { // Avoid adding during overload maybe
            suggestions.push(`Dor física presente (${painLocation ? painLocation : 'Nível ' + painLevel}). Considere estratégias de alívio ou descanso. Se persistir, consulte um profissional.`);
        }
        // --- END NEW ---

        suggestions = [...new Set(suggestions)]; // Ensure unique suggestions

        // --- Renderização Otimizada do Feedback ---
        while (feedbackContent.firstChild) {
            feedbackContent.removeChild(feedbackContent.firstChild);
        }
        if (initialFeedbackHTML) {
            const initialP = document.createElement('p');
            // Re-apply classes based on original styles
            if (initialFeedbackHTML.includes('text-red')) initialP.className = 'font-semibold text-red mb-3';
            else if (initialFeedbackHTML.includes('text-green')) initialP.className = 'font-semibold text-green mb-3';
            else if (initialFeedbackHTML.includes('text-yellow')) initialP.className = 'font-semibold text-yellow mb-3';
            initialP.innerHTML = initialFeedbackHTML; // InnerHTML é necessário para interpretar os links
            feedbackContent.appendChild(initialP);
        }
        const alertsPara = document.createElement("p");
        alertsPara.style.fontSize = "0.9em";
        alertsPara.style.color = "var(--text-medium)";
        if (initialFeedbackHTML) {
            alertsPara.style.borderTop = "1px solid var(--border-color)";
            alertsPara.style.paddingTop = "8px";
            alertsPara.style.marginTop = "8px";
        }
        alertsPara.innerHTML = `<strong>Alertas (${stressScore} stress pts):</strong> ${alerts.length > 0 ? alerts.join(" ") : "Nenhum específico."}`; // Added stress score for info
        feedbackContent.appendChild(alertsPara);
        if (suggestions.length > 0) {
            const suggestionsContainer = document.createElement("div");
            const suggestionsTitle = document.createElement("h4");
            suggestionsTitle.style.fontWeight = "bold";
            suggestionsTitle.style.color = "var(--primary-hover)";
            suggestionsTitle.style.marginTop = "12px";
            suggestionsTitle.style.marginBottom = "6px";
            suggestionsTitle.textContent = "Sugestões:";
            suggestionsContainer.appendChild(suggestionsTitle);
            const suggestionsList = document.createElement("ul");
            suggestionsList.style.listStyle = "disc";
            suggestionsList.style.paddingLeft = "18px";
            suggestions.forEach(suggestionHTML => {
                const listItem = document.createElement("li");
                listItem.style.marginBottom = "4px";
                listItem.innerHTML = suggestionHTML; // InnerHTML é necessário para interpretar os links
                suggestionsList.appendChild(listItem);
            });
            suggestionsContainer.appendChild(suggestionsList);
            feedbackContent.appendChild(suggestionsContainer);
        }
        feedbackArea.classList.remove("hidden");
        setTimeout(() => { feedbackArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 100);

    } catch (error) {
        console.error("Erro na função analyzeState:", error);
        const feedbackContent = getElem("feedback-content");
        if (feedbackContent) {
             while (feedbackContent.firstChild) {
                 feedbackContent.removeChild(feedbackContent.firstChild);
             }
            const errorP = document.createElement('p');
            errorP.className = 'text-red font-semibold';
            errorP.textContent = `Ocorreu um erro ao analisar os dados: ${error.message}. Por favor, tente novamente ou verifique os valores inseridos.`;
            feedbackContent.appendChild(errorP);
            getElem("feedback-area")?.classList.remove("hidden");
        }
    }
}
// ===========================================================
// END OF analyzeState FUNCTION
// ===========================================================


// --- Funções de Hiperfoco e Quiz ---
// (Keep existing functions: handleHyperfocusClick, showHyperfocusPrompt, startQuiz, displayQuizQuestion, submitQuizAnswer, showQuizResults)
window.handleHyperfocusClick = function (topic) {
    if (topic === 'music' || topic === 'esl') {
        startQuiz(topic);
    } else {
        showHyperfocusPrompt(topic);
    }
}
window.showHyperfocusPrompt = function (topic) {
    const display = getElem("hyperfocus-display");
    if (!display) return;
    const prompts = hyperfocusData[topic];
    if (!prompts || prompts.length === 0) {
        display.innerHTML = "<p>Conteúdo não encontrado.</p>";
        return;
    }
    const randomIndex = Math.floor(Math.random() * prompts.length);
    display.innerHTML = "";
    const p = document.createElement("p");
    p.textContent = prompts[randomIndex];
    p.style.marginBottom = "8px";
    display.appendChild(p);
    const button = document.createElement("button");
    button.textContent = "🔄 Outro Prompt";
    button.className = "option-button";
    button.style.fontSize = "0.9em";
    button.style.backgroundColor = "#e5e7eb";
    button.onclick = () => showHyperfocusPrompt(topic); // Chamada direta, sem evento
    display.appendChild(button);
}
function startQuiz(topic) {
    currentQuizData = topic === 'music' ? [...musicQuizData] : [...eslQuizData];
    currentQuizData.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    quizScore = 0;
    displayQuizQuestion();
}
function displayQuizQuestion() {
    const display = getElem("hyperfocus-display");
    if (!display || currentQuestionIndex >= currentQuizData.length) {
        return showQuizResults();
    }
    const questionData = currentQuizData[currentQuestionIndex];
    display.innerHTML = "";
    const questionP = document.createElement("p");
    questionP.textContent = `Q ${currentQuestionIndex + 1}/${currentQuizData.length}: ${questionData.q}`;
    questionP.style.fontWeight = "bold";
    questionP.style.marginBottom = "8px";
    display.appendChild(questionP);
    const optionsDiv = document.createElement("div");
    questionData.o.forEach((optionText, index) => {
        const button = document.createElement("button");
        button.textContent = optionText;
        button.className = "quiz-option-button option-button";
        button.dataset.correctIndex = questionData.a;
        button.dataset.optionIndex = index;
        button.onclick = submitQuizAnswer; // Passa o evento implicitamente
        optionsDiv.appendChild(button);
    });
    display.appendChild(optionsDiv);
    const feedbackDiv = document.createElement("div");
    feedbackDiv.id = "quiz-feedback";
    display.appendChild(feedbackDiv);
}
function submitQuizAnswer(event) { // Recebe o evento
    const selectedButton = event.target;
    const correctIndex = parseInt(selectedButton.dataset.correctIndex);
    const optionIndex = parseInt(selectedButton.dataset.optionIndex);
    const questionData = currentQuizData[currentQuestionIndex];
    const feedbackDiv = getElem("quiz-feedback");
    const allOptionButtons = selectedButton.parentElement.querySelectorAll('.quiz-option-button');

    // Desabilitar botões após a seleção
    allOptionButtons.forEach(btn => btn.disabled = true);

    if (optionIndex === correctIndex) {
        selectedButton.classList.add("correct");
        if (feedbackDiv) {
            feedbackDiv.textContent = `Correto! ${questionData.f || ""}`;
            feedbackDiv.className = "correct"; // Use classes CSS para estilizar
        }
        quizScore++;
    } else {
        selectedButton.classList.add("incorrect");
        // Destaca a opção correta também
        allOptionButtons[correctIndex]?.classList.add("correct-unselected"); // Use uma classe diferente se quiser estilo diferente
        if (feedbackDiv) {
            feedbackDiv.textContent = `Incorreto. ${questionData.f || `Correto: ${questionData.o[correctIndex]}`}`;
            feedbackDiv.className = "incorrect"; // Use classes CSS para estilizar
        }
    }

    currentQuestionIndex++;
    setTimeout(() => {
        if (currentQuestionIndex < currentQuizData.length) {
            displayQuizQuestion();
        } else {
            showQuizResults();
        }
    }, 1800); // Tempo para ver o feedback
}
function showQuizResults() {
    const display = getElem("hyperfocus-display");
    if (!display) return;
    display.innerHTML = `<p>Quiz finalizado! Você acertou ${quizScore} de ${currentQuizData.length}.</p>`;
    const backButton = document.createElement("button");
    backButton.textContent = "↩️ Voltar Tópicos";
    backButton.className = "option-button";
    backButton.style.marginTop = "8px";
    backButton.onclick = () => { getElem("hyperfocus-display").innerHTML = "Clique em um tópico acima!"; };
    display.appendChild(backButton);
}

// --- Funções do Quiz PDA ---
// (Keep existing functions: startPdaQuiz, displayPdaQuestion, selectPdaOption, calculatePdaResults, renderPdaResults)
window.startPdaQuiz = function() {
    currentPdaQuizData = [...pdaQuizData];
    currentPdaQuestionIndex = 0;
    pdaScores = {};
    getElem('pda-quiz-controls').classList.add('hidden');
    getElem('pda-quiz-results').classList.add('hidden');
    getElem('pda-quiz-results').innerHTML = '';
    getElem('pda-quiz-container').innerHTML = ''; // Limpa container antes de começar
    displayPdaQuestion();
}
function displayPdaQuestion() {
    const container = getElem('pda-quiz-container');
    if (!container) return;

    if (currentPdaQuestionIndex >= currentPdaQuizData.length) {
        // Se chegou ao fim navegando para frente, calcula resultados
        return calculatePdaResults();
    }

    const questionData = currentPdaQuizData[currentPdaQuestionIndex];
    container.innerHTML = ''; // Limpa para a nova pergunta

    const questionBlock = document.createElement('div');
    questionBlock.className = 'question-block';

    const label = document.createElement('label');
    label.className = 'block-label';
    label.textContent = `Reflexão ${currentPdaQuestionIndex + 1}/${currentPdaQuizData.length}: ${questionData.q}`;
    questionBlock.appendChild(label);

    const optionsDiv = document.createElement('div');
    questionData.o.forEach((optionText, index) => {
        const button = document.createElement('button');
        button.textContent = optionText;
        button.className = 'pda-quiz-option-button option-button';
        button.dataset.questionIndex = currentPdaQuestionIndex;
        button.dataset.optionIndex = index;
        button.dataset.scoreValue = questionData.v[index];
        button.onclick = selectPdaOption; // Passa evento implicitamente

        // Marca o botão se já houver resposta para esta pergunta
        if (pdaScores[currentPdaQuestionIndex] !== undefined && index === pdaScores[currentPdaQuestionIndex].optionIndex) {
            button.classList.add('selected');
        }
        optionsDiv.appendChild(button);
    });
    questionBlock.appendChild(optionsDiv);
    container.appendChild(questionBlock);

    // Navegação
    const navigationDiv = document.createElement('div');
    navigationDiv.id = 'pda-quiz-navigation';
    navigationDiv.style.marginTop = '12px';
    navigationDiv.style.textAlign = 'center';

    if (currentPdaQuestionIndex > 0) {
        const prevButton = document.createElement('button');
        prevButton.textContent = '⬅️ Anterior';
        prevButton.className = 'action-button';
        prevButton.style.backgroundColor = '#6b7280'; // Estilo para diferenciar
        prevButton.style.marginRight = '8px';
        prevButton.onclick = () => {
            currentPdaQuestionIndex--;
            displayPdaQuestion();
        };
        navigationDiv.appendChild(prevButton);
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = (currentPdaQuestionIndex === currentPdaQuizData.length - 1) ? 'Ver Resultados ➡️' : 'Próxima ➡️';
    nextButton.className = 'action-button';
    // Habilita/desabilita baseado na resposta atual
    if (pdaScores[currentPdaQuestionIndex] === undefined) {
        nextButton.disabled = true;
        nextButton.style.opacity = '0.5';
    } else {
        nextButton.disabled = false;
        nextButton.style.opacity = '1';
    }
    nextButton.onclick = () => {
        if (pdaScores[currentPdaQuestionIndex] !== undefined) { // Segurança extra
             if (currentPdaQuestionIndex < currentPdaQuizData.length - 1) {
                 currentPdaQuestionIndex++;
                 displayPdaQuestion();
             } else {
                 calculatePdaResults(); // Chegou na última pergunta
             }
        }
    };
    navigationDiv.appendChild(nextButton);
    container.appendChild(navigationDiv);

    // Focar na pergunta atual para melhor experiência
    questionBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function selectPdaOption(event) { // Recebe evento
    const selectedButton = event.target;
    const questionIndex = parseInt(selectedButton.dataset.questionIndex);
    const optionIndex = parseInt(selectedButton.dataset.optionIndex);
    const scoreValue = parseInt(selectedButton.dataset.scoreValue);

    // Salva a resposta (índice e score)
    pdaScores[questionIndex] = { optionIndex: optionIndex, score: scoreValue };

    // Atualiza visualmente os botões da pergunta atual
    const optionsContainer = selectedButton.parentElement;
    optionsContainer.querySelectorAll('.pda-quiz-option-button').forEach(btn => btn.classList.remove('selected'));
    selectedButton.classList.add('selected');

    // Habilita o botão "Próxima"
    const nextButton = document.querySelector('#pda-quiz-navigation .action-button:last-child');
    if (nextButton) {
        nextButton.disabled = false;
        nextButton.style.opacity = '1';
    } else {
        // Isso não deveria acontecer se displayPdaQuestion funcionou
        console.error("Botão Próxima não encontrado em #pda-quiz-navigation");
    }
}
function calculatePdaResults() {
    let totalScore = 0;
    let summary = [];
    // Garante que todas as perguntas foram respondidas (ou marca como não respondida)
    for (let i = 0; i < currentPdaQuizData.length; i++) {
        if (pdaScores[i]) {
            totalScore += pdaScores[i].score;
            let questionText = currentPdaQuizData[i].q;
            let answerText = currentPdaQuizData[i].o[pdaScores[i].optionIndex];
            summary.push(`<li><strong>"${questionText}"</strong>: ${answerText} (${pdaScores[i].score}pts)</li>`);
        } else {
             // Marca explicitamente que não foi respondida (caso o usuário consiga pular)
             summary.push(`<li style="color:red;">Q ${i+1}: "${currentPdaQuizData[i].q}" - não respondida.</li>`);
             // Você pode decidir se quer permitir finalizar sem responder tudo.
             // Se não, a lógica em displayPdaQuestion/selectPdaOption deve impedir chegar aqui sem respostas.
        }
    }
    const maxScore = currentPdaQuizData.reduce((sum, q) => sum + Math.max(...q.v), 0);
    renderPdaResults(totalScore, maxScore, summary);
}
function renderPdaResults(score, maxScore, summaryList) {
    const resultsDiv = getElem('pda-quiz-results');
    const quizContainer = getElem('pda-quiz-container');
    if (!resultsDiv || !quizContainer) return;

    quizContainer.innerHTML = ''; // Limpa a área das perguntas

    let interpretation = "";
    const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;

    // MODIFICADO: Removido '; return false;' dos onclicks gerados
    if (percentage >= 75) {
        interpretation = `<p>Pontuação indica <strong>identificação significativa</strong> com características frequentemente associadas ao perfil PDA. Estratégias específicas para PDA (<span class="link-interno" onclick="openTabAndScroll(event, 'tab-strategies', 'strategy-pda-keys')">ver Chaves</span>) podem ser <strong>muito relevantes</strong>. <strong>Lembre-se: NÃO é diagnóstico</strong>. Explore <span class="link-interno" onclick="openAccordionByTitle(event, 'Ciclo Demanda', 'tab-learn-topics')">mais sobre PDA</span> e considere discutir com profissional experiente.</p>`;
    } else if (percentage >= 50) {
        interpretation = `<p>Pontuação indica <strong>identificação moderada</strong>. Algumas estratégias para PDA podem ser úteis, especialmente nas áreas de maior pontuação. Reflita sobre como a evitação de demandas impacta sua vida. Considere conversar com profissional se isso causa sofrimento significativo.</p>`;
    } else if (percentage >= 25) {
        interpretation = `<p>Pontuação indica <strong>identificação leve</strong>. Algumas estratégias de redução de demanda e ansiedade podem ajudar (<span class="link-interno" onclick="openTab(event, 'tab-strategies')">ver Estratégias</span>). Foque nas áreas onde se identificou mais e explore abordagens gerais de manejo de ansiedade e estresse.</p>`;
    } else {
        interpretation = `<p>Pontuação indica <strong>identificação baixa</strong> com características PDA conforme avaliado aqui. Outras abordagens ou perfis podem ser mais relevantes para sua experiência. Continue usando as outras seções para autoconhecimento.</p>`;
    }

    resultsDiv.innerHTML = `
        <h4>Resultado Auto-Reflexão PDA</h4>
        <p>Sua pontuação foi: <strong>${score} de ${maxScore} (${percentage.toFixed(1)}%)</strong></p> ${interpretation}
        <h5 style="font-weight:bold; margin:12px 0 4px 0;">Resumo Respostas:</h5>
        <ul style="font-size:0.8em; list-style:none; padding-left:0;">${summaryList.join("")}</ul>
        <p style="margin-top:12px; font-size:0.85em;"><strong>Lembrete:</strong> Ferramenta para autoconhecimento, não substitui avaliação profissional.</p>
        <button onclick="startPdaQuiz()" class="action-button" style="background-color:var(--warning-color); margin-top:12px;">Refazer Reflexão</button>
    `;

    resultsDiv.classList.remove('hidden');
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Mostra o botão de iniciar novamente (que estava escondido)
    const controlsDiv = getElem('pda-quiz-controls');
    if(controlsDiv) controlsDiv.classList.remove('hidden');
}


// ===========================================================
// NOVAS FUNÇÕES: HAD Quiz
// ===========================================================

/**
 * Inicia o quiz de auto-reflexão HAD.
 */
window.startHadQuiz = function() {
    // Embaralha perguntas DENTRO de cada subescala para manter a ordem Ímpar/Par original
    const anxietyQuestions = hadQuizData.filter(q => q.subscale === 'A').sort(() => Math.random() - 0.5);
    const depressionQuestions = hadQuizData.filter(q => q.subscale === 'D').sort(() => Math.random() - 0.5);
    // Intercala as perguntas para ficar mais parecido com o original (A, D, A, D...)
    currentHadQuizData = [];
    for (let i = 0; i < Math.max(anxietyQuestions.length, depressionQuestions.length); i++) {
        if (anxietyQuestions[i]) currentHadQuizData.push(anxietyQuestions[i]);
        if (depressionQuestions[i]) currentHadQuizData.push(depressionQuestions[i]);
    }
    // Alternativa: manter a ordem exata do PDF 1 a 14:
    // currentHadQuizData = [...hadQuizData]; // Descomente esta linha se preferir a ordem original

    currentHadQuestionIndex = 0;
    hadScores = {}; // Reseta as pontuações { qIndex: { optionIndex: number, score: number } }
    getElem('had-quiz-controls').classList.add('hidden'); // Esconde botão iniciar
    getElem('had-quiz-results').classList.add('hidden'); // Esconde resultados anteriores
    getElem('had-quiz-results').innerHTML = ''; // Limpa resultados anteriores
    displayHadQuestion(); // Mostra a primeira pergunta
}

/**
 * Exibe a pergunta atual do quiz HAD.
 */
function displayHadQuestion() {
    const container = getElem('had-quiz-container');
    if (!container) return;

    // Se chegou ao fim, calcula resultados
    if (currentHadQuestionIndex >= currentHadQuizData.length) {
        return calculateHadResults();
    }

    const questionData = currentHadQuizData[currentHadQuestionIndex];
    container.innerHTML = ''; // Limpa container

    // Cria o bloco da pergunta
    const questionBlock = document.createElement('div');
    questionBlock.className = 'question-block';

    // Cria o label da pergunta (usando o índice original se necessário, ou a ordem atual)
    // Para encontrar o índice original: const originalIndex = hadQuizData.findIndex(q => q.q === questionData.q) + 1;
    const label = document.createElement('label');
    label.className = 'block-label';
    label.textContent = `Pergunta ${currentHadQuestionIndex + 1}/${currentHadQuizData.length}: ${questionData.q}`;
    questionBlock.appendChild(label);

    // Cria os botões de opção
    const optionsDiv = document.createElement('div');
    questionData.o.forEach((optionText, index) => {
        const button = document.createElement('button');
        button.textContent = optionText;
        // Usar a classe específica ou a genérica .option-button
        button.className = 'had-quiz-option-button option-button';
        button.dataset.questionIndex = currentHadQuestionIndex; // Índice na ordem atual
        button.dataset.optionIndex = index;
        button.dataset.scoreValue = questionData.v[index]; // Armazena o valor da pontuação
        button.onclick = selectHadOption;

        // Marca como selecionado se já houver resposta para esta pergunta
        if (hadScores[currentHadQuestionIndex] !== undefined && index === hadScores[currentHadQuestionIndex].optionIndex) {
            button.classList.add('selected');
        }
        optionsDiv.appendChild(button);
    });
    questionBlock.appendChild(optionsDiv);
    container.appendChild(questionBlock);

    // Cria botões de navegação (Anterior/Próxima/Resultados)
    const navigationDiv = document.createElement('div');
    navigationDiv.id = 'had-quiz-navigation';
    navigationDiv.style.marginTop = '12px';
    navigationDiv.style.textAlign = 'center';

    // Botão Anterior (se não for a primeira pergunta)
    if (currentHadQuestionIndex > 0) {
        const prevButton = document.createElement('button');
        prevButton.textContent = '⬅️ Anterior';
        prevButton.className = 'action-button';
        prevButton.style.backgroundColor = '#6b7280'; // Cinza
        prevButton.style.marginRight = '8px';
        prevButton.onclick = () => {
            currentHadQuestionIndex--;
            displayHadQuestion();
        };
        navigationDiv.appendChild(prevButton);
    }

    // Botão Próxima/Resultados
    const nextButton = document.createElement('button');
    nextButton.textContent = (currentHadQuestionIndex === currentHadQuizData.length - 1) ? 'Ver Resultados ➡️' : 'Próxima ➡️';
    nextButton.className = 'action-button';
    nextButton.style.backgroundColor = 'var(--tertiary-color)'; // Cor do botão HAD
    // Desabilita se a pergunta atual não foi respondida
    if (hadScores[currentHadQuestionIndex] === undefined) {
        nextButton.disabled = true;
        nextButton.style.opacity = '0.5';
    } else {
        nextButton.disabled = false;
        nextButton.style.opacity = '1';
    }
    nextButton.onclick = () => {
        // Só avança/calcula se a pergunta atual foi respondida
        if (hadScores[currentHadQuestionIndex] !== undefined) {
            if (currentHadQuestionIndex < currentHadQuizData.length - 1) {
                currentHadQuestionIndex++;
                displayHadQuestion();
            } else {
                calculateHadResults();
            }
        }
    };
    navigationDiv.appendChild(nextButton);
    container.appendChild(navigationDiv);

    // Rola para a pergunta atual
     questionBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Seleciona uma opção no quiz HAD, armazena a pontuação e atualiza a UI.
 * @param {Event} event - O evento do clique no botão de opção.
 */
function selectHadOption(event) {
    const selectedButton = event.target;
    const questionIndex = parseInt(selectedButton.dataset.questionIndex); // Índice na ordem atual
    const optionIndex = parseInt(selectedButton.dataset.optionIndex);
    const scoreValue = parseInt(selectedButton.dataset.scoreValue);

    // Armazena a resposta e a pontuação
    hadScores[questionIndex] = { optionIndex: optionIndex, score: scoreValue };

    // Atualiza a seleção visual dos botões
    const optionsContainer = selectedButton.parentElement;
    optionsContainer.querySelectorAll('.had-quiz-option-button').forEach(btn => btn.classList.remove('selected'));
    selectedButton.classList.add('selected');

    // Habilita o botão "Próxima"
    const nextButton = document.querySelector('#had-quiz-navigation .action-button:last-child');
    if (nextButton) {
        nextButton.disabled = false;
        nextButton.style.opacity = '1';
    } else {
        console.error("Botão Próxima não encontrado em #had-quiz-navigation");
    }
}

/**
 * Calcula os escores totais de Ansiedade e Depressão do quiz HAD.
 */
function calculateHadResults() {
    let anxietyScore = 0;
    let depressionScore = 0;
    let summary = []; // Opcional: para mostrar as respostas

    for (let i = 0; i < currentHadQuizData.length; i++) {
         // A chave em hadScores é o índice na ordem em que a pergunta foi apresentada (0 a 13)
        if (hadScores[i]) {
            const questionData = currentHadQuizData[i]; // Pega os dados da pergunta na ordem apresentada
            const score = hadScores[i].score;

            if (questionData.subscale === 'A') {
                anxietyScore += score;
            } else if (questionData.subscale === 'D') {
                depressionScore += score;
            }

            // Opcional: Monta o resumo das respostas
            let questionText = questionData.q;
            let answerText = questionData.o[hadScores[i].optionIndex];
            summary.push(`<li><strong>"${questionText}"</strong>: ${answerText} (${score}pts) [${questionData.subscale}]</li>`);

        } else {
             // Caso alguma pergunta não tenha sido respondida
             const questionData = currentHadQuizData[i];
             summary.push(`<li>Q ${i+1}: ${questionData.q} - não respondida.</li>`);
        }
    }
    renderHadResults(anxietyScore, depressionScore, summary);
}

 /**
  * Determina a interpretação da pontuação HAD.
  * @param {number} score - A pontuação da subescala.
  * @returns {string} A string de interpretação.
  */
 function getHadInterpretation(score) {
     if (score >= 0 && score <= 7) {
         return "Improvável";
     } else if (score >= 8 && score <= 11) {
         return "Possível (Questionável/Duvidosa)";
     } else if (score >= 12 && score <= 21) {
         return "Provável";
     } else {
         return "Pontuação inválida"; // Caso algo dê errado
     }
 }

/**
 * Renderiza os resultados do quiz HAD na tela.
 * @param {number} anxietyScore - A pontuação total de ansiedade.
 * @param {number} depressionScore - A pontuação total de depressão.
 * @param {string[]} summaryList - Lista HTML opcional das respostas e pontuações.
 */
function renderHadResults(anxietyScore, depressionScore, summaryList) {
    const resultsDiv = getElem('had-quiz-results');
    const quizContainer = getElem('had-quiz-container');
    if (!resultsDiv || !quizContainer) return;

    quizContainer.innerHTML = ''; // Limpa a área de perguntas

    const anxietyInterpretation = getHadInterpretation(anxietyScore);
    const depressionInterpretation = getHadInterpretation(depressionScore);

    let resultHTML = `
        <h4>Resultado - Escala HAD</h4>
        <div style="margin-bottom: 15px; padding: 10px; border: 1px solid #ccc; border-radius: 4px; background-color: #f9f9f9;">
            <p style="margin-bottom: 5px;"><strong>Pontuação de Ansiedade: ${anxietyScore}</strong> (de 21)</p>
            <p style="font-weight: bold; color: ${anxietyScore <= 7 ? 'var(--success-color)' : anxietyScore <= 11 ? 'var(--warning-color)' : 'var(--danger-color)'};">
                Interpretação: ${anxietyInterpretation}
            </p>
        </div>
        <div style="margin-bottom: 15px; padding: 10px; border: 1px solid #ccc; border-radius: 4px; background-color: #f9f9f9;">
            <p style="margin-bottom: 5px;"><strong>Pontuação de Depressão: ${depressionScore}</strong> (de 21)</p>
             <p style="font-weight: bold; color: ${depressionScore <= 7 ? 'var(--success-color)' : depressionScore <= 11 ? 'var(--warning-color)' : 'var(--danger-color)'};">
                Interpretação: ${depressionInterpretation}
            </p>
        </div>
    `;

     // Adiciona o resumo se existir
     if (summaryList && summaryList.length > 0) {
         resultHTML += `
             <h5 style="font-weight:bold; margin:20px 0 4px 0;">Resumo Respostas:</h5>
             <ul style="font-size:0.8em; list-style:none; padding-left:0;">${summaryList.join("")}</ul>
         `;
     }

     resultHTML += `
         <div class="had-disclaimer" style="margin-top: 20px;"> <p><strong>⚠️ Lembrete Importante:</strong> Esta é apenas uma ferramenta de auto-reflexão. Resultados "possíveis" ou "prováveis" sugerem a necessidade de conversar com um profissional de saúde para uma avaliação adequada. <strong>NÃO é um diagnóstico.</strong></p>
         </div>
         <button onclick="startHadQuiz()" class="action-button" style="background-color:var(--tertiary-color); margin-top:12px;">Refazer Reflexão HAD</button>
     `;

     resultsDiv.innerHTML = resultHTML;
     resultsDiv.classList.remove('hidden'); // Mostra a área de resultados
     resultsDiv.scrollIntoView({ behavior: 'smooth', block: center }); // Rola para os resultados
 }


// --- Inicialização ao Carregar a Página ---
document.addEventListener('DOMContentLoaded', () => {
    // COMENTÁRIO ADICIONADO:
    // Lembre-se: A funcionalidade visual (mostrar/esconder abas, destacar botões, etc.)
    // depende crucialmente das classes CSS definidas em 'style.css'.
    try {
        // Inicializa componentes interativos
        initializeOptionButtons();
        initializeRangeSliders(); // Ensure this is called

        // Garante que a primeira aba ('tab-checkin') esteja ativa ao carregar
        const firstTabContent = getElem('tab-checkin');
        const firstTabButton = document.querySelector('.tab-button[onclick*="tab-checkin"]');

        document.querySelectorAll(".tab-content").forEach(tc => { tc.classList.remove('active'); });
        document.querySelectorAll(".tab-button").forEach(tb => tb.classList.remove('active'));

        if (firstTabContent) {
             firstTabContent.classList.add('active');
        }
        if (firstTabButton) {
             firstTabButton.classList.add('active');
        }

        showNewStoryPrompt(); // Initialize story prompt

        // Esconde a área de resultados do PDA Quiz inicialmente e mostra o botão de iniciar
        const pdaResults = getElem('pda-quiz-results');
        const pdaControls = getElem('pda-quiz-controls');
        if(pdaResults) pdaResults.classList.add('hidden');
        if(pdaControls) pdaControls.classList.remove('hidden');

        // Esconde a área de resultados do HAD Quiz inicialmente e mostra o botão de iniciar
        const hadResults = getElem('had-quiz-results');
        const hadControls = getElem('had-quiz-controls');
        if(hadResults) hadResults.classList.add('hidden');
        if(hadControls) hadControls.classList.remove('hidden');


    } catch (error) {
        console.error("Erro durante a inicialização da página:", error);
        // Optional: Display error message to user
        const container = document.querySelector('.container');
        if (container) {
             // Simples mensagem de erro no corpo da página
             const errorMsg = document.createElement('p');
             errorMsg.style.color = 'red';
             errorMsg.style.padding = '20px';
             errorMsg.textContent = 'Ocorreu um erro crítico ao carregar a aplicação. Por favor, recarregue a página ou verifique o console para detalhes.';
             // Limpa container e adiciona erro (cuidado para não quebrar tudo se o container for essencial)
             // container.innerHTML = ''; // Descomente com cautela
             container.prepend(errorMsg); // Adiciona no início para visibilidade
        }
    }
});

// === FIM SCRIPT ===