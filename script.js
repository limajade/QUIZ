const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
                
                
        enunciado: "Por causa do tamanho, as girafas ficam o tempo todo em pé e só se deitam quando vão dar à luz.
?",
        alternativas: [
            {
                texto: "verdadero",
                afirmacao: "Errado!! Na verdade As girafas tiram pequenas sonecas ao longo do dia, e para isso elas se deitam nessa posição extremamente fofinha que você vê na imagem. Na hora de dar à luz, as mamães girafas ficam em pé mesmo. Sim, os filhotes nascem e já despencam de uma altura de até 2,5 metros!

"
            },
            {
                texto: "falso",
                afirmacao: "As girafas tiram pequenas sonecas ao longo do dia, e para isso elas se deitam nessa posição extremamente fofinha que você vê na imagem. Na hora de dar à luz, as mamães girafas ficam em pé mesmo. Sim, os filhotes nascem e já despencam de uma altura de até 2,5 metros!

"
            },
           
            
        ]
    },
    {
        enunciado: "A gestação dos cavalos-marinhos é feita pelos machos. ?",
        alternativas: [
            {
                texto: "verdadero",
                afirmacao: "
No acasalamento, as fêmeas transferem seus ovos para a bolsa incubadora dos machos. Lá dentro, o macho libera o esperma e fecunda esses ovos. Cerca de dois meses depois acontece o que você vê no gif: o macho dá a luz aos bebezinhos cavalos-marinhos."
            },
            {
                texto: "falso",
                afirmacao: "Errado!! Na Verdade No acasalamento, as fêmeas transferem seus ovos para a bolsa incubadora dos machos. Lá dentro, o macho libera o esperma e fecunda esses ovos. Cerca de dois meses depois acontece o que você vê no gif: o macho dá a luz aos bebezinhos cavalos-marinhos. 
            }
        ]
    },
    {
        enunciado: "Os ornitorrincos são os únicos mamíferos venenosos que se tem notícia.?",
        alternativas: [
            {
                texto: "verdadeiro",
                afirmacao: " ERRADO!!! Na verdade Apesar de serem raros, existem outros mamíferos que produzem veneno. Um deles é o simpático mussaranho, que produz uma saliva venenosa mas que é inofensível aos humanos (dizem que ela só causa muita dor). O outro se chama solenodonte, que é esse bicho aí da foto que parece um rato gigante. Ele também produz uma saliva tóxica que é liberada pelos dentes incisivos quando morde a presa."
            },
            {
                texto: "falso",
                afirmacao: "Apesar de serem raros, existem outros mamíferos que produzem veneno. Um deles é o simpático mussaranho, que produz uma saliva venenosa mas que é inofensível aos humanos (dizem que ela só causa muita dor). O outro se chama solenodonte, que é esse bicho aí da foto que parece um rato gigante. Ele também produz uma saliva tóxica que é liberada pelos dentes incisivos quando morde a presa."
            },
          
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();